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

<!-- TODO: agregar una imagen explicativa de IK -->

![ik-diagram](/images/ik-diagram.svg)

Giving that there's two ways to solve inverse kinematics, the analytical 
approach and the numerical approach. The analytical approach, consist in use the
mathematical model...


In this article I will focus on the numerical approach.

## Inverse Kinematics algorithms

Searching for the most commun ways 


### Gauss-Newton 

### Gradient Descent

### otro que no me acuerdo

## Reference


