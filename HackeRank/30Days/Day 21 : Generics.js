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
