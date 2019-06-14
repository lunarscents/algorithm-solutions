# Day 19: Interfaces
## Objective

Today, we're learning about Interfaces. Check out the Tutorial tab for learning materials and an instructional video!


## Task

The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.

Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum(n) method must return the sum of all divisors of **n**.


## Input Format

A single line containing an integer, **n**.


## Constraints

- **1 <= n <= 1000**


## Output Format

You are not responsible for printing anything to stdout. The locked template code in the editor below will call your code and print the necessary output.


## Sample Input

```
6
```

## Sample Output

```
I implemented: AdvancedArithmetic
12
```


## Explanation

The integer **6** is evenly divisible by **1**, **2**, **3**, and **6**. Our divisorSum method should return the sum of these numbers, which is **1 + 2 + 3 + 6 = 12**. The Solution class then prints **I implemented: AdvancedArithmetic** on the first line, followed by the sum returned by divisorSum (which is **12**) on the second line.

<br/>

---

## Solution

```javascript
/** It's not supported JavaScript so it create similar code **/

class AdvancedArithmetic {
  divisor(n) {
    return n || 0;
  };
}

class Calculator extends AdvancedArithmetic {
  constructor(props) {
    super(props);

    this.divisor = this.divisorSum.bind(this);
  }

  divisorSum(n) {
    return Array(n).fill(0).reduce((target, item, index) => {
      !(n % (index + 1)) && (target += (index + 1)) ;

      return target;
    }, 0);
  }
}

function Solution () {
  const n = 6;

  const myCalculator = new Calculator();

  let sum = myCalculator.divisor(n);

  console.log("I implemented: AdvancedArithmetic\n" + sum); 
}

Solution();
```
