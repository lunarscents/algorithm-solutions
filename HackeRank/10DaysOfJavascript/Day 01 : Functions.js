/**
 * Solution 1
 */
// const factorial = (n) => (n - 1) > 0 ? n * factorial(n - 1) : 1;

/**
 * Solution 2
 */
let memoization = [0, 1];

const factorial = (n) => {
    (typeof memoization[n] !== 'number') && (
        memoization[n] = (n - 1) > 0 ? n * factorial(n - 1) : 1 
    );

    return memoization[n];
}
