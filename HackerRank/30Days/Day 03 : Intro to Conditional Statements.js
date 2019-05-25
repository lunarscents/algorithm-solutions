/** The First Creation Code before 2 years ago **/

function main() {
    var N = parseInt(readLine());
    
    if(N % 2 == 0) {
        if(N >= 2 && N < 6) {
            console.log('Not Weird');
        } else if(N >= 6 && N <= 20) {
            console.log('Weird');
        } else if(N > 20) {
            console.log('Not Weird');
        }
    } else {
        console.log('Weird');
    }
}

/** The Second Creation Code **/
function main() {
    const N = parseInt(readLine(), 10);
    let result = (N % 2 === 1 || (N % 2 === 0 && N >= 6 && N <= 20)) ? 'Weird' : 'Not Weird';

    console.log(result);
}
