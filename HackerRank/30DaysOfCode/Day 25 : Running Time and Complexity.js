/** Consider to write code by using the Sieve of Eratosthenes, then you can make a optimization code **/

/** Solution 1 **/
function processData(input) {
    //Enter your code here
    let result = input.split('\n').slice(1).map(isPrime);

    function isPrime(input, i) {
        let messages = ['Not prime', 'Prime'];

        if (input == 1) { 
            return messages[0];
        }
        if (input == 2) {
            return messages[1];
        }
        if (input % 2 == 0) {
            return messages[0];
        } 
        
        for (i = 3; i <= Math.sqrt(input); i += 2) {
            if (input % i == 0) { 
                return messages[0];
            }
        } 
        return messages[1];
    }

    console.log(result.join("\n"));
} 

/** Solution 2 **/
function processData(input) {
    //Enter your code here
    input.split('\n').slice(1).map((n, i) => {
        console.log(isPrime(n) ? 'Prime' : 'Not prime');
    });

    function isPrime(n) {
        if (n == 1) return false;

        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }

        return true;
    }
} 
