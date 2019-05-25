# Day 1: Functions
## Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.


## Task

Implement a function named factorial that has one parameter: an integer, **n**. It must return the value of **n!** (i.e., **n** factorial).

## Input Format

Locked stub code in the editor reads a single integer, **n**, from stdin and passes it to a function named factorial.


## Constraints
- **1 <= n <= 10**


## Output Format

The function must return the value of  **n!**.


## Sample Input 0

```
4
```


##Sample Output 0

```
24
```


## Explanation

We return the value of **4! = 4 X 3 X 2 X 1 = 24**.

<br/>
<br/>

---

## Solutions
### Solution 1

```javascript

const factorial = (n) => (n - 1) > 0 ? n * factorial(n - 1) : 1;

```
### Solution 2

```javascript

let memoization = [0, 1];

const factorial = (n) => {
    (typeof memoization[n] !== 'number') && (
        memoization[n] = (n - 1) > 0 ? n * factorial(n - 1) : 1 
    );

    return memoization[n];
}

```

---