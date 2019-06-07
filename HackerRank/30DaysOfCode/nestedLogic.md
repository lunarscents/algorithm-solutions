# Day 26: Nested Logic
## Objective

Today's challenge puts your understanding of nested conditional statements to the test. You already have the knowledge to complete this challenge, but check out the Tutorial tab for a video on testing!


## Task

Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: **fine = 0**).
2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, **fine = 15 Hackos x (the number of days late)**.
3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the **fine = 500 Hackos x (the number of months late)**.
4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of **10000 Hackos**.


## Input Format

The first line contains **3** space-separated integers denoting the respective **day**, **month**, and **year** on which the book was actually returned. 
The second line contains **3** space-separated integers denoting the respective **day**, **month**, and **year** on which the book was expected to be returned (due date).


## Constraints

- 1 <= D <= 31
- 1 <= M <= 12
- 1 <= Y <= 3000
- It is guanranteed that the dates will be valid Gregorian calendar dates.


## Output Format

Print a single integer denoting the library fine for the book received as input.


## Sample Input

```
9 6 2015
6 6 2015
```

## Sample Output

```
45
```


## Explanation

Given the following return dates: <br/>
Actual:  **D<sub>a</sub> = 9, M<sub>a</sub> = 6, Y<sub>a</sub> = 2015**<br/>
Expected: **D<sub>e</sub> = 6, M<sub>e</sub> = 6, Y<sub>e</sub> = 2015**

Because **Y<sub>e</sub> = Y<sub>a</sub>**, we know it is less than a year late. <br/>
Because **M<sub>e</sub> = M<sub>a</sub>**, we know it's less than a month late. <br/>
Because **D<sub>e</sub> = D<sub>a</sub>**, we know that it was returned late (but still within the same month and year).<br/>

Per the library's fee structure, we know that our fine will be **15 Hackos X (# days late)**. We then print the result of **15 X (D<sub>a</sub> - D<sub>e</sub>) = 15 X (9 - 6) = 45** as our output.

<br/>
<br/>

---

## Solution

```javascript
function processData(input) {
    //Enter your code here
    let fine = 0;
    const [actual, expected] = input.split('\n').map(item => {
        const [day, month, year] = item.split(' ').map(Number);

        return { day, month, year };
    });

    (
        actual.year === expected.year &&
        actual.month === expected.month &&
        actual.day > expected.day
    ) && (fine = (actual.day - expected.day) * 15);

    (
        actual.year === expected.year &&
        actual.month > expected.month
    ) && (fine = (actual.month - expected.month) * 500);

    (actual.year > expected.year) && (fine = 10000);

    console.log(fine);
} 
```