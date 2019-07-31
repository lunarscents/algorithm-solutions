# Library Fine

Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: **fine = 0**).
2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, **fine = 15 Hackos X (the number of days late)**.
3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the **fine = 500 Hackos X (the number of days late)**.
4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of **10,000 Hackos**.

Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be .

## Function Description

Complete the libraryFine function in the editor below. It must return an integer representing the fine due.

libraryFine has the following parameter(s):

- d1, m1, y1: returned date day, month and year
- d2, m2, y2: due date day, month and year

## Input Format

The first line contains **3** space-separated integers, **d1,m1,y1**, denoting the respective **day**, **month**, and **year** on which the book was returned. <br/>
The second line contains **3** space-separated integers, **d2,m2,y2**, denoting the respective **day**, **month**, and **year** on which the book was due to be returned.<br/>

## Constraints 

- 1 <= d1,d2 <= 31
- 1 <= m1,m2 <= 12
- 1 <= y1,y2 <= 3000

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

Given the following dates: <br/>
Returned: **d1 = 9, m1 = 6, y1 = 2015** <br/>
Due: **d2 = 6, m2 = 6, y2 = 2015**<br/>

Because ![](https://latex.codecogs.com/gif.latex?y2&space;\equiv&space;y1), we know it is less than a year late. <br/>
Because ![](https://latex.codecogs.com/gif.latex?m2&space;\equiv&space;m1), we know it's less than a month late. <br/>
Because ![](https://latex.codecogs.com/gif.latex?d2&space;<&space;d1), we know that it was returned late (but still within the same month and year).<br/>

Per the library's fee structure, we know that our fine will be **15 Hackos X (# days late)**. We then print the result of **15 X (d1 - d2) = 15 X (9 - 6) = 45** as our output.<br/>

---

## Solution

```javascript
// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
    return (
        y1 > y2 ? 10000 : (
            y2 > y1 ? 0 : (
                m1 > m2 ? 500 * ((m1 - m2) + ((y1 - y2) * 12)) : (
                    m2 > m1 ? 0 : (
                        d1 > d2 ? 15 * (d1 - d2) : 0
                    )
                )
            )
        )
    );
}
```
