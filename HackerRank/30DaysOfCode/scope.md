# Day 14: Scope
## Objective

Today we're discussing scope. Check out the Tutorial tab for learning materials and an instructional video!

The absolute difference between two integers, **a** and **b**, is written as **|a - b|**. The maximum absolute difference between two integers in a set of positive integers, **elements**, is the largest absolute difference between any two integers in **elements**.

The Difference class is started for you in the editor. It has a private integer array (**elements**) for storing **N** non-negative integers, and a public integer (**maximumDifference**) for storing the maximum absolute difference.


## Task

Complete the Difference class by writing the following:

- A class constructor that takes an array of integers as a parameter and saves it to the **elements** instance variable.
- A computeDifference method that finds the maximum absolute difference between any **2** numbers in **N** and stores it in the **maximumDifference** instance variable.


## Input Format

You are not responsible for reading any input from stdin. The locked Solution class in your editor reads in **2** lines of input; the first line contains **N**, and the second line describes the **elements** array.


## Constraints
   
- **1 <= N <= 10**
- **1 <= elements[i] <= 100, where 0 <= i <= N - 1**

## Output Format

You are not responsible for printing any output; the Solution class will print the value of the **maximumDifference** instance variable.


## Sample Input

```
3
1 2 5
```


## Sample Output

```
4
```

## Explanation
   
The scope of the **elements** array and **maximumDifference** integer is the entire class instance. The class constructor saves the argument passed to the constructor as the **elements** instance variable (where the computeDifference method can access it).

To find the maximum difference, computeDifference checks each element in the array and finds the maximum difference between any **2** elements: **|1 - 2| = 1**

**|1 - 5| = 4**
**|2 - 5| = 3**

The maximum of these differences is **4**, so it saves the value **4** as the **maximumDifference** instance variable. The locked stub code in the editor then prints the value stored as **maximumDifference**, which is **4**.


<br/>
<br/>

---

## Solutions

### Solution 1

```javascript

let input = "3\n1 2 5";
const difference = () => {
  const result = input.split('\n')[1].split(' ').reduce(
    (target, el) => {
      let { min, max } = target;

      target["min"] = el > min ? el : min;
      target["max"] = el < max ? el : max;

      return target;
    },
    { min: -999, max: 999 }
  );

  console.log(Math.abs(result["max"] - result["min"]));
};

difference();

```

### Solution 2

```javascript

let input = "3\n1 2 5";

function difference(input) {
  const split = input.split("\n");
  const length = +split[0];
  const array = split[1].split(" ");
  console.log(array, length);
  let maximum = 0;
  let result = 0;
  
  array.forEach(value1 => {
    array.forEach(value2 =>{
      result = Math.abs(value1-value2);
      if(result > maximum) {
        maximum = result;
      }
    })
  });
  console.log(maximum);
}

console.log(input);

difference(input);

```
