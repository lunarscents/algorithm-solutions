# 소수 찾기
<br/>

## 문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.<br/>
(1은 소수가 아닙니다.)


<br/>


## 제한 사항
- n은 2이상 1000000이하의 자연수입니다.

<br/>


## 입출력 예
| n | return |
| --- | --- | --- |
| 10 | 4 |
| 5 | 3 |

<br/>


## 입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

<br/>


### Solution

---

```javascript

function solution(n) {
    let isPrime = [false, false, ...new Array(n - 1).fill(true)];
    
    const answers = [];

    for (let item = 2; item <= n; item++) {
        if (isPrime[item] ) {
          answers.push(item);

          let index = item * item;

          while (index <= n) {
            isPrime[index] = false;

            index += item;
          }
        }
    }

    return answers.length;
}

```