# Time Conversion

Given a time in **12**-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

## Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

- s: a string representing time in **12** hour format

## Input Format

A single string **s** containing a time in **12**-hour clock format (i.e.: **hh:mm:ssAM** or **hh:mm:ssPM**), where **01 <= hh <= 12** and **00 <= mm,ss <= 59**.

## Constraints 

- All input times are valid

## Output Format

Convert and print the given time in **24**-hour format, where **0 <= hh <= 23**.

## Sample Input 0

```
07:05:45PM
```

## Sample Output 0

```
19:05:45
```

---

## Solution

```javascript
/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    return (s || '').split(':').reduce((target, item, index) => {
        item = !index
            ?
            ((s || '').includes('PM')
                ? (+item < 12 ? `${+item + 12}` : item)
                : (+item < 12 ? item : '00')
            )
            :
            item.replace(/PM|AM/gi, '');

        target.push(item);

        return target;
    }, []).join(':');
}
```
