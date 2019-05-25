// Complete the factorial function below.
function factorial(n) {
    return (!+n) ? 1 : n * factorial(n - 1);
}
