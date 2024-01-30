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
    J^{†} = (J^{T}J)^{-1}J^{T}
\end{align}
$$

Then the equation (1) turns to.

$$
\begin{align}
    x_{n+1} = x_{n} - H^{-1}\nabla f(x_{n}) = x_{n} - J^{†}r(x)
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
## implementation

Ok stop theory lets get into practice.



## Reference

* [1] Gauss–Newton algorithm [wikipedia](https://en.wikipedia.org/wiki/Gauss%E2%80%93Newton_algorithm#:~:text=The%20Gauss%E2%80%93Newton%20algorithm%20is,of%20a%20non%2Dlinear%20function.)
* [2] Anton Larsson and Oskar Grönlund [Comparative Analysis of the Inverse](https://www.diva-portal.org/smash/get/diva2:1774792/FULLTEXT01.pdf)
* [3] Levenberg-Marquardt algorithm [wikipedia](https://en.wikipedia.org/wiki/Levenberg%E2%80%93Marquardt_algorithm)

Kinematics of a 6-DOF Manipulator]