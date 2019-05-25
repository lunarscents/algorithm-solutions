# Day 1: Arithmetic Operators
## Objective

In this challenge, we practice using arithmetic operators. Check out the attached tutorial for resources.


## Task

Complete the following functions in the editor below:

1. getArea(length, width): Calculate and return the area of a rectangle having sides **length** and **width**.
2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides **length** and **width**.

The values returned by these functions are printed to stdout by locked stub code in the editor.


## Input Format
### getArea
| Data Type | Parameter | Description |
|:---:|:---:|:---:|
| Number | length | A number denoting the length of a rectangle. |
| Number | height | A number denoting the height of a rectangle. |

### getPerimeter(length, height)
| Data Type | Parameter | Description |
|:---:|:---:|:---:|
| Number | length | A number denoting the length of a rectangle. |
| Number | height | A number denoting the height of a rectangle. |


## Constraints
- **1 <= length,width <= 100**
- **length** and **height** are scaled to at most three decimal places.


## Output Format
| Function | Return Type | Description |
|:---:|:---:|:---:|
| getArea | Number | The area of a rectangle having sides **length** and **width**. |
| getPerimeter | Number | The perimeter of a rectangle having sides **length** and **width**. |


## Sample Input 0

```
3
4.5
```


##Sample Output 0

```
13.5
15
```


## Explanation

The area of the rectangle is **length X width = 3 X 4.5 = 13.5**.<br/>
The perimeter of the rectangle is **2 X (length + height) = 2 X (3 + 4.5) = 15**.


<br/>
<br/>

---

## Solution

```javascript

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;

    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    
    return perimeter;
}

```

---
