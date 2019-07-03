# Grading Students

HackerLand University has the following grading policy:

- Every student receives a **grade** in the inclusive range from **0** to **100**.
- Any **grade** less than **40** is a failing grade.

Sam is a professor at the university and likes to round each student's **grade** according to these rules:

- If the difference between the **grade** and the next multiple of **5** is less than **3**, round **grade** up to the next multiple of **5**.
- If the value of **grade** is less than **38**, no rounding occurs as the result will still be a failing grade.

For example, **grade = 84** will be rounded to **85** but **grade = 29** will not be rounded because the rounding would result in a number that is less than **40**.

Given the initial value of **grade** for each of Sam's **n** students, write code to automate the rounding process.

## Function Description

Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

gradingStudents has the following parameter(s):

- grades: an array of integers representing grades before rounding

## Input Format

The first line contains a single integer, **n**, the number of students. 
Each line **i** of the **n** subsequent lines contains a single integer, **grades[i]**, denoting student **i**'s grade.

## Constraints 

- 1 <= n <= 60
- 0 <= grades[i] <= 100

## Output Format

For each **grades[i]**, print the rounded grade on a new line.

## Sample Input 0

```
4
73
67
38
33
```

## Sample Output 0

```
75
67
40
33
```

## Explanation 0
   
![](https://s3.amazonaws.com/hr-challenge-images/0/1484768684-54439977a1-curving2.png)

1. Student **1** received a **73**, and the next multiple of **5** from **73** is **75**. Since **75 - 73 < 3**, the student's grade is rounded to **75**.
2. Student **2** received a **67**, and the next multiple of **5** from **67** is **70**. Since **70 - 67 = 3**, the grade will not be modified and the student's final grade is .
3. Student **3** received a **38**, and the next multiple of **5** from **38** is **40**. Since **40 - 38 < 3**, the student's grade will be rounded to **40**.
4. Student **4** received a grade below **38**, so the grade will not be modified and the student's final grade is **33**.

---

## Solution

```javascript
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    return (grades || []).reduce((target, grade) => {
        let finalGrade = Math.ceil(grade / 5) * 5;

        target.push((finalGrade - grade >= 3 || grade < 38 ) ? grade : finalGrade);

        return target;
    }, []);
}
```
