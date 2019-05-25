# Day 4: Create a Rectangle Object
## Objective

In this challenge, we practice creating objects. Check out the attached tutorial for more details.


## Task

Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

- **length** : This value is equal to **a**.
- **width** : This value is equal to **b**.
- **perimeter** : This value is equal to **2 X (a + b)**
- **area** : This value is equal to **a X b**

**Note**: The names of the object's properties must be spelled correctly to pass this challenge.


## Input Format

The first line contains an integer denoting **a**.<br/>
The second line contains an integer denoting **b**.


## Constraints
- **1 <= x,y <= 100**


## Output Format

Return a object that has the properties specified above. Locked code in the editor prints the returned object's **length**, **width**, **perimeter**, and **area** to STDOUT.

## Sample Input 0
```
4
5
```


## Sample Output 0
```
4
5
18
20
```


## Explanation 0

Given a **length** of **a = 3** and a **width** of **b = 5**, the Rectangle object's **perimeter** is **4 + 4 + 5 + 5 = 18** and its **area** is **4 X 5 = 20**.


<br/>
<br/>

---

## Solution

```javascript

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = (a + b) * 2;
    this.area = a * b;
}

```

---
