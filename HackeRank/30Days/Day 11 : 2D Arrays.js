/** The one of ways of creation code **/
function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = arr.reduce((target, rows, index) => {
        rows.reduce((subTarget, item, subIndex) => {
            (
                index < arr.length - 2 && subIndex < arr.length - 2
            ) &&
                target.push(
                    arr[index][subIndex] + arr[index][subIndex + 1] + arr[index][subIndex + 2] + arr[index + 1][subIndex + 1] + arr[index + 2][subIndex] + arr[index + 2][subIndex + 1] + arr[index + 2][subIndex + 2]
                );
        }, []);

        return target;
    }, []);

    console.log(Math.max.apply(null, result));
}


/** The one of ways of creation code **/
function main() {
    let arr = Array(6);
    let maxSum;

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const findMaxSum = (n, m) => {
        let sum = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                sum += !(i === 1 && (j === 0 || j === 2)) && arr[n + i][m + j];
            }
        }
        return sum;
    }

    const search = () => {
        let sum;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                sum = findMaxSum(i, j);
                (i === 0 && j === 0) && (maxSum = sum);
                maxSum < sum && (maxSum = sum);
            }
        }
    }

    search();
    console.log(maxSum);
}


/** The one of ways of creation code **/
function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const temp = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            temp.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
        }
    }
    
    let max = temp.reduce(function (previous, current) {
        return previous > current ? previous : current;
    });
    
    console.log(max);
}
