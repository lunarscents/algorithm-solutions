/** The Way to a Creation Code with while~, .reduce() **/
function main() {
    let n = parseInt(readLine(), 10);
    let values = [];

    while (+n != 0) {
        values.push(n % 2);

        n = Math.floor(n / 2);
    }

    let { result } = values.reduce((target, item, index) => {
        item
            ? target['accumulator']++
            : (target['accumulator'] = 0);

        target['accumulator'] > target['result'] && (target['result'] = target['accumulator']);

        return target;
    }, { accumulator: 0, result: 0 })

    console.log(result);
}


/** The Way to a Creation Code with .reduce() **/
function main() {
    const n = parseInt(readLine(), 10);
    let result = 0;

    const temp = n.toString(2).split('').reduce((target, num) => {
        let value = Number(num) > 0 ? Number(target) + Number(num) : (
            result = target > result ? target : result,
            0
        )

        return value;

    }, 0)

    console.log(result - temp > 0 ? result : temp)
}


/** The Way to a Creation Code with for~ **/
function main() {
    const n = parseInt(readLine(), 10);
    const array = n.toString(2).split('');
    let max = 0;
    let cur = 0;

    for (let i = 0, itotal = array.length; i < itotal; i++) {
        if (array[i] == 1) {
            cur++;
        } else if (array[i] == 0) {
            if (cur > max) {
                max = cur;
            }
            cur = 0;
        }
    }

    if (cur > max) {
        max = cur;
    }
    
    console.log(max);
}
