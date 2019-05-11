/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    let result = 'YES';

    if (a < 0) {
        throw ({ message: 'Negative Error' });
    } else if (a === 0) {
        throw ({ message: 'Zero Error' });
    }

    return result;
}
