function main() {
    const n = parseInt(readLine(), 10);

    new Array(10).fill(n).forEach((time, index) => {
        console.log(`${time} x ${index + 1} = ${time * (index + 1)}`);
    });
}
