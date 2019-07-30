# Sequence Equation

Given a sequence of **n** integers, **p(1),p(2),...,p(n)** where each element is distinct and satisfies **1 <= p(x) <= n**. For each **x** where **1 <= x <= n**, find any integer **y** such that **p(p(y)) = x** and print the value of **y** on a new line.

For example, assume the sequence **p = [5, 2, 1, 3, 4]**. Each value of **x** between **1** and **5**, the length of the sequence, is analyzed as follows:<br/>

1. ![](https://latex.codecogs.com/gif.latex?x&space;=&space;1&space;\equiv&space;p[3],p[4]&space;=&space;3), so **p[p[4]] = 1**
2. ![](https://latex.codecogs.com/gif.latex?x&space;=&space;2&space;\equiv&space;p[2],p[2]&space;=&space;2), so **p[p[2]] = 2**
3. ![](https://latex.codecogs.com/gif.latex?x&space;=&space;3&space;\equiv&space;p[4],p[5]&space;=&space;4), so **p[p[5]] = 3**
4. ![](https://latex.codecogs.com/gif.latex?x&space;=&space;4&space;\equiv&space;p[5],p[1]&space;=&space;5), so **p[p[1]] = 4**
5. ![](https://latex.codecogs.com/gif.latex?x&space;=&space;5&space;\equiv&space;p[1],p[3]&space;=&space;1), so **p[p[3]] = 5**

The values for **y** are **[4,2,5,1,3]**.

## Function Description

Complete the permutationEquation function in the editor below. It should return an array of integers that represent the values of **y**.

permutationEquation has the following parameter(s):

- p: an array of integers

## Input Format

The first line contains an integer **n**, the number of elements in the sequence. 
The second line contains **n** space-separated integers **p[i]** where **a <= i <= n**.

## Constraints 

- 1 <= n <= 50 
- 1 <= p[i] <= 50, where 1 <= i <= n.
- Each element in the sequence is distinct.

## Output Format

For each **x** from **1** to **n**, print an integer denoting any valid **y** satisfying the equation ![](https://latex.codecogs.com/gif.latex?p(p(y))&space;\equiv&space;x) on a new line.

## Sample Input 0

```
3
2 3 1
```

## Sample Output 0

```
2
3
1
```

## Explanation 0

Given the values of **p(1) = 2**, **p(2) = 3**, and **p(3) = 1**, we calculate and print the following values for each **x** from **1** to **n**:

1. ![](https://latex.codecogs.com/gif.latex?x&space;=&space;1&space;\equiv&space;p(3)&space;=&space;p(p(2))&space;=&space;p(p(y))), so we print the value of **y = 2** on a new line.
2. ![](https://latex.codecogs.com/gif.latex?x&space;=&space;2&space;\equiv&space;p(1)&space;=&space;p(p(3))&space;=&space;p(p(y))), so we print the value of **y = 3** on a new line.
3. ![](https://latex.codecogs.com/gif.latex?x&space;=&space;3&space;\equiv&space;p(2)&space;=&space;p(p(1))&space;=&space;p(p(y))), so we print the value of **y = 1** on a new line.

## Sample Input 1

```
5
4 3 5 1 2
```

## Sample Output 1

```
1
3
5
4
2
```

---

## Solution

```javascript
// Complete the permutationEquation function below.
function permutationEquation(p) {
    let values = (p || []).reduce((target, value, index) => {
        target[value] = index + 1;

        return target;
    }, []);

    return (p || []).reduce((target, value, index) => {
        target.push(values[values[index + 1]])

        return target;
    }, []);
}
```
