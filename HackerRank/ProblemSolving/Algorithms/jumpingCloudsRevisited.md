# Jumping on the Clouds: Revisited
  
Aerith is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. Her character must jump from cloud to cloud until it reaches the start again.

To play, Aerith is given an array of clouds, **c** and an energy level **e = 100**. She starts from **c[0]** and uses **1** unit of energy to make a jump of size **k** to cloud **c[(i + k) % n]**. If Aerith lands on a thundercloud, **c[i] = 1**, her energy (e) decreases by **2** additional units. The game ends when Aerith lands back on cloud **0**.

Given the values of **n**, **k**, and the configuration of the clouds as an array **c**, can you determine the final value of **e** after the game ends?

For example, give **c = [0, 0, 1, 0]** and **k = 2**, the indices of her path are **0 -> 2 -> 0**. Her energy level reduces by **1** for each jump to **98**. She landed on one thunderhead at an additional cost of **2** energy units. Her final energy level is **96**.

**Note**: Recall that **%** refers to the modulo operation. In this case, it serves to make the route circular. If Aerith is at **c[n -1]** and jumps **1**, she will arrive at **c[0]**.

## Function Description

Complete the jumpingOnClouds function in the editor below. It should return an integer representing the energy level remaining after the game.

jumpingOnClouds has the following parameter(s):

- c: an array of integers representing cloud types
- k: an integer representing the length of one jump

## Input Format

The first line contains two space-separated integers, **n** and **k**, the number of clouds and the jump distance. 
The second line contains **n** space-separated integers **c[i]** where ![](https://latex.codecogs.com/gif.latex?0\leq&space;i<&space;n). Each cloud is described as follows:

- If **c[i] = 0**, then cloud **i** is a cumulus cloud.
- If **c[i] = 1**, then cloud **i** is a thunderhead.

## Constraints

- ![](https://latex.codecogs.com/gif.latex?2\leq&space;n\leq&space;25)
- ![](https://latex.codecogs.com/gif.latex?1\leq&space;k\leq&space;n)
- n % k = 0
- ![](https://latex.codecogs.com/gif.latex?c[i]\in&space;\left&space;\{&space;0,&space;1&space;\right&space;\})

## Output Format

Print the final value of **e** on a new line.

## Sample Input
```
8 2
0 0 1 0 0 1 1 0
```

## Sample Output
```
92
```

## Explanation

In the diagram below, red clouds are thunderheads and purple clouds are cumulus clouds:

![](./images/jumping-clods.png)

Observe that our thunderheads are the clouds numbered **2**, **5**, and **6**. Aerith makes the following sequence of moves:

1. Move: **0 -> 2**, Energy: **e = 100 - 1 - 2 = 97**.
2. Move: **2 -> 4**, Energy: **e = 97 - 1 = 96**.
3. Move: **4 -> 6**, Energy: **e = 96 - 1 - 2 = 93**.
4. Move: **6 -> 0**, Energy: **e = 93 - 1 = 92**.

---

### Solution

```javascript
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let result = 100;
    let count = 0;
    let index;

    while (index !== 0 && result >= 0) {
        !count && (index = 0);

        index = (index + k) % c.length;

        result = result - (c[index] > 0 ? 3 : 1);
        
        count++;
    }

    return result;
}
```