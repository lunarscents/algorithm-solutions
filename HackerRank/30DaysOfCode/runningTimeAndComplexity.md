# Day 25: Running Time and Complexity
## Objective

Today we're learning about running time! Check out the Tutorial tab for learning materials and an instructional video!


## Task

A prime is a natural number greater than **1** that has no positive divisors other than **1** and itself. Given a number, **n**, determine and print whether it's **Prime** or **Not Prime**.

**Note:** If possible, try to come up with a **$$$O\sqrt{n}$$$** primality algorithm, or see what sort of optimizations you come up with for an **O\sqrt()n** algorithm. Be sure to check out the Editorial after submitting your code!


## Input Format

The first line contains an integer, **T**, the number of test cases. 
Each of the **T** subsequent lines contains an integer, **n**, to be tested for primality.


## Constraints

- 1 <= T <= 30
- 1 <= n <= 2 X 10<sup>9</sup>


## Output Format

For each test case, print whether **n** is **Prime** or **Not prime** on a new line.


## Sample Input

```
3
12
5
7
```

## Sample Output

```
Not prime
Prime
Prime
```


## Explanation

Test Case 0: **n = 12**. <br/>
**12** is divisible by numbers other than **1** and itself (i.e.: **2**, **3**, **6**), so we print **Not prime** on a new line.

Test Case 1: **n = 5**. <br/>
**5** is only divisible **1** and itself, so we print **Prime** on a new line.

Test Case 2: **n = 7**. <br/>
**7** is only divisible **1** and itself, so we print **Prime** on a new line.

<br/>
<br/>

---

## Solutions

### Solution 1

```javascript
/** Consider to write code by using the Sieve of Eratosthenes, then you can make a optimization code **/

function processData(input) {
    //Enter your code here
    let result = input.split('\n').slice(1).map(isPrime);

    function isPrime(input, i) {
        let messages = ['Not prime', 'Prime'];

        if (input == 1) { 
            return messages[0];
        }
        if (input == 2) {
            return messages[1];
        }
        if (input % 2 == 0) {
            return messages[0];
        } 
        
        for (i = 3; i <= Math.sqrt(input); i += 2) {
            if (input % i == 0) { 
                return messages[0];
            }
        } 
        return messages[1];
    }

    console.log(result.join("\n"));
} 
```

### Solution 2

```javascript
function processData(input) {
    //Enter your code here
    input.split('\n').slice(1).map((n, i) => {
        console.log(isPrime(n) ? 'Prime' : 'Not prime');
    });

    function isPrime(n) {
        if (n == 1) return false;

        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }

        return true;
    }
} 
```