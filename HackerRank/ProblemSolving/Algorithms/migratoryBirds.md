# Migratory Birds

You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

For example, assume your bird sightings are of types **arr = [1,1,2,2,3]**. There are two each of types **1** and **2**, and one sighting of type **3**. Pick the lower of the two types seen twice: type **1**.

## Function Description

Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.

migratoryBirds has the following parameter(s):

- arr: an array of integers representing types of birds sighted

## Input Format

The first line contains an integer denoting **n**, the number of birds sighted and reported in the array **arr**. <br/>
The second line describes **arr** as **n** space-separated integers representing the type numbers of each bird sighted.

## Constraints 

- 5 <= n <= 2 X 10<sup>5</sup>
- It is guaranteed that each type is **1**, **2**, **3**, **4**, or **5**.

## Output Format

Print the type number of the most common bird; if two or more types of birds are equally common, choose the type with the smallest ID number.

## Sample Input 0

```
6
1 4 4 4 5 3
```

## Sample Output 0

```
4
```

## Explanation 0

The different types of birds occur in the following frequencies:

- Type **1**: **1** bird
- Type **2**: **0** birds
- Type **3**: **1** bird
- Type **4**: **3** birds
- Type **5**: **1** bird

The type number that occurs at the highest frequency is type **4**, so we print **4** as our answer.

## Sample Input 1
```
11
1 2 3 4 5 4 3 2 1 3 4
```

## Sample Output 1

```
3
```

## Explanation 1
   
The different types of birds occur in the following frequencies:
   
- Type **1**: **2**
- Type **2**: **2**
- Type **3**: **3**
- Type **4**: **3**
- Type **5**: **1**

Two types have a frequency of **3**, and the lower of those is type **3**.

---

## Solution

```javascript
// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let results = new Array(5).fill(0).map((value, index) => ({ value, index: index + 1 }));

    (arr || []).reduce((target, value, index) => {
        results[value - 1].value++;

        return target;
    }, [])

    return results.sort((a,b) => b.value - a.value)[0].index;
}
```
