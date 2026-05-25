# A Very Big Sum

Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

This problem is similar to `Simple Array Sum`, but it highlights an important implementation detail: in some languages, the result can exceed a 32-bit integer range.

## Function Description

Complete the `aVeryBigSum` function. It must return the sum of all array elements.

`aVeryBigSum` has the following parameter:

- `ar`: an array of integers

## Input Format

The first line contains an integer, **n**.<br/>
The next line contains **n** space-separated integers contained in the array.

## Output Format

Print the integer sum of the elements in the array.

## Constraints

- `1 <= n <= 10`
- `0 < ar[i] <= 10^10`

## Sample Input

```text
5
1000000001 1000000002 1000000003 1000000004 1000000005
```

## Sample Output

```text
5000000015
```

## Note

The range of a 32-bit integer is **[-2147483648, 2147483647]**. When several large integer values are added together, the resulting sum may exceed that range.

In JavaScript, `Number` can safely represent integers up to `Number.MAX_SAFE_INTEGER` (`9007199254740991`). The HackerRank constraints for this problem stay within that safe integer range, so a normal `Number` sum is enough here.

## Approach

Start with a total of `0`, then add each number in the array to the total. This is a direct accumulation problem.

Because the problem focuses on large values, the key learning point is choosing a numeric type that can hold the final sum in the language being used.

## Complexity

- Time complexity: `O(n)`, because each array element is visited once.
- Space complexity: `O(1)`, because the solution only stores the running sum.

---

## Solution

```javascript
function aVeryBigSum(ar) {
    return ar.reduce((total, value) => total + value, 0);
}
```

## Test Cases

```javascript
console.assert(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]) === 5000000015);
console.assert(aVeryBigSum([1, 2, 3]) === 6);
console.assert(aVeryBigSum([10000000000]) === 10000000000);
```

For a runnable Node.js example, see [`tests/aVeryBigSum.test.js`](/tests/aVeryBigSum.test.js).

---
