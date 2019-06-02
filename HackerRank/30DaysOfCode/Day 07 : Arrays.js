/** The Creation Code with .reverse() **/
function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    console.log(arr.reverse().join(' '));
}


/** The Creation Code without .reverse() **/
const reverseArray = (array) => {
    let temp = null;
    
    for (let i = 0, itotal = array.length; i < length / 2; i++){
        temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }

    return array;
}
console.log(reverseArray(arr).join(' '));