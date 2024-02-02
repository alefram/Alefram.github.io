---
  title: 'Basic inverse kinematics in MuJoCo'
  date: '2023-12-14'
  description: 'Basic IK for Mujoco'
  keywords: 'Machine Learning, Robotics, Electronics, Reinforcement Learning, Blog, 
  Portfolio, Alexis, Fraudita, Alexis Fraudita, Python, Pytorch'
---

In my journey learning the basics of Robotics manipulation, I was wondering how
to do simple inverse kinematics. I know that there is a lot of libraries that
implement this stuff, but I want to practice on how to translate the math/pseudocode 
to the implementation specially in MuJoCo which is my principal simulator for 
implement my experiments right now. This what I learn.

## What is inverse kinematics?

Imagine that you have a robot of manipulator with 6 joints and one end-effector 
(the tool that the robot use like a pinza), you wanna to move the end-effector
to a specific point in a 3D space for some task. How do you know what are the 
specific coordinates that the joints required to pose the end-effector in your desire point?,
That's the question that inverse kinematics answer. Inverse kinematics is the mapping
of end-effector pose to joint coordinates.

![ik-diagram](/images/ik-diagram.svg)

Giving that there's two ways to solve inverse kinematics, the analytical 
approach and the numerical approach. The analytical approach, consist in use the
mathematical model...


In this article I will focus on the numerical approaches that I found.

## Inverse Kinematics algorithms

Searching for the most commun ways of compute the inverse kinematics, I found the
master thesis of Anton Larsson and Oskar Grönlund called "Comparative Analysis of 
the Inverse Kinematics of a 6-DOF Manipulator". In this thesis they talked about
the way to describe the relation approximately between joint angles and desire 
position using the Jacobian, where they explain 3 methods: **Gradient Descent**, **Gauss-Newton**
and **Levenberg-Marquardt**.

Seeing that they provide the algorithm pseudocode of each, I have the idea of trying 
to re implement this tecniques in mujoco for practice so let me explain how I do it.


### Gauss-Newton 

The Gauss-Newton algorithm is a extension of a Newton's method for finding a 
minimum of a non-linear function [1]. It starts by defining an initial guess $x_{n}$
and estimate the next best optimal value denote by $x_{n+1}$ using the equation (1)

$$
\begin{align}
    x_{n+1} = x_{n} - \frac{f^{\prime}(x_{n})}{f^{\prime\prime}(x_{n})}
\end{align}
$$

Where $f^{\prime}(x_{n})$ is the gradient of the cost function at the current point 
$x_{n}$, and $f^{\prime\prime}(x_{n})$ is the second derivative of the cost function 
at the same point called **Hessian matrix** that measure how the gradient changes as 
the parameters change. This equation updates the current point $x_{n}$ by moving 
in the direction that minimizes the cost function, taking into account both the 
gradient and the curvature of the cost function at the current point. We are not 
falling deep in this tecnique if you want to know more please check the Anton 
and Oskar thesis[2].

The Gauss-Newton method aproximate the  **Hessian matrix** using the Jacobian matrix
to get the relationship between joints and end-effector position, but in Anton 
and Oskar thesis use the pseudo inverse of the Jacobian matrix seen in the equation (2) 
instead of the original version.[2]

$$
\begin{align}
    J^{\dagger} = (J^{T}J)^{-1}J^{T}
\end{align}
$$

Then the equation (1) turns to.

$$
\begin{align}
    x_{n+1} = x_{n} - H^{-1}\nabla f(x_{n}) = x_{n} - J^{\dagger}r(x)
\end{align}
$$

Finally in the thesis provides a pseudocode to use.

```latex
goal_pose = y
q = current joint angles
step_size = desired step size
tolerance = set tolerance
e = goal_pose - current_pose
while norm(e) >= tolerance do
    J = Jacobian(q)
    J_T = J.transpose()
    J_pinv = (J_T * J).inv() * J_T
    delta_q = J_pinv * e
    q += step_size * delta_q
    q = check_joint_limits(q)
    e = goal_pose - ForwardKinematics(q)
end while
```

### Gradient Descent

The gradient descent method also called **Jacobian transpose method**, is another
numerical approach to solve the inverse kinematics optimization problem. This
method solve this problem by iteratively adjusting the angles of the joinst to 
decrease the error between the desired and actual end-effector position.

To get the joint angles, this method makes use of the transpose of the Jacobian matrix
to map the error between actual and desired end-effector position into the 
angles of the joints [2] which means calculate the gradient. 
This is doing by the equation (3)

$$
\begin{align}
    x_{n+1} = x_{x} - \alpha \nabla f(x_{n}) = x_{n} - \alpha J^{T}r(x)
\end{align}
$$

where $\alpha$ is the learning rate that define the size of the step taken into 
the direction of the steepest descent during each iteraction [2]. Also is commun
to define this parameter by trial and error.

As Gauss-Newton method, the Anto and Oskar thesis provide with the pseudocode to
use more lately.

```latex
goal_pose = y
q = current joint angles
step_size = desired step size
tolerance = set tolerance
e = goal_pose - current_pose
while norm(e) >= tolerance do
    J = Jacobian(q)
    J_T = J.transpose()
    gradient = alpha * J_T * e
    q += step_size * gradient
    q = check_joint_limits(q)
    e = goal_pose - ForwardKinematics(q)
end while
```

### Levenberg-Marquardt 

The Levenberg-Marquardt method, is a combination of Gauss-Newton and gradient descent
using the following equation.

$$
\begin{align}
    x_{n+1} = x_{n} + (J^{T}J + \lambda I)^{-1}J^{T}r(x_{n})
\end{align}
$$

Where $x_{n}$ is a actual x at the n-th iteraction, $J$ the Jacobian matrix of the
$f(x)$ function, $r(x_{n})$ is the residual vector at $x_{n}$, \lambda is a **damping** 
to control the step size and $I$ is the identity matrix.

As \alpha, \lambda also is take it by trial and error.

```latex
goal_pose = y
q = current joint angles
step_size = desired step size
tolerance = set tolerance
e = goal_pose - current_pose
lambda = damping factor

while norm(e) >= tolerance do
    J = Jacobian(q)
    J_T = Jacobian.transpose()
    J_inv = (J_T * J + lambda * I).inv() * J_T
    delta_q = J_inv * e
    q += step_size * delta_q
    q = check_joint_limits(q)
    e = goal_pose - ForwardKinematics(q)
end while
```
## Implementation

Ok stop theory lets get into practice. 

First you have to install the necessary libraries for program, in this case I decide
use the python bindings of [MuJoCo library](https://mujoco.readthedocs.io/en/stable/python.html)

```python
import numpy as np
import mujoco
import mujoco.viewer as viewer
import mediapy as media
```

Then, load a MuJoCo model to test our inverse kinematics. In this
case I decide to use the UR5e robot arm from the **mujoco_menangerie**
[library](https://github.com/google-deepmind/mujoco_menagerie/blob/main/universal_robots_ur5e/README.md)

```python
xml = "<path>/mujoco_menagerie/universal_robots_ur5e/scene.xml" # add your path
model = mujoco.MjModel.from_xml_path(xml)
data = mujoco.MjData(model)
renderer = mujoco.Renderer(model)
```

Also I create a new camera to get a better view of the robot.

```python
camera = mujoco.MjvCamera()
mujoco.mjv_defaultFreeCamera(model, camera)
camera.distance = 1
```

One important thing is to have a "test coordinate" to prove if the algorithm is correct,
to do that I put a position of the joints that give me a good visualization by
trial and error and use the "**wrist 3**" link (which is the last piece of the 
robot model) of the robot as a **end-effector** 

```python
#put a position of the joints to get a test point
pi = np.pi
data.qpos = [3*pi/2, -pi/2, pi/2, 3*pi/2, 3*pi/2, 0]

# inititial joint position
qpos0 = data.qpos.copy()

# Step the simulation.
mujoco.mj_forward(model, data)

# use the last piece as an "end effector" to get a test point in cartesian variables
target = data.body('wrist_3_link').xpos
print("Target =>",target)

#plot robot
print("Results")
mujoco.mj_resetDataKeyframe(model, data, 1)
mujoco.mj_forward(model, data)
init_point = data.body('wrist_3_link').xpos.copy()
renderer.update_scene(data, camera)
target_plot = renderer.render()

data.qpos = qpos0
mujoco.mj_forward(model, data)
result_point = data.body('wrist_3_link').xpos.copy()
renderer.update_scene(data, camera)
result_plot = renderer.render()

print("initial point =>", init_point)
print("Desire point =>", result_point, "\n")

images = {
    'Initial position': target_plot,
    ' Desire end effector position': result_plot,
}

media.show_images(images)
```

And this is what I got 

![test coordinate](/images/test_point.png)


Now lets create the algorithms. 

As you can see in the pseudocode there is something similar which is that they 
all use the **Jacobian**. Fortunaly, MuJoCo provide with a method that allow 
us to calculate the jacobian without to do it manually which is [mj_jac](https://mujoco.readthedocs.io/en/stable/APIreference/APIfunctions.html?highlight=mj_jac#mj-jac)
it can be a big help to create this algorithms. 

I create a class for the different algorithms to use it more simply where 
I define the **check_joint_limits** method in the pseudocode and the **calculate**
method where I implement the algorithm using MuJoCo library and numpy.

Once I have the algorithms implement it, I inicialize the variables for each 
algorithm. These values change a lot depending of the distance from the starting
angles, so I took the values by trial and error that works best in my case 
but if you want to see futter, go ahead and play with the parameters. Finally
I render de model and see if it works.


**Gradient descent**

```python
# Gradient Descent method
class GradientDescentIK:
    
    def __init__(self, model, data, step_size, tol, alpha, jacp, jacr):
        self.model = model
        self.data = data
        self.step_size = step_size
        self.tol = tol
        self.alpha = alpha
        self.jacp = jacp
        self.jacr = jacr
    
    def check_joint_limits(self, q):
        """Check if the joints is under or above its limits"""
        for i in range(len(q)):
            q[i] = max(self.model.jnt_range[i][0], min(q[i], self.model.jnt_range[i][1]))

    def calculate(self, goal, init_q, body_id):
        """Calculate the desire joints angles for goal"""
        self.data.qpos = init_q
        mujoco.mj_forward(self.model, self.data)
        current_pose = self.data.body(body_id).xpos
        error = np.subtract(goal, current_pose)

        while (np.linalg.norm(error) >= self.tol):
            #calculate jacobian
            mujoco.mj_jac(self.model, self.data, self.jacp, self.jacr, goal, body_id)
            #calculate gradient
            grad = self.alpha * self.jacp.T @ error
            # next step
            self.data.qpos += self.step_size * grad
            # check joint limits
            self.check_joint_limits(self.data.qpos)
            #compute forward kinematics
            mujoco.mj_forward(self.model, self.data) 
            # calculate new error
            error = np.subtract(goal, self.data.body(body_id).xpos)  
```

```python
# Init variables.
body_id = model.body('wrist_3_link').id
jacp = np.zeros((3, model.nv)) # translation jacobian
jacr = np.zeros((3, model.nv)) # rotational jacobian
goal = [0.49, 0.13, 0.59]
step_size = 0.5
tol = 0.01
alpha = 0.5
init_q = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]

ik = GradientDescentIK(model, data, step_size, tol, alpha, jacp, jacr)

# Get desire point
mujoco.mj_resetDataKeyframe(model, data, 1) # Reset qpos to initial value
ik.calculate(goal, init_q, body_id) # calculate the q angles

result = data.qpos.copy()

# plot results
print("Results")
data.qpos = qpos0
mujoco.mj_forward(model, data)
renderer.update_scene(data, camera)
target_plot = renderer.render()

data.qpos = result
mujoco.mj_forward(model, data)
result_point = data.body('wrist_3_link').xpos
renderer.update_scene(data, camera)
result_plot = renderer.render()

print("testing point =>", target)
print("Gradient Descent result =>", result_point, "\n")

images = {
    'Testing point': target_plot,
    'Gradient Descent result': result_plot,
}

media.show_images(images)
```

![gd-result-render](/images/gdresult.png "Gradient Descent result")

**Gauss-Newton**

```python
# Gauss-Newton method
class GaussNewtonIK:
    
    def __init__(self, model, data, step_size, tol, alpha, jacp, jacr):
        self.model = model
        self.data = data
        self.step_size = step_size
        self.tol = tol
        self.alpha = alpha
        self.jacp = jacp
        self.jacr = jacr
    
    def check_joint_limits(self, q):
        """Check if the joints is under or above its limits"""
        for i in range(len(q)):
            q[i] = max(self.model.jnt_range[i][0], min(q[i], self.model.jnt_range[i][1]))

    def calculate(self, goal, init_q, body_id):
        """Calculate the desire joints angles for goal"""
        self.data.qpos = init_q
        mujoco.mj_forward(self.model, self.data)
        current_pose = self.data.body(body_id).xpos
        error = np.subtract(goal, current_pose)

        while (np.linalg.norm(error) >= self.tol):
            #calculate jacobian
            mujoco.mj_jac(self.model, self.data, self.jacp, self.jacr, goal, body_id)
            #calculate delta of joint q
            product = self.jacp.T @ self.jacp
            
            if np.isclose(np.linalg.det(product), 0):
                j_inv = np.linalg.pinv(product) @ self.jacp.T
            else:
                j_inv = np.linalg.inv(product) @ self.jacp.T
            
            delta_q = j_inv @ error
            # next step
            self.data.qpos += self.step_size * delta_q
            # check limits
            self.check_joint_limits(self.data.qpos)
            #compute forward kinematics
            mujoco.mj_forward(self.model, self.data) 
            # calculate new error
            error = np.subtract(goal, self.data.body(body_id).xpos) 
```

```python

# Init variables.
body_id = model.body('wrist_3_link').id
jacp = np.zeros((3, model.nv)) # translation jacobian
jacr = np.zeros((3, model.nv)) # rotational jacobian
goal = [0.49, 0.13, 0.59]
step_size = 0.5
tol = 0.01
alpha = 0.5
init_q = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]

ik = GaussNewtonIK(model, data, step_size, tol, alpha, jacp, jacr)

# Get desire point
mujoco.mj_resetDataKeyframe(model, data, 1) # Reset qpos to initial value
ik.calculate(goal, init_q, body_id) # calculate the qpos

result = data.qpos.copy()

# plot results
print("Results")
data.qpos = qpos0
mujoco.mj_forward(model, data)
renderer.update_scene(data, camera)
target_plot = renderer.render()

data.qpos = result
mujoco.mj_forward(model, data)
result_point = data.body('wrist_3_link').xpos
renderer.update_scene(data, camera)
result_plot = renderer.render()

print("testing point =>", target)
print("Gauss-Newton result =>", result_point, "\n")

images = {
    'Testing point': target_plot,
    'Gauss-Newton result': result_plot,
}

media.show_images(images)
```

![gn-result-render](/images/gnresult.png "Gradient Descent result")

**Levenberg-Marquardt**

```python
# Levenberg-Marquardt method
class LevenbegMarquardtIK:
    
    def __init__(self, model, data, step_size, tol, alpha, jacp, jacr, damping):
        self.model = model
        self.data = data
        self.step_size = step_size
        self.tol = tol
        self.alpha = alpha
        self.jacp = jacp
        self.jacr = jacr
        self.damping = damping
    
    def check_joint_limits(self, q):
        """Check if the joints is under or above its limits"""
        for i in range(len(q)):
            q[i] = max(self.model.jnt_range[i][0], min(q[i], self.model.jnt_range[i][1]))

    def calculate(self, goal, init_q, body_id):
        """Calculate the desire joints angles for goal"""
        self.data.qpos = init_q
        mujoco.mj_forward(self.model, self.data)
        current_pose = self.data.body(body_id).xpos
        error = np.subtract(goal, current_pose)

        while (np.linalg.norm(error) >= self.tol):
            #calculate jacobian
            mujoco.mj_jac(self.model, self.data, self.jacp, self.jacr, goal, body_id)
            #calculate delta of joint q
            n = self.jacp.shape[1]
            I = np.identity(n)
            product = self.jacp.T @ self.jacp + self.damping * I
            
            if np.isclose(np.linalg.det(product), 0):
                j_inv = np.linalg.pinv(product) @ self.jacp.T
            else:
                j_inv = np.linalg.inv(product) @ self.jacp.T
            
            delta_q = j_inv @ error
            # next step
            self.data.qpos += self.step_size * delta_q
            # check limits
            self.check_joint_limits(self.data.qpos)
            #compute forward kinematics
            mujoco.mj_forward(self.model, self.data) 
            # calculate new error
            error = np.subtract(goal, self.data.body(body_id).xpos)  
```

```python
# Init variables.
body_id = model.body('wrist_3_link').id
jacp = np.zeros((3, model.nv)) # translation jacobian
jacr = np.zeros((3, model.nv)) # rotational jacobian
goal = [0.49, 0.13, 0.59]
step_size = 0.5
tol = 0.01
alpha = 0.5
init_q = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
damping = 0.15

ik = LevenbegMarquardtIK(model, data, step_size, tol, alpha, jacp, jacr, damping)

# Get desire point
mujoco.mj_resetDataKeyframe(model, data, 1) # Reset qpos to initial value
ik.calculate(goal, init_q, body_id) # calculate the qpos

result = data.qpos.copy()

# plot results
print("Results")
data.qpos = qpos0
mujoco.mj_forward(model, data)
renderer.update_scene(data, camera)
target_plot = renderer.render()

data.qpos = result
mujoco.mj_forward(model, data)
result_point = data.body('wrist_3_link').xpos
renderer.update_scene(data, camera)
result_plot = renderer.render()

print("testing point =>", target)
print("Levenberg-Marquardt result =>", result_point, "\n")

images = {
    'Testing point': target_plot,
    'Levenberg-Marquardt result': result_plot,
}

media.show_images(images)
```

![lk-result-render](/images/lkresult.png "Gradient Descent result")

So that's all for now! You've seen how MuJoCo can be used to implement simple Inverse
Kinematics. Keep in mind that this approach may not always 
produce optimal values for your specific needs and not consider orientation. 
From here, you can start experimenting with different techniques to fine-tune your 
implementations by using the libraries that I use. 

You can check the full code [here](https://github.com/alefram/notebooks/blob/master/inverse_kinematics.ipynb)

I hope this has been helpful, and I'll see you soon!

## Reference

* [1] Gauss–Newton algorithm [wikipedia](https://en.wikipedia.org/wiki/Gauss%E2%80%93Newton_algorithm#:~:text=The%20Gauss%E2%80%93Newton%20algorithm%20is,of%20a%20non%2Dlinear%20function.)
* [2] Anton Larsson and Oskar Grönlund [Comparative Analysis of the Inverse Kinematics of a 6-DOF Manipulator](https://www.diva-portal.org/smash/get/diva2:1774792/FULLTEXT01.pdf)
* [3] Levenberg-Marquardt algorithm [wikipedia](https://en.wikipedia.org/wiki/Levenberg%E2%80%93Marquardt_algorithm)
* [4] MuJoCo Python Bindings docs [Docs](https://mujoco.readthedocs.io/en/stable/python.html)
* [5] mujoco_menagerie [UR5e](https://github.com/google-deepmind/mujoco_menagerie/blob/main/universal_robots_ur5e/README.md)
