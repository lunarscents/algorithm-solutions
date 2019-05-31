function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let numberOfSwaps = 0;

    const bubbleSort = (values) => {
        let swapped;

        do {
            swapped = false;
            
            for (let i = 0, { length } = values; i < length; i++) {
                if (values[i] > values[i + 1]) {
                    let tmp = values[i];
                    
                    values[i] = values[i + 1];
                    values[i + 1] = tmp;
                    
                    swapped = true;
                    numberOfSwaps++;
                }
            }
        } while (swapped);

        return values;
    };

    let result = bubbleSort(a);

    console.log(`Array is sorted in ${numberOfSwaps} swaps.\nFirst Element: ${result[0]}\nLast Element: ${result[n - 1]}`);
}
