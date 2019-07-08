# Birthday Chocolate

Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.

Consider the chocolate bar as an array of squares, **s = [2, 2, 1, 3, 2]**. She wants to find segments summing to Ron's birth day, **d = 4** with a length equalling his birth month, **m = 2**. In this case, there are two segments meeting her criteria: **[2, 2]** and **[1, 3]**.

## Function Description

Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.

birthday has the following parameter(s):

- s: an array of integers, the numbers on each of the squares of chocolate
- d: an integer, Ron's birth day
- m: an integer, Ron's birth month

## Input Format

The first line contains an integer **n**, the number of squares in the chocolate bar. <br/>
The second line contains **n** space-separated integers **s[i]**, the numbers on the chocolate squares where **0 <= i <= n**. <br/>
The third line contains two space-separated integers, **d** and **m**, Ron's birth day and his birth month.<br/>

## Constraints 

- 1 <= n <= 100
- 1 <= s[i] < 5, where(0 <= i < n)
- 1 <= d <= 31
- 1 <= m <= 12

## Output Format

Print an integer denoting the total number of ways that Lily can portion her chocolate bar to share with Ron.

## Sample Input 0

```
5
1 2 1 3 2
3 2
```

## Sample Output 0

```
2
```

## Explanation 0
   
Lily wants to give Ron **m = 2** squares summing to **d = 3**. The following two segments meet the criteria:<br/>

![](https://s3.amazonaws.com/hr-assets/0/1489060874-a04ddb06cf-choco4.png)

## Sample Input 1

```
6
1 1 1 1 1 1
3 2
```

## Sample Output 1

```
0
```

## Explanation 1
   
Lily only wants to give Ron  consecutive squares of chocolate whose integers sum to . There are no possible pieces satisfying these constraints:<br/>

![](https://s3.amazonaws.com/hr-assets/0/1489060978-e33d905668-choco5.png)

Thus, we print **0** as our answer.

## Sample Input 2

```
1
4
4 1
```

## Sample Output 2

```
1
```

## Explanation 2

Lily only wants to give Ron **m = 1** square of chocolate with an integer value of **d = 4**. Because the only square of chocolate in the bar satisfies this constraint, we print **1** as our answer.

---

## Solution

```javascript
// Complete the birthday function below.
function birthday(s, d, m) {
    const count = (start, end, values, value) =>
        (start < end) ? count(start + 1, end, values, value + values[start]) : value;

    return s.reduce((target, item, index) =>
        ((count(index, m + index, s || [], 0) === d) ? target + 1 : target), 0);
}
```
