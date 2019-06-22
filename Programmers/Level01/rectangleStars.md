# 직사각형 별찍기
<br/>

## 문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.<br/>
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

## 제한 조건
- n과 m은 각각 1000 이하인 자연수입니다.

## 예시
### 입력

```
5 3
```

### 출력

```
*****
*****
*****
```

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
