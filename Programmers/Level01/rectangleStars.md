# 직사각형 별찍기
<br/>

## 문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

## 제한 조건
- n과 m은 각각 1000 이하인 자연수입니다.

## 입출력 예
| x | n | answer |
| --- | --- | --- |
| 2 | 5 | [2,4,6,8,10] |
| -4 | 2 | [-4, -8] |

### Solution

---

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let result = Array(b).fill('').reduce((target, item) => {
        target.push('*'.repeat(a));
        
        return target;
    }, []).join('\n')
    
    console.log(result);
});
```
