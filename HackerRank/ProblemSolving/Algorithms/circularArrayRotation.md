# Circular Array Rotation

John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the value of the element at a given index.

For example, array **a = [3,4,5]**, number of rotations, **k = 2** and indices to check, **m = [1,2]**. <br/>
First we perform the two rotations: <br/>

[3,4,5] -> [5,3,4] -> [4,5,3]
 
Now return the values from the zero-based indices  and  as indicated in the  array. 

a[1] = 5<br/>
a[2] = 3

## Function Description

Complete the circularArrayRotation function in the editor below. It should return an array of integers representing the values at the specified indices.

circularArrayRotation has the following parameter(s):

- a: an array of integers to rotate
- k: an integer, the rotation count
- queries: an array of integers, the indices to report

## Input Format

The first line contains **3** space-separated integers, **n**, **k**, and **q**, the number of elements in the integer array, the rotation count and the number of queries. <br/>
The second line contains **n** space-separated integers, where each integer **i** describes array element **a[i]** (where **0 <= i < n**). <br/>
Each of the **q** subsequent lines contains a single integer denoting **m**, the index of the element to return from **a**. <br/>

## Constraints 

- 1 <= n <= 10<sup>5</sup>
- 1 <= a[i] <= 10<sup>5</sup>
- 1 <= k <= 10<sup>5</sup>
- 1 <= q <= 500
- 0 <= m < n

## Output Format

For each query, print the value of the element at index **m** of the rotated array on a new line.

## Sample Input 0

```
3 2 3
1 2 3
0
1
2
```

## Sample Output 0

```
2
3
1
```

## Explanation 0

After the first rotation, the array becomes **[3,1,2]**. <br/>
After the second (and final) rotation, the array becomes **[2,3,1]**.

Let's refer to the array's final state as array **b = [2,3,1]**. For each query, we just have to print the value of **b<sub>m</sub>** on a new line:<br/>

1. m = 0, b<sub>0</sub> = 2.
2. m = 1, b<sub>1</sub> = 3.
3. m = 2, b<sub>2</sub> = 1.

---

## Solution

```javascript
// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    //Enter your code here
    return queries.map(value => a.reduce((target, item, index) => {
        let focus = (index + k) % a.length;
        target[focus] = item;

        return target;
    }, [])[value]);
}

```
