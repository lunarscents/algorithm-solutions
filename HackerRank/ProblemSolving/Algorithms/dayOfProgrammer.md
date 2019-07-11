# Day of the Programmer

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the day of the year) during a year in the inclusive range from **1700** to **2700**.

From **1700** to **1917**, Russia's official calendar was the Julian calendar; since **1919** they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in **1918**, when the next day after January **31<sup>st</sup>** was February **14<sup>th</sup>**. This means that in **1918**, February **14<sup>th</sup>** was the **32<sup>nd</sup>** day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has **29** days during a leap year, and **28** days during all other years. In the Julian calendar, leap years are divisible by **4**; in the Gregorian calendar, leap years are either of the following:

- Divisible by **400**.
- Divisible by **4** and not divisible by **100**.

Given a year, **y**, find the date of the **256<sup>th</sup>** day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is **y**.

For example, the given **year = 1984**. **1984** is divisible by **4**, so it is a leap year. The **256<sup>st</sup>** day of a leap year after **1918** is September 12, so the answer is **12.09.1984**.

## Function Description

Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the **256<sup>th</sup>** day of the year given.

dayOfProgrammer has the following parameter(s):

- year: an integer

## Input Format

A single integer denoting year **y**.

## Constraints 

- 1700 <= y <= 2700

## Output Format

Print the full date of Day of the Programmer during year  in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is **y**.

## Sample Input 0

```
2017
```

## Sample Output 0

```
13.09.2017
```

## Explanation 0
   
In the year **y = 2017**, January has **31** days, February has **28** days, March has **31** days, April has **30** days, May has **31** days, June has  days, July has **30** days, and August has **31** days. When we sum the total number of days in the first eight months, we get **31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243**. Day of the Programmer is the **256<sup>th</sup>** day, so then calculate **256 - 243 = 13** to determine that it falls on day **13** of the **9<sup>th</sup>** month (September). We then print the full date in the specified format, which is 13.09.2017.

## Sample Input 1

```
2016
```

## Sample Output 1

```
12.09.2016
```

## Explanation 1
   
Year **y = 2016** is a leap year, so February has **29** days but all the other months have the same number of days as in **2017**. When we sum the total number of days in the first eight months, we get **31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244**. Day of the Programmer is the **256<sup>th</sup>** day, so then calculate **256 - 244 = 12** to determine that it falls on day **12** of the **9<sup>th</sup>** month (September). We then print the full date in the specified format, which is 12.09.2016.

## Sample Input 2

```
1800
```

## Sample Output 2

```
12.09.1800
```

## Explanation 2
   
Since 1800 is leap year. Day lies on 12 September.

---

## Solution

```javascript
// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    return (year == 1918)
        ? '26.09.1918'
        :
        ((
            ((year <= 1917) && !(year % 4)) ||
            (!(year % 400) || (!(year % 4) && !!(year % 100)))
        )
            ? `12.09.${year}`
            : `13.09.${year}`
        );
}
```
