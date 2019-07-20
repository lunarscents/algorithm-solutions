# Angry Professor

A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (**arrivalTime <= 0**) to arrived late (**arrivalTime > 0**).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

## Input Format

The first line of input contains **t**, the number of test cases.

Each test case consists of two lines.

The first line has two space-separated integers, **n** and **k**, the number of students (size of **a**) and the cancellation threshold. 
The second line contains **n** space-separated integers (**a[1],a[2],...,a[n]**) describing the arrival times for each student.

Note: Non-positive arrival times (**a[i] <= 0**) indicate the student arrived early or on time; positive arrival times (**a[i] > 0**) indicate the student arrived **a[i]** minutes late.

For example, there are **n = 6** students who arrive at times **a = [-1,-1,0,0,1,1]**. Four are there on time, and two arrive late. If there must be **k = 4** for class to go on, in this case the class will continue. If there must be **k = 5**, then class is cancelled.

## Function Description

Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

angryProfessor has the following parameter(s):

- k: the threshold number of students
- a: an array of integers representing arrival times

## Constraints 

- 1 <= t <= 10
- 1 <= n <= 1000
- 1 <= k <= n
- ![](https://latex.codecogs.com/gif.latex?-100&space;\leq&space;a[i]&space;\leq&space;100,&space;where&space;i&space;\in&space;[1,...,n])

## Output Format

For each test case, print the word YES if the class is canceled or NO if it is not.

Note <br/>
If a student arrives exactly on time **(a<sub>i</sub> = 0)**, the student is considered to have entered before the class started.

## Sample Input

```
2
4 3
-1 -3 4 2
4 2
0 -1 2 1
```

## Sample Output

```
YES
NO
```

## Explanation

For the first test case, **k = 3**. The professor wants at least **3** students in attendance, but only **2** have arrived on time (**-3** and **-1**) so the class is cancelled.

For the second test case, **k = 2**. The professor wants at least **2** students in attendance, and there are **2** who have arrived on time (**-0* and **-1**) so the class is not cancelled.

---

## Solution

```javascript
// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    let presentStudents = (a || []).reduce((target, student) => {
        (student <= 0) && target++;

        return target;
    }, 0);

    return (presentStudents >= k) ? 'NO' : 'YES';
}
```
