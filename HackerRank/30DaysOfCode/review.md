# Day 6: Let's Review
## Objective

Today we're expanding our knowledge of Strings and combining it with what we've already learned about loops. Check out the Tutorial tab for learning materials and an instructional video!


## Task

Given a string, **S**, of length **N** that is indexed from **0** to **N - 1**, print its even-indexed and odd-indexed characters as **2** space-separated strings on a single line (see the Sample below for more detail).

**Note: 0** is considered to be an even index.


## Input Format

The first line contains an integer, **T** (the number of test cases). 
Each line **i** of the **T** subsequent lines contain a String, **S**.


## Constraints
   
- **1 <= T <= 10**
- **2 <= length of S <= 10000**


## Output Format

For each String **S<sub>j</sub>** (where **0 <= j <= T - 1**), print **S<sub>j</sub>**'s even-indexed characters, followed by a space, followed by **S<sub>j</sub>**'s odd-indexed characters.

## Sample Input

```
2
Hacker
Rank
```


##Sample Output

```
Hce akr
Rn ak
```

##Explanation

Test Case 0: **S = "Hacker"**<br/>
**S[0] = "H"**<br/>
**S[1] = "a"**<br/>
**S[2] = "c"**<br/>
**S[3] = "k"**<br/>
**S[4] = "e"**<br/>
**S[5] = "r"**<br/>

 
The even indices are **0**, **2**, and **4**, and the odd indices are **1**, **3**, and **5**. We then print a single line of **2** space-separated strings; the first string contains the ordered characters from **S**'s even indices (**Hce**), and the second string contains the ordered characters from **S**'s odd indices (**akr**).

Test Case 1: **S = "Rank"**<br/>
**S[0] = "R"**<br/>
**S[1] = "a"**<br/>
**S[2] = "n"**<br/>
**S[3] = "k"**<br/>


The even indices are **0** and **2**, and the odd indices are **1** and **3**. We then print a single line of **2** space-separated strings; the first string contains the ordered characters from **S**'s even indices (**Rn**), and the second string contains the ordered characters from **S**'s odd indices (**ak**).

<br/>
<br/>

---

## Solution

```javascript

function processData(input) {
    //Enter your code here
    input.split("\n").reduce((target, item, index) => {
        if (index && Number.isNaN(+item)) {
            let result = item.split('').reduce((target, text, index) => {
                target[+(index % 2 !== 0)] += text;

                return target;
            }, new Array(2).fill('')).join(' ')

            console.log(result);
        }

        return target;
    }, '');
} 

```
