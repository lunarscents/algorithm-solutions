/** Solution 1 **/
function getSecondLargest(nums) {
    // Complete the function
    const max = Math.max(...nums);

    nums = nums.filter(num => num !== max);

    return Math.max(...nums);
}

/** Solution 2 **/
function getSecondLargest(nums) {
    // Complete the function
    let results = nums.sort((a, b) => a - b)
        .filter((el, index, array) => index === array.indexOf(el));

    return results[results.length - 2];
}
