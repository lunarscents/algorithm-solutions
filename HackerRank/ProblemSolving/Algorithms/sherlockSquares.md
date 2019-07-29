# Sherlock and Squares

Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints.

Note: A square integer is an integer which is the square of an integer, e.g. **1,4,9,16.25**.

For example, the range is **a = 24** and **b = 49**, inclusive. There are three square integers in the range: **25, 36** and **49**.

## Function Description

Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from **a** to **b**.

squares has the following parameter(s):

- a: an integer, the lower range boundary
- b: an integer, the uppere range boundary


## Input Format

The first line contains **q**, the number of test cases. <br/>
Each of the next **q** lines contains two space-separated integers denoting **a** and **b**, the starting and ending integers in the ranges.


## Constraints 

1 <= q <= 100 <br/>
1 <= a <= b <= 10<sup>9</sup>

## Output Format

For each test case, print the number of square integers in the range on a new line.

## Sample Input 

```
2
3 9
17 24
```

## Sample Output 

```
2
0
```

## Explanation 

Test Case #00: In range **[3, 9]**, **4** and **9** are the two square integers. <br/>
Test Case #01: In range **[17, 24]**, there are no square integers.

---

## Solution

```javascript
// Complete the squares function below.
function squares(a, b) {
    let lower = Math.ceil(Math.sqrt(a));
    let upper = Math.floor(Math.sqrt(b));

    return lower > upper ? 0 : upper - lower + 1;
}
```
