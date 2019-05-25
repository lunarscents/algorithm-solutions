# Day 4: Count Objects
## Objective

In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.


## Task

Complete the function in the editor. It has one parameter: an array, **a**, of objects. Each object in the array has two integer properties denoted by **x** and **y**. The function must return a count of all such objects **o** in array **a** that satisfy **o.x = o.y**.


## Constraints
- **5 <= n <= 10**
- **1 <= x,y <= 100**


## Output Format

Return a count of the total number of objects **o** such that **o.x = o.y**. Locked stub code in the editor prints the returned value to STDOUT.


## Sample Input 0
```
5
1 1
2 3
3 3
3 4
4 5
```

## Sample Output 0
```
2
```


## Explanation 0

There are **n = 5** objects in the **objects** array:

- Objects[0] = {x: 1, y: 1}
- Objects[1] = {x: 2, y: 3}
- Objects[2] = {x: 3, y: 3}
- Objects[3] = {x: 4, y: 4}
- Objects[4] = {x: 5, y: 5}

Because we have two objects **o** that satisfy **o.x = o.y** (i.e., **Objects[0]** and **Objects[2]**), we return **2** as our answer.


<br/>
<br/>

---

## Solution

```javascript

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.reduce((target, item) => {
        (item.x === item.y) && (target += 1);
        
        return target;
    }, 0);
}


```

---
  
