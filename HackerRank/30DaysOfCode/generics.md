# Day 21: Generics
## Objective

Today we're discussing Generics; be aware that not all languages support this construct, so fewer languages are enabled for this challenge. Check out the Tutorial tab for learning materials and an instructional video!

## Task

Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). The locked Solution class in your editor tests your function.

**Note:** You must use generics to solve this challenge. Do not write overloaded functions.


## Input Format

The locked Solution class in your editor will pass different types of arrays to your printArray function.


## Constraints

- You must have exactly  function named printArray. **1**


## Output Format

Your printArray function should print each element of its generic array parameter on a new line.


<br/>
<br/>

---

## Solution

```javascript
/**
*
* What is the Generic?
* That is being able to create a component that can work over a variety of types rather than a single one.
* JavaScript is a dynamically typed language and it doesn't have any generics. So we can write a normal function or method.
* Also, you can write in languages like TypeScript, Java, C#.
* It's a creation code in C#
*
**/

static void PrintArray<T>(T[] array){
    foreach(T i in array)
        Console.WriteLine(i);
}
```


