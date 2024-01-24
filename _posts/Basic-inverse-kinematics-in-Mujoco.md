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
minimum of a non-lineaf function. 

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

## Reference


