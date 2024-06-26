---
title: 'How to use Python for PID controller design'
date: '2023-05-30'
description: 'When I was in the university, my control system classes was dictated using MATLAB, MATLAB is a powerfull tool to design and test control systems.'
keywords: 'Machine Learning, Robotics, Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, Alexis Fraudita, Python, Pytorch'
---

When I was in the university, my control system classes was dictated using MATLAB,
MATLAB is a powerfull tool to design and test control systems. But, one of the
things that overwhelms me about Matlab, is that it is a very heavy program with 
different types of packages for different uses and a large number of tools and 
I like a simple minimalist coding style stuff for create or design controllers. 

As I am familiar with Python, I became curious to utilize this language to design 
a basic control system such as a PID controller, applying the theory I learned 
in university.

So here is what I learned.

## What is a PID controller

A PID controller is a "**brain**" for machines that helps them stay on track. It 
takes in sensory input, compares it to a target, and adjusts as needed to 
achieve the desired outcome.

A basic diagram of a PID controller looks like this:

![pid](/images/pid.drawio.svg)

e(t) is known as the error signal, which is the difference between a desired 
process value or setpoint r(t) and a measured process variable y(t) from the 
system that we want to control called "plant". u(t) is the output of the PID 
controller known as the control signal that will attempts to minimize the error 
e(t) over time. 

The PID controller is made up of three distinct parts: **the proportional component**,
**the integral component**, and **the derivative component**.

**The proportional part** helps to maintain the desired output of the control 
system by working to reduce the difference between the desired output and the 
actual output of the system. For example, the cruise control that keeps you at 
the right speed when you're driving on a flat road. If you start going too slow, 
the proportional part tells the car to go a little faster so you get back to the 
right speed. If you start going too fast, it tells the car to go slower.

**The integral part**, keeps track of how much the system has been off from the 
desired output in the past and makes adjustments to help reduce that difference 
over time. It's like a person who remembers that they were too hot or too cold 
in a room yesterday and adjusts the thermostat today to make sure they're more 
comfortable.

**The derivative part** of a PID controller is like a watchdog that watches how 
things are changing over time. It looks for how fast things are changing and 
makes adjustments based on that. Imagine you're going downhill in your car and 
you start going faster, the derivative part of a cruise control system would 
sense this change in speed and make adjustments to slow you down.

Mathematically, in time domain the PID controller looks like this:

$$
\begin{align}
    u(t) = K_p e(t) + K_i \int_{0}^{t} e(\tau) d\tau + K_d \frac{d}{dt} e(t)
\end{align}
$$

Where:

* $K_p$: represents how much the output of the controller 
changes in response to a difference between the desired output and the actual 
output of the system.

* $K_i$: represents how much the output of the controller 
changes in response to the accumulated difference between the desired and actual
outputs of the system over time.

* $K_d$: represents how much the output of the controller 
changes in response to the rate of change of the difference between the desired 
and actual outputs of the system.

* $e(t)$: represents the error signal.

* $u(t)$: represents control signal.


## Desiging the PID controller

We will be using example 8-1 (found on page 572) from the book 
['Modern Control Engineering'](https://www.amazon.com/Modern-Control-Engineering-Katsuhiko-Ogata/dp/0136156738)
by Katushiko Ogata to create our PID controller. 
Additionally, we will utilize the python-control library, as well as sympy and 
numpy for mathematical operations, and Matplotlib for visualizing the 
controller's responses.

### Creating the Plant model

We need a system plant to control before creating our PID controller. To do 
this, we can utilize the python-control package.


$$
\begin{align}
    \frac{1}{s(s+1)(s+5)}
\end{align}
$$


You might be curious as to why 's' is used instead of time in the Laplace domain.
The reason is that the Laplace domain enables analysis of transfer functions in 
a simpler and more efficient manner for linear time-invariant systems (LTI)

So we create our model transfer function system like this.

```python
import control

s = control.TransferFunction.s

plant = 1/(s*(s+1)*(s+5))
```

### Creating the PID model

Let's create our PID in Laplace domain.

$$
\begin{align}
    G_{c}(s) = K_{p}(1 + \frac{1}{T_{i}s} + T_{d}s)
\end{align}
$$

Where:

* $K_{p}$: represents how much the output of the controller 
changes in response to a difference between the desired output and the actual 
output of the system.

* $T_{i}$: represents  the integral time.

* $T_{d}$: represents the derivative time.

Our goal now is to adjust the values of $K_{p}$, $T_{i}$,
and $T_{d}$ for optimal performance. We will utilize the 
Ziegler-Nichols tuning rule to determine these values.

Since our plant contains an integrator ($\frac{1}{s}$), we 
will utilize the second method of the Ziegler-Nichols tuning rule. This involves 
setting $Ti = \infty$ cancelling it's effect and $Td = 0$ in 
order to obtain the closed-loop transfer function.

Having obtained the transfer function of our plant using python-control, 
we can employ the feedback method to determine the closed-loop transfer function. 
To calculate this, we will add an arbitrary value to $K_{p}$, 
set $T_{d}$ to 0, and assign a large value to $T_{i}$.

```python
import control

s = control.TransferFunction.s

plant = 1/(s*(s+1)*(s+5))

Kp = 17
Ti = 10000000000
Td = 0
pid = Kp*(1 + 1/Ti*s + Td*s)

feedback = control.feedback(plant*pid) 
print(feedback)

#result
#    1.7e-08 s + 17
#----------------------
#s^3 + 6 s^2 + 5 s + 17
```

If you look at the numerator, you will notice it has a term of 
$1.7e-08s + 17$. The value 17 corresponds to our parameter
$K_{p}$, while the value $1.7e-08s$ is 
practically negligible. As a result, we can consider our closed-loop transfer 
function to be:

$$
\begin{align}
    \frac{Y(s)}{R(s)} = \frac{K_{p}}{s^{3} + 6s^{2} + 5s + K_{p}}
\end{align}
$$

Where $s^{3} + 6s^{2} + 5s + K_{p} = 0$ will be our charateristic 
equation.

Our next step involves determining a value for $K_{p}$ that 
will render the plant marginally stable, thereby promoting sustained oscillation.
This can be achieved using **Routh's stability criterion**. In Python, we can 
leverage the method outlined in the [tbcontrol library](https://github.com/alchemyst/Dynamics-and-Control/blob/master/tbcontrol/symbolic.py)
to accomplish this.

```python
def routh(p):
    coefficients = p.all_coeffs()
    N = len(coefficients)
    M = sympy.zeros(N, (N+1)//2 + 1)

    r1 = coefficients[0::2]
    r2 = coefficients[1::2]
    M[0, :len(r1)] = [r1]
    M[1, :len(r2)] = [r2]
    for i in range(2, N):
        for j in range(N//2):
            S = M[[i-2, i-1], [0, j+1]]
            M[i, j] = sympy.simplify(-S.det()/M[i-1,0])
    return M[:, :-1]
```

Then we can implement it like this:

```python
import sympy

Kp = sympy.Symbol('Kp')
s = sympy.Symbol('s')

ce = s**3 + 6*s**2 + 5*s + Kp #charateristic equation

A = routh(sympy.Poly(ce,s))
A
```

It will give us.

$$
\begin{bmatrix}
    1 & 5\\
    6 & K_{p}\\
    5-\frac{K_{p}}{6} & 0\\
    K_{p} & 0
\end{bmatrix}
$$

To check the stability limits we can use sympy like this.

```python
sympy.solve([e > 0 for e in A[:,0]], Kp)
```
Resulting

$$
\begin{align}
    0< K_{p} \wedge K_{p}<30
\end{align}
$$

We have determined that the critical $K_{p}$ value is 30, which
represents the threshold for **sustaining oscillation**. Accordingly, the 
critical gain can be expressed as $K_{cr} = 30$. With this 
value in place, the characteristic equation takes on the following form:

$$
\begin{align}
    s^{3} + 6s^{2} + 5s + 30 = 0
\end{align}
$$

To find the frequency of the sustained oscillation, we replace $s=jw$
getting.

$$
\begin{align}
    (j\omega)^{3} + 6(j\omega)^{2} + 5(j\omega) + 30 = 0
\end{align}
$$

or 

$$
\begin{align}
    6(5-\omega^{2}) + j\omega(5-\omega^{2}) = 0
\end{align}
$$

where the frequency of the sustained oscillation will be $\omega^{2} = 5 => \omega = \sqrt{5}$

We can also solve this directly using sympy like this.

```python
s = sympy.Symbol('s')
ce = s**3 + 6*s**2 + 5*s + 30

roots = sympy.solve(ce,s)
roots
```

$$
\begin{align}
    [-6, -\sqrt{5}i, \sqrt{5}i]
\end{align}
$$


Finally, using the [Ziegler–Nichols Rule](https://en.wikipedia.org/wiki/Ziegler%E2%80%93Nichols_method),
we determine the values of $K_{p}, T_{i}, T_{d}$

$$
\begin{gather*} 
    K_{p} = 0.6K_{cr} \\ 
    T_{i} = 0.5P_{cr} \\
    T_{d} = 0.125P_{cr}
\end{gather*}
$$

Where $P_{cr} = \frac{2\pi}{\omega}$

```python
import numpy as np

w = np.sqrt(5)
Pcr = (2*np.pi)/w
Kcr = 30

Kp = 0.6*Kcr
Ti = 0.5*Pcr
Td = 0.125*Pcr

print("Kp:", Kp)
print("Ti:", Ti)
print("Td:", Td)

#result
#Kp: 18.0
#Ti: 1.40496...
#Td: 0.3512...
```

## Testing the PID
Now that we've tuned our PID controller, the next step is to evaluate the 
**system's behavior**. One way to accomplish this is by plotting the step response 
using the python-control library. This can be achieved as follows:

```python
s = control.TransferFunction.s

plant = (1/(s*(s+1)*(s+5)))

Kp = 18
Ti = 1.405
Td = 0.351
pid = (Kp*(1 + 1/(Ti*s) + Td*s))

feedback = control.feedback(system*pid)
print(feedback)

#result
#           8.877 s^2 + 25.29 s + 18
#----------------------------------------------
#1.405 s^4 + 8.43 s^3 + 15.9 s^2 + 25.29 s + 18

t = np.linspace(0,17)
T, y = control.step_response(feedback, t)

# plot
plt.plot(T, y)
plt.xlabel('Time (seconds)')
plt.ylabel('Output')
plt.title('Step Response')
plt.grid()
plt.show()
```

![pidplot](/images/pidplot.png)


You can also get specific information using the **step_info** method of python-control
like the overshoot or RiseTime. etc.

```python
info = control.step_info(feedback)
print("feedback info")
print("-------------")
print("RiseTime:",info["RiseTime"])
print("Overshoot:", info["Overshoot"])

#result
#feedback info
#-------------
#RiseTime: 0.5058786385507097
#Overshoot: 93.70305071110504
```

So that's all for now! You've seen how Python can be used to design a simple PID
controller, using the Ziegler-Nichols method as one of many techniques to
determine the PID parameters. Keep in mind that this approach may not always 
produce optimal values for your specific needs. From here, you can start 
experimenting with different techniques to fine-tune your controller using 
the libraries that we use. 

You can check the full code [here](https://github.com/alefram/blog-notebooks/blob/master/pid.ipynb)

I hope this has been helpful, and I'll see you soon!


## References

* [1] Katushiko Ogata.["Modern Control Engineering fifth Edition"](https://www.amazon.com/Modern-Control-Engineering-Katsuhiko-Ogata/dp/0136156738).
Prentice Hall.

* [2] Carl Sandrock. ["Dynamics and Control with jupyter notebooks"](https://dynamics-and-control.readthedocs.io/en/latest/2_Control/2_Laplace_domain_analysis_of_control_systems/SymPy%20Routh%20Array.html).

* [3] Carl Sandrock. ["tbcontrol library"](https://github.com/alchemyst/Dynamics-and-Control/blob/master/tbcontrol/symbolic.py).

* [4] Python-control.org. ["Python Control System Library"](https://python-control.readthedocs.io/en/0.9.3.post2/).

* [5] Sympy Developer Team. [Sympy Documentation](https://docs.sympy.org/latest/index.html).

* [6] PID Controller [wikipedia](https://en.wikipedia.org/wiki/PID_controller).
