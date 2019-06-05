# Day 11: 2D Arrays
## Objective

Today, we're building on our knowledge of Arrays by adding another dimension. Check out the Tutorial tab for learning materials and an instructional video!

## Context 

Given a **6 X 6** 2D Array, **A**:

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

We define an hourglass in **A** to be a subset of values with indices falling in this pattern in **A**'s graphical representation:

```
a b c
  d
e f g
```

There are **16** hourglasses in **A**, and an hourglass sum is the sum of an hourglass' values.


## Task

Calculate the hourglass sum for every hourglass in **A**, then print the maximum hourglass sum.


## Input Format

There are **6** lines of input, where each line contains **6** space-separated integers describing 2D Array **A**; every value in **A** will be in the inclusive range of **-9** to **9**.


## Constraints
   
- **-9 <= A[i][j] <= 9**
- **0 <= i,j <= 5**


## Output Format

Print the largest (maximum) hourglass sum found in **A**.



## Sample Input

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```


## Sample Output

```
19
```


## Explanation

**A** contains the following hourglasses:

```
1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0
```

The hourglass with the maximum sum (**19**) is:

```
2 4 4
  2
1 2 4
```

<br/>
<br/>

---

## Solutions

### Solution 1

```javascript

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = arr.reduce((target, rows, index) => {
        rows.reduce((subTarget, item, subIndex) => {
            (
                index < arr.length - 2 && subIndex < arr.length - 2
            ) &&
                target.push(
                    arr[index][subIndex] + arr[index][subIndex + 1] + arr[index][subIndex + 2] + arr[index + 1][subIndex + 1] + arr[index + 2][subIndex] + arr[index + 2][subIndex + 1] + arr[index + 2][subIndex + 2]
                );
        }, []);

        return target;
    }, []);

    console.log(Math.max.apply(null, result));
}

```

### Solution 2

```javascript

function main() {
     let arr = Array(6);
     let maxSum;
 
     for (let i = 0; i < 6; i++) {
         arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
     }
 
     const findMaxSum = (n, m) => {
         let sum = 0;
         for (let i = 0; i < 3; i++) {
             for (let j = 0; j < 3; j++) {
                 sum += !(i === 1 && (j === 0 || j === 2)) && arr[n + i][m + j];
             }
         }
         return sum;
     }
 
     const search = () => {
         let sum;
         for (let i = 0; i < 4; i++) {
             for (let j = 0; j < 4; j++) {
                 sum = findMaxSum(i, j);
                 (i === 0 && j === 0) && (maxSum = sum);
                 maxSum < sum && (maxSum = sum);
             }
         }
     }
 
     search();
     console.log(maxSum);
 }
 
```

### Solution 2

```javascript

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const temp = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            temp.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
        }
    }
    
    let max = temp.reduce(function (previous, current) {
        return previous > current ? previous : current;
    });
    
    console.log(max);
}

```
