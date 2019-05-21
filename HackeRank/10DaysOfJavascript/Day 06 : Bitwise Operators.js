function getMaxLessThanK(n, k) {
    /** Solution 1 */
    let max = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let bw = (a & b);

            (bw < k && bw > max) && (max = bw);
        }
    }

    return max;
}
