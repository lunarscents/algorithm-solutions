# Day 22: Binary Search Trees
## Objective

Today, we're working with Binary Search Trees (BSTs). Check out the Tutorial tab for learning materials and an instructional video!

## Task

The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, **root**, pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the height of the binary search tree.

## Input Format

The locked stub code in your editor reads the following inputs and assembles them into a binary search tree: <br/>
The first line contains an integer, **n**, denoting the number of nodes in the tree. <br/>
Each of the **n** subsequent lines contains an integer, **data**, denoting the value of an element that must be added to the BST.


## Output Format

The locked stub code in your editor will print the integer returned by your getHeight function denoting the height of the BST.


## Sample Input

```
7
3
5
2
1
4
6
7
```

## Sample Output

```
3
```


## Explanation

The input forms the following BST:<br/>

![Binary Search Tree](https://s3.amazonaws.com/hr-challenge-images/17175/1459894869-6bb53ce6eb-BST.png)


The longest root-to-leaf path is shown below:<br/>

![Longest Root-to-Leaf Path](https://s3.amazonaws.com/hr-challenge-images/17175/1459895368-4955f9ce74-LongestRTL.png)


There are **4** nodes in this path that are connected by **3** edges, meaning our BST's **height = 3**. Thus, we print **3** as our answer.
<br/>
<br/>

---

## Solution
```javascript
if (root === null) return -1;

return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
```
