# Picking Numbers

Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to **1**. For example, if your array is **a = [1,1,2,2,4,4,5,5,5]**, you can create two subarrays meeting the criterion: **[1,1,2,2]** and **[4,4,5,5,5]**. The maximum length subarray has **5** elements.

## Function Description

Complete the pickingNumbers function in the editor below. It should return an integer that represents the length of the longest array that can be created.

pickingNumbers has the following parameter(s):

- a: an array of integers

## Input Format

The first line contains a single integer **n**, the size of the array **a**.<br/> 
The second line contains **n** space-separated integers **a[i]**.

## Constraints 

- 2 <= n <= 100
- 0 <= a[i] <= 100
- The answer will be >= 2.

## Output Format

A single integer denoting the maximum number of integers you can choose from the array such that the absolute difference between any two of the chosen integers is **<= 1**.

## Sample Input 0

```
6
4 6 5 3 3 1
```

## Sample Output 0

```
3
```

## Explanation 0

We choose the following multiset of integers from the array: **{4,3,3}**. Each pair in the multiset has an absolute difference **<=1** (i.e., **|4 - 3| = 1** and **|3 - 3| = 0**), so we print the number of chosen integers, **3**, as our answer.

## Sample Input 1

```
6
1 2 2 3 1 2
```

## Sample Output 1

```
5
```

## Explanation 1

We choose the following multiset of integers from the array: **{1,2,2,1,2}**. Each pair in the multiset has an absolute difference **<= 1** (i.e., **|1 - 2| = 1**, **|1 - 1| = 0**, and **|2 - 2| = 0**), so we print the number of chosen integers, **5**, as our answer.

---

## Solution

```javascript
/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let max = 0;
    let values = new Array(100).fill(0);

    (a || []).forEach(value => {
        values[value]++;
    });

    return values.reduce((target, value, index) => {
        (
            (index >= 1) &&
            (value + values[index - 1] > target)
        ) && (target = value + values[index - 1]);

        return target;
    }, []);
}
```
