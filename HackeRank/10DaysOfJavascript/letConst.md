# Day 1: Let and Const
## Objective

In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.


## Task

1. Declare a constant variable, **PI**, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2. Read a number, **r**, denoting the radius of a circle from stdin.
3. Use **PI** and **r** to calculate the **area** and **perimeter** of a circle having radius .
4. Print **area** as the first line of output and print **perimeter** as the second line of output.


## Input Format

A single integer, **r**, denoting the radius of a circle.


## Constraints
- **0 <= n <= 100**
- **r is a floating-point number scaled to at most 3 decimal places.**


## Output Format

Print the following two lines:

1. On the first line, print the **area** of the circle having radius **r**.
2. On the second line, print the **perimeter** of the circle having radius **r**.


## Sample Input 0

```
2.6
```


##Sample Output 0

```
21.237166338267002
16.336281798666924
```


## Explanation

Given the radius **r = 2.6**, we calculate the following:
- **area = \(pi*r^2\)**
- **perimeter = \({2}*pi*r^2\)**
 
We then print **area** as our first line of output and **perimeter** as our second line of output.

<br/>
<br/>

---

## Solution

```javascript

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = parseFloat(readLine());
    const PI = Math.PI;
    
    // Print the area of the circle:
    console.log(PI * r * r);

    // Print the perimeter of the circle:
    console.log(PI * 2 * r);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

```

---
