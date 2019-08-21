# Taum and B'day

Taum is planning to celebrate the birthday of his friend, Diksha. There are two types of gifts that Diksha wants from Taum: one is black and the other is white. To make her happy, Taum has to buy **b** black gifts and **w** white gifts.

- The cost of each black gift is **bc** units.
- The cost of every white gift is **wc** units.
- The cost of converting each black gift into white gift or vice versa is  units.

Help Taum by deducing the minimum amount he needs to spend on Diksha's gifts.

For example, if Taum wants to buy **b = 3** black gifts and **w = 5** white gifts at a cost of **bc = 3, wc = 4** and conversion cost **z = 1**, we see that he can buy a black gift for **3** and convert it to a white gift for **1**, making the total cost of each white gift **4**. That matches the cost of a white gift, so he can do that or just buy black gifts and white gifts. Either way, the overall cost is **3 * 3 + 5 * 4 = 29**.

## Function Description

Complete the function taumBday in the editor below. It should return the minimal cost of obtaining the desired gifts.

taumBday has the following parameter(s):

- b: the number of black gifts
- w: the number of white gifts
- bc: the cost of a black gift
- wc: the cost of a white gift
- z: the cost to convert one color gift to the other color

## Input Format

The first line will contain an integer **t**, the number of test cases.

The next **t** pairs of lines are as follows: 

- The first line contains the values of integers **b** and **w**. 
- The next line contains the values of integers **bc**, **wc**, and **z**.


## Constraints

1 <= t <= 10<br/>
0 <= b,w,bc,wc,z <= 10<sup>9</sup>

## Output Format

**t** lines, each containing an integer: the minimum amount of units Taum needs to spend on gifts.

## Sample Input

```
5
10 10
1 1 1
5 9
2 3 4
3 6
9 1 1
7 7
4 2 1
3 3
1 9 2
```

## Sample Output 

```
20
37
12
35
12
```

## Explanation 

- Test Case #01: <br/>
Since black gifts cost the same as white, there is no benefit to converting the gifts. Taum will have to buy each gift for 1 unit. The cost of buying all gifts will be: **b * bc + w * wc = 10 * 1 + 10 * 1 = 20**.

- Test Case #02: <br/>
Again, we can't decrease the cost of black or white gifts by converting colors.  is too high. We will buy gifts at their original prices, so the cost of buying all gifts will be: **b * bc + w * wc = 5 * 2 + 9 * 3 = 10 + 27 = 37**.

- Test Case #03: <br/>
Since **bc > wc + z**, we will buy **b + w = 3 + 6 = 9**  white gifts at their original price of **1**. **b = 3** of the gifts must be black, and the cost per conversion, **z = 1**. Total cost is **9 * 1 + 3 * 1 = 12**.

- Test Case #04: <br/>
Similarly, we will buy **w = 7** white gifts at their original price, **wc = 2**. For black gifts, we will first buy white ones and color them to black, so that their cost will be reduced to **wc + z = 2 + 1 = 3**. So cost of buying all gifts will be: **7 * 3 + 7 * 2 = 35**.

- Test Case #05: <br/>
We will buy black gifts at their original price, **bc = 1**. For white gifts, we will first black gifts worth **bc = 1** unit and color them to white for **z = 2** units. The cost for white gifts is reduced to **wc = bc + z = 2 + 1 =3** units. The cost of buying all gifts will be: **3 * 1 + 3 * 3 = 3 + 9 = 12**.

---

### Solution

```javascript
/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    const gifts = BigInt(b) + BigInt(w);

    const whiteGifts = gifts * BigInt(wc) + (BigInt(b) * BigInt(z));
    const blackGifts = gifts * BigInt(bc) + (BigInt(w) * BigInt(z));

    let min = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);

    (blackGifts < min) && (min = blackGifts);
    (whiteGifts < min) && (min = whiteGifts);

    return min;
}
```