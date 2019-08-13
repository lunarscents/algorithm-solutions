# Repeated String

Lilah has a string, **s**, of lowercase English letters that she repeated infinitely many times.

Given an integer, **n**, find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string **s = 'abcac'** and **n = 10**, the substring we consider is **abcacabcac**, the first **10** characters of her infinite string. There are **4** occurrences of a in the substring.

## Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length **n** in the infinitely repeating string.

repeatedString has the following parameter(s):

- s: a string to repeat
- n: the number of characters to consider

## Input Format

The first line contains a single string, **s**. <br/>
The second line contains an integer, **n**.

## Constraints

- 1 <= |s| <= 100
- 1 <= n <= 10<sup>12</sup>
- For **25%** of the test cases, **n <= 10<sup>6</sup>**.

## Output Format

Print a single integer denoting the number of letter a's in the first **n** letters of the infinite string created by repeating **s** infinitely many times.

## Sample Input 0

```
aba
10
```

## Sample Output 0

```
7
```

## Explanation 0

The first **n = 10** letters of the infinite string are abaabaabaa. Because there are **7** a's, we print **7** on a new line.

## Sample Input 1

```
a
1000000000000
```

## Sample Output 1

```
1000000000000
```

## Explanation 1

Because all of the first **n = 1000000000000** letters of the infinite string are a, we print **1000000000000** on a new line.

---

### Solution

```javascript
// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
    let result = [];

    while (arr.length > 0) {
        result.push(arr.length);

        arr.sort((a, b) => (a - b));

        let front = arr[0];

        arr.reduce((target, value, index) => {
            arr[index] -= front;

            return target;
        }, []);

        let remove = arr.lastIndexOf(0) + 1;

        arr.splice(0, remove);
    }

    return result;
}
```