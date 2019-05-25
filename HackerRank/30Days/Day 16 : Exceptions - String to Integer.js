function main() {
    const S = readLine();

    try {
        console.log(parseInt(S).toString().replace('NaN', 'Bad String'));
    } catch (e) {
        console.log("Bad String");
    }
}
