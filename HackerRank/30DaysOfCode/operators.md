# Day 2: Operators
## Objective

In this challenge, you'll work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video!
## Task

Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

**Note**: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!


## Input Format

There are **3** lines of numeric input: 
The first line has a double, **mealCost** (the cost of the meal before tax and tip). 
The second line has an integer, **tipPercent** (the percentage of **mealCost** being added as tip). 
The third line has an integer, **taxPercent** (the percentage of **mealCost** being added as tax).


## Output Format

Print the total meal cost, where **totalCost** is the rounded integer result of the entire bill (**mealCost** with added tax and tip).


## Sample Input 0

```
12.00
20
8
```


##Sample Output 0

```
15
```


## Explanation

Given: 
**mealCost = 12, tipPercent = 20, taxPercent = 8**

Calculations: 
- tip = 12 x ![](https://latex.codecogs.com/svg.latex?\frac{20}{100}) = 2.4
- tax = 12 x ![](https://latex.codecogs.com/svg.latex?\frac{8}{100}) = 0.96
- totalCost = mealCost + tip + tax = 12 + 2.4 + 0.96 = 15.36
- round(totalCost) = 15

We round **totalCost** to the nearest dollar (integer) and then print our result, **15**.

<br/>
<br/>

---

## Solutions
### Solution 1

```javascript

function main() {
    var cost = +input_stdin_array[0];
    var tip = cost * input_stdin_array[1] / 100;
    var tax = cost * input_stdin_array[2] / 100;
    var total = cost + tip + tax;
    var round = Math.round(total);
    
    console.log('The total meal cost is ' + round + ' dollars.');
}

```

### Solution 2

```javascript

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    let totalCost = meal_cost * (1 + (tip_percent / 100) + (tax_percent / 100));
    
    console.log(Math.round(totalCost));
}

```

---
