# Queen's Attack II

You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an **n x n** chessboard. The chess board's rows are numbered from **1** to **n**, going from bottom to top. Its columns are numbered from **1** to **n**, going from left to right. Each square is referenced by a tuple, **(r, c)**, describing the row, **r**, and column, **c**, where the square is located.

The queen is standing at position **(r<sub>q</sub>, c<sub>q</sub>)**. In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from **(4, 4)**:

![](https://s3.amazonaws.com/hr-challenge-images/0/1485426500-a4039ebb00-chess1.png)

There are obstacles on the chessboard, each preventing the queen from attacking any square beyond it on that path. For example, an obstacle at location **(3, 5)** in the diagram above prevents the queen from attacking cells **(3, 5)**, **(2, 6)**, and **(1, 7)**:

![](https://s3.amazonaws.com/hr-challenge-images/0/1485459132-3fdc1f1ca3-chess_4_.png)

Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at . In the board above, there are such squares.

## Function Description

Complete the queensAttack function in the editor below. It should return an integer that describes the number of squares the queen can attack.

queensAttack has the following parameters:

- n: an integer, the number of rows and columns in the board
- k: an integer, the number of obstacles on the board
- r_q: integer, the row number of the queen's position
- c_q: integer, the column number of the queen's position
- obstacles: a two dimensional array of integers where each element is an array of **2** integers, the row and column of an obstacle

## Input Format

The first line contains two space-separated integers **n** and **k**, the length of the board's sides and the number of obstacles.<br/>
The next line contains two space-separated integers **r<sub>q</sub>** and **c<sub>q</sub>**, the queen's row and column position.<br/>
Each of the next **k** lines contains two space-separated integers **r[i]** and **c[i]**, the row and column position of **obstacle[i]**. <br/>

## Constraints

- 1 <= n <= 10<sup>5</sup>
- 1 <= k <= 10<sup>5</sup>
- A single cell may contain more than one obstacle.
- There will never be an obstacle at the position where the queen is located.

## Subtasks

For **30%** of the maximum score:<br/>

- 0 < n <= 100
- 0 <= k <= 100

For **55%** of the maximum score:<br/>

- 0 < n <= 1000
- 0 <= k <= 10<sup>5</sup>

## Output Format

Print the number of squares that the queen can attack from position **(r<sub>q</sub>, c<sub>q</sub>)**

## Sample Input 0

```
4 0
4 4
```

## Sample Output 0

```
9
```

## Explanation 0

The queen is standing at position **(4, 4)** on a **4 x 4** chessboard with no obstacles:<br/>

![](https://s3.amazonaws.com/hr-challenge-images/0/1485426553-3064e08638-chess2.png)

## Sample Input 1

```
5 3
4 3
5 5
4 2
2 3
```

## Sample Output 1

```
10
```

## Explanation 1

The queen is standing at position **(4, 3)** on a **5 x 5** chessboard with **k = 3** obstacles:<br/>

![](https://s3.amazonaws.com/hr-challenge-images/0/1485426870-84a6a0ce97-chess3.png)

The number of squares she can attack from that position is **10**.

## Sample Input 2

```
1 0
1 1
```

## Sample Output 2

```
0
```

## Explanation 2

Since there is only one square, and the queen is on it, the queen can move 0 squares.

---

### Solution

```javascript
// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
  let up = n - r_q;
  let right = n - c_q;
  let down = r_q - 1;
  let left = c_q - 1;

  let up_left = Math.min(up, left);
  let up_right = n - Math.max(c_q, r_q);
  let down_left = Math.min(c_q, r_q) - 1;
  let down_right = Math.min(r_q - 1, n - c_q);

  for (let i of Array.from({ length: k }, (value, index) => index)) {
    let { 0: r_o, 1: c_o } = obstacles[i];

    r_o == r_q &&
      (c_o > c_q
        ? (up = Math.min(up, c_o - c_q - 1))
        : (down = Math.min(down, c_q - c_o - 1)));

    c_o == c_q &&
      (r_o > r_q
        ? (right = Math.min(right, r_o - r_q - 1))
        : (left = Math.min(left, r_q - r_o - 1)));

    Math.abs(c_o - c_q) == Math.abs(r_o - r_q) &&
      (c_o > c_q && r_o > r_q && (up_right = Math.min(up_right, c_o - c_q - 1)),
      c_o > c_q &&
        r_o < r_q &&
        (down_right = Math.min(down_right, c_o - c_q - 1)),
      c_o < c_q && r_o > r_q && (up_left = Math.min(up_left, c_q - c_o - 1)),
      c_o < c_q &&
        r_o < r_q &&
        (down_left = Math.min(down_left, c_q - c_o - 1)));
  }

  return right + left + up + down + down_left + up_left + down_right + up_right;
}
```
