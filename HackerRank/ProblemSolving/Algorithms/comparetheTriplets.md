# Compare the Triplets

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from **1** to **100** for three categories: problem clarity, originality, and difficulty.

We define Alice's rating as the triplet **a = [a[0], a[1], a[2]]** and Bob's rating as the triplet **b = [b[0], b[1], b[2]]**.

Compare each category at the same index:

- If `a[i] > b[i]`, Alice receives `1` point.
- If `a[i] < b[i]`, Bob receives `1` point.
- If `a[i] === b[i]`, neither person receives a point.

Return an array with Alice's score first and Bob's score second.

For example, **a = [1, 2, 3]** and **b = [3, 2, 1]** returns **[1, 1]**. Bob wins the first category, the second category is tied, and Alice wins the third category.

## Function Description

Complete the `compareTriplets` function. It must return an array of two integers: Alice's score and Bob's score.

`compareTriplets` has the following parameters:

- `a`: an array of integers representing Alice's challenge rating
- `b`: an array of integers representing Bob's challenge rating

## Input Format

The first line contains **3** space-separated integers, `a[0]`, `a[1]`, and `a[2]`.<br/>
The second line contains **3** space-separated integers, `b[0]`, `b[1]`, and `b[2]`.

## Constraints

- `1 <= a[i] <= 100`
- `1 <= b[i] <= 100`

## Output Format

Return an array of two integers denoting the respective comparison points earned by Alice and Bob.

## Sample Input 0

```text
5 6 7
3 6 10
```

## Sample Output 0

```text
1 1
```

## Explanation 0

- `a[0] > b[0]`, so Alice receives `1` point.
- `a[1] === b[1]`, so nobody receives a point.
- `a[2] < b[2]`, so Bob receives `1` point.

The return array is **[1, 1]**.

## Sample Input 1

```text
17 28 30
99 16 8
```

## Sample Output 1

```text
2 1
```

## Explanation 1

- `17 < 99`, so Bob receives `1` point.
- `28 > 16`, so Alice receives `1` point.
- `30 > 8`, so Alice receives `1` point.

The return array is **[2, 1]**.

## Approach

Initialize a score array as `[0, 0]`, where index `0` is Alice's score and index `1` is Bob's score. Then loop through the three indexes in the triplets and compare the values at each position.

A tied category does not change either score, so only increment a score when the two compared values are different.

## Complexity

- Time complexity: `O(1)`, because the triplet length is always `3`.
- Space complexity: `O(1)`, because the solution only stores two score values.

---

## Solution

```javascript
function compareTriplets(a, b) {
    return a.reduce((scores, value, index) => {
        if (value > b[index]) {
            scores[0] += 1;
        } else if (value < b[index]) {
            scores[1] += 1;
        }

        return scores;
    }, [0, 0]);
}
```

## Test Cases

```javascript
console.assert(JSON.stringify(compareTriplets([5, 6, 7], [3, 6, 10])) === JSON.stringify([1, 1]));
console.assert(JSON.stringify(compareTriplets([17, 28, 30], [99, 16, 8])) === JSON.stringify([2, 1]));
console.assert(JSON.stringify(compareTriplets([1, 1, 1], [1, 1, 1])) === JSON.stringify([0, 0]));
```

For a runnable Node.js example, see [`tests/compareTriplets.test.js`](/tests/compareTriplets.test.js).

---
