/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    /**
     * Solution 1
     */
    try {
         s = s.split('').reverse().join('');
    } catch (e) {
         console.log('s.split is not a function');
    }

    // console.log(s);


    /** 
     * Solution 2: Without Try / Catch
    */
    (typeof s !== 'string')
        ? console.log("s.split is not a function")
        : (s = s.split('').reverse().join(''));

    console.log(s);
}
