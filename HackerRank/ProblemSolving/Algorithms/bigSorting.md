# Big Sorting

Consider an array of numeric strings where each string is a positive number with anywhere from **1** to **10<sup>6</sup>** digits. Sort the array's elements in non-decreasing, or ascending order of their integer values and print each element of the sorted array on a new line.

## Function Description

Complete the bigSorting function in the editor below. It should return the sorted string array.

bigSorting has the following parameter(s):

- unsorted: an unsorted array of integers as strings

## Input Format

The first line contains an integer, **n**, denoting the number of strings in **unsorted**. 
Each of the **n** subsequent lines contains an integer string **unsorted[i]**.

## Constraints 

- 1 <= n <= 2 X 10<sup>5</sup>
- Each string is guaranteed to represent a positive integer without leading zeros.
- The total number of digits across all strings in **unsorted** is between **1** and **10<sup>6</sup>** (inclusive).

## Output Format

Print each element of the sorted array on a new line.

## Sample Input 0

```
6
31415926535897932384626433832795
1
3
10
3
5
```

## Sample Output 0

```
1
3
3
5
10
31415926535897932384626433832795
```

## Explanation 0

The initial array of strings is **unsorted = [31415926535897932384626433832795,1,3,10,3,5]**.<br/>
When we order each string by the real-world integer value it represents, we get:

![](https://latex.codecogs.com/gif.latex?1&space;\leq&space;3&space;\leq&space;3&space;\leq&space;5&space;\leq&space;10&space;\leq&space;31415926535897932384626433832795)

We then print each value on a new line, from smallest to largest.

## Sample Input 1

```
8
1
2
100
12303479849857341718340192371
3084193741082937
3084193741082938
111
200
```

## Sample Output 1

```
1
2
100
111
200
3084193741082937
3084193741082938
12303479849857341718340192371
```

---

## Solution

```javascript
// Complete the bigSorting function below.
function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        if (a.length == b.length) {
            return a > b ? 1 : -1;
        }

        return a.length - b.length;
    });
}
```
