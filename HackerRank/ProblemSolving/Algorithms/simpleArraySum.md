# Simple Array Sum

Given an array of integers, find the sum of its elements.

For example, if the array **ar = [1, 2, 3]**, **1 + 2 + 3 = 6**, so return **6**.

## Function Description

Complete the `simpleArraySum` function. It must return the sum of the array elements as an integer.

`simpleArraySum` has the following parameter:

- `ar`: an array of integers

## Input Format

The first line contains an integer, **n**, denoting the size of the array.<br/>
The second line contains **n** space-separated integers representing the array's elements.

## Constraints

- `0 < n <= 1000`
- `0 < ar[i] <= 1000`

## Output Format

Print the sum of the array's elements as a single integer.

## Sample Input

```text
6
1 2 3 4 10 11
```

## Sample Output

```text
31
```

## Explanation

We print the sum of the array's elements: **1 + 2 + 3 + 4 + 10 + 11 = 31**.

## Approach

This is a linear accumulation problem. Start with `0`, visit every value in the array once, and add each value to the running total.

The important edge to keep in mind is that the function should return a number, not print inside the function. HackerRank handles printing outside the function wrapper.

## Complexity

- Time complexity: `O(n)`, because each array element is visited once.
- Space complexity: `O(1)`, because the solution only stores the running sum.

---

## Solution

```javascript
function simpleArraySum(ar) {
    return ar.reduce((total, value) => total + value, 0);
}
```

## Test Cases

```javascript
console.assert(simpleArraySum([1, 2, 3]) === 6);
console.assert(simpleArraySum([1, 2, 3, 4, 10, 11]) === 31);
console.assert(simpleArraySum([1000]) === 1000);
```

For a runnable Node.js example, see [`tests/simpleArraySum.test.js`](/tests/simpleArraySum.test.js).

---
