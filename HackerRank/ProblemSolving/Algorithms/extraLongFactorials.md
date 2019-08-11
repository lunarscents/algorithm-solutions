# Extra Long Factorials
  
The factorial of the integer **n**, written **n!**, is defined as:<br/>

**n! = n x (n - 1) x (n - 2) x ... x 3 x 2 x 1**<br/>

Calculate and print the factorial of a given integer.

For example, if **n = 3**, we calculate **30 x 29 x 28 x ... x 3 x 2 x 1** and get **265252859812191058636308480000000**.

## Function Description

Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

- n: an integer

Note: Factorials of **n > 20** can't be stored even in a **64-bit** long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

We recommend solving this challenge using BigIntegers.

## Input Format

Input consists of a single integer **n**

## Constraints

- 1 <= n <= 100

## Output Format

Print the factorial of **n**.

## Sample Input

```
25
```

## Sample Output

```
15511210043330985984000000
```

## Explanation

25! = 25 x 24 x 23 x ... x 3 x 2 x 1<br/>

---

### Solution

```javascript
// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let memoization = [BigInt(0), BigInt(1)];

    const factorial = num => (typeof memoization[num] !== 'number')
        ? ((num - BigInt(1)) > 0
            ? (num * factorial(num - BigInt(1)))
            : BigInt(1)
        )
        : memoization[num]

    console.log(String(factorial(BigInt(n))));
}
```