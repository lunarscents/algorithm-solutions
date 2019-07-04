# Kangaroo

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

- The first kangaroo starts at location **x1** and moves at a rate of **v1** meters per jump.
- The second kangaroo starts at location **x2** and moves at a rate of **v2** meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

For example, kangaroo **1** starts at **x1 = 2** with a jump distance **v1 = 1** and kangaroo **2** starts at **x2 = 1** with a jump distance of **v2 = 2**. After one jump, they are both at **x = 3**, (**x1 + v1 = 2 + 1**, **x2 + v2 = 1 + 2**), so our answer is YES.

## Function Description

Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

- x1, v1: integers, starting position and jump distance for kangaroo 1
- x2, v2: integers, starting position and jump distance for kangaroo 2


## Input Format

A single line of four space-separated integers denoting the respective values of **x1**, **v1**, **x2**, and **v2**.

## Constraints 

- 0 <= x1 <= x2 <= 10000
- 0 <= v1 <= 10000
- 0 <= v2 <= 10000

## Output Format

Print YES if they can land on the same location at the same time; otherwise, print NO.

**Note:** The two kangaroos must land at the same location after making the same number of jumps.

## Sample Input 0

```
0 3 4 2
```

## Sample Output 0

```
YES
```

## Explanation 0

The two kangaroos jump through the following sequence of locations:

![](https://s3.amazonaws.com/hr-assets/0/1516005283-e74e76ff0c-kangaroo.png)

From the image, it is clear that the kangaroos meet at the same location (number **12** on the number line) after same number of jumps (**4** jumps), and we print YES.

## Sample Input 1

```
0 2 5 3
```

## Sample Output 1

```
NO
```

## Explanation 1
   
The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., **x<sub>2</sub> > x<sub>1</sub>**). Because the second kangaroo moves at a faster rate (meaning **v<sub>2</sub> > v<sub>1</sub>**) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.


---

## Solution

```javascript
// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    return (v2 >= v1) ? 'NO' : (!((x1 - x2) % (v2 - v1)) ? 'YES' : 'NO');
}

```
