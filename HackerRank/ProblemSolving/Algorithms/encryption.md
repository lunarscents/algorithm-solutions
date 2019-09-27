# Encryption

An English text needs to be encrypted using the following encryption scheme.

First, the spaces are removed from the text. Let **L** be the length of this text.

Then, characters are written into a grid, whose rows and columns have the following constraints:

![](https://latex.codecogs.com/gif.latex?\left&space;\lfloor&space;\sqrt{L}&space;\right&space;\rfloor\leq&space;row\leq&space;column\leq&space;\left&space;\lceil&space;\sqrt{L}&space;\right&space;\rceil,&space;where&space;\left&space;\lfloor&space;x&space;\right&space;\rfloor&space;is&space;floor&space;function,&space;and&space;\left&space;\lceil&space;x&space;\right&space;\rceil&space;is&space;,&space;ceil&space;function)

For example, the sentence **s = if man was meant to stay on the ground god would have given us roots**, after removing spaces is **54** characters long. ![](https://latex.codecogs.com/gif.latex?\sqrt{54}) is between **7** and **8**, so it is written in the form of a grid with 7 rows and 8 columns.

```
ifmanwas
meanttos
tayonthe
groundgo
dwouldha
vegivenu
sroots
```

- Ensure that ![](https://latex.codecogs.com/gif.latex?rows&space;\times&space;columns\geq&space;L)
- If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. ![](https://latex.codecogs.com/gif.latex?rows&space;\times&space;columns).

The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and so on. For example, the encoded message for the above rectangle is:

```
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
```

You will be given a message to encode and print.

## Function Description

Complete the encryption function in the editor below. It should return a single string composed as described.

encryption has the following parameter(s):

- s: a string to encrypt

## Input Format

One line of text, the string **S**

## Constraints

![](https://latex.codecogs.com/gif.latex?1\leq&space;\left&space;|&space;s&space;\right&space;|\leq&space;81)

**s** is comprised only of characters in the range ascii[a-z].

## Output Format

Print the encoded message on one line as described.

## Sample Input

```
haveaniceday
```

## Sample Output 0

```
hae and via ecy
```

## Explanation 0

**L = 12**, ![](https://latex.codecogs.com/gif.latex?\sqrt{12}) is between **3** and **4**.

Rewritten with **3** rows and **4** columns:

```
have
anic
eday
```

## Sample Input 1

```
feedthedog
```

## Sample Output 1

```
fto ehg ee dd
```

## Explanation 1

**L = 10**, ![](https://latex.codecogs.com/gif.latex?\sqrt{10}) is between **3** and **4**.

Rewritten with **3** rows and **4** columns:

```
feed
thed
og
```

## Sample Input 2

```
chillout
```

## Sample Output 2

```
clu hlt io
```

## Explanation 2

**L = 8**, ![](https://latex.codecogs.com/gif.latex?\sqrt{8}) is between **2** and **3**.

Rewritten with **3** columns and **3** rows (**2 \* 3 = 6 < 8** so we have to use **3 x 3**.)

```
chi
llo
ut
```

---

### Solution

```javascript
// Complete the encryption function below.
function encryption(s) {
  let value = Math.ceil(Math.sqrt([...s].length));

  return [...s]
    .reduce((target, item, index) => {
      target[index % value] += item;

      return target;
    }, new Array(value).fill(""))
    .join(" ");
}
```
