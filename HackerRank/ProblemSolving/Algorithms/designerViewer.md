# Designer PDF Viewer

When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:<br/>

![](https://s3.amazonaws.com/hr-challenge-images/22869/1471640108-6c01750b16-PDF-highighting.png)

In this challenge, you will be given a list of letter heights in the alphabet and a string. Using the letter heights given, determine the area of the rectangle highlight in **mm<sup>2</sup>** assuming all letters are **1mm** wide.

For example, the highlighted **word = torn**. Assume the heights of the letters are **t = 2, o = 1, r = 1** and **n = 1**. The tallest letter is **2** high and there are **4** letters. The hightlighted area will be **2 * 4 = 8mm<sup>2</sup>** so the answer is **8**.

## Function Description

Complete the designerPdfViewer function in the editor below. It should return an integer representing the size of the highlighted area.

designerPdfViewer has the following parameter(s):

- h: an array of integers representing the heights of each letter
- word: a string

## Input Format

The first line contains **26** space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z]. <br/>
The second line contains a single word, consisting of lowercase English alphabetic letters.

## Constraints 

- **1 <= h[?] <= 7**, where **?** is an English lowercase letter.
- **word** contains no more than **10** letters.

## Output Format

Print a single integer denoting the area in **mm<sup>2</sup>** of highlighted rectangle when the given word is selected. Do not print units of measure.

## Sample Input 0

```
1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
abc
```

## Sample Output 0

```
9
```

## Explanation 0

We are highlighting the word abc:

Letter heights are **a = 1**, **b = 3** and **c = 1**. The tallest letter, b, is **3mm** high. The selection area for this word is <br/>

![](https://latex.codecogs.com/gif.latex?3\cdot&space;1mm\cdot&space;3mm&space;=&space;9mm^{2}).

Note: Recall that the width of each character is **1mm**.

## Sample Input 1

```
1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
zaba
```

## Sample Output 1

```
28
```

## Explanation 1

The tallest letter in **zaba** is **z** at **7mm**. The selection area for this word is ![](https://latex.codecogs.com/gif.latex?4&space;\times&space;1mm&space;\times&space;7mm&space;=&space;28mm^{2}).

---

## Solution

```javascript
// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    let { code, values } = new Array(26).fill(0).reduce((target, value, index) => {
        target['values'][String.fromCharCode(target['code'])] = h[index];
        target['code']++;
        
        return target;
    }, { code: 97, values: new Object() });

    let { height, max } = [...`${word}`].reduce((target, value, index) => {
        target['height'] = values[word.charAt(index)];
        target['max'] = Math.max(target['max'], target['height']);

        return target;
    }, { height: 0, max: 0 });

    return (word.length * max);
}
```
