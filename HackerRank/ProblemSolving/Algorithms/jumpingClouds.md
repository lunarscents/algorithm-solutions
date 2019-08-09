# Jumping on the Clouds

Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus **1** or **2**. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered **0** if they are safe or **1** if they must be avoided. For example, **c = [0,1,0,0,0,1,0]** indexed from **0...6**. The number on each cloud is its index in the list so she must avoid the clouds at indexes **1** and **5**. She could follow the following two paths: **0 -> 2 -> 4 -> 6** or **0 -> 2 -> 3 -> 4 -> 6**. The first path takes **3** jumps while the second takes **4**.

## Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

- c: an array of binary integers

## Input Format

The first line contains an integer **n**, the total number of clouds. The second line contains **n** space-separated binary integers describing clouds **c[i]** where **0 <= i < n**.

## Constraints 

- 2 <=n <= 100
- ![](<a href="https://www.codecogs.com/eqnedit.php?latex=c[i]&space;\in&space;\begin{Bmatrix}&space;0,1&space;\end{Bmatrix}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?c[i]&space;\in&space;\begin{Bmatrix}&space;0,1&space;\end{Bmatrix}" title="c[i] \in \begin{Bmatrix} 0,1 \end{Bmatrix}" /></a>)
- c[0] = c[n - 1] = 0

## Output Format

Print the minimum number of jumps needed to win the game.

## Sample Input 0

```
7
0 0 1 0 0 1 0
```

## Sample Output 0

```
4
```

## Explanation 0

Emma must avoid **c[2]** and **c[5]**. She can win the game with a minimum of **4** jumps:<br/>

![](https://s3.amazonaws.com/hr-challenge-images/20832/1461134731-c258160d15-jump2.png)

<br/>

## Sample Input 1

```
6
0 0 0 0 1 0
```

## Sample Output 1

```
3
```

## Explanation 1

The only thundercloud to avoid is **c[4]**. Emma can win the game in **3** jumps:<br/>

![](https://s3.amazonaws.com/hr-challenge-images/20832/1461136358-764298d363-jump5.png)

---

## Solution

```javascript
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let count = 0;
    let index = 0;

    while (index < c.length - 1) {
        index =
            ((index + 2 < c.length) && c[index + 2] != 1)
                ? index + 2
                : index + 1;

        count += 1;
    }

    return count;
}
```
