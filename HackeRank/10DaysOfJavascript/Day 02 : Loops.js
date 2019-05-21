

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
const vowel = [ 'a', 'e', 'i', 'o', 'u' ];

function vowelsAndConsonants(s) {
    let { vowels, consonants } = (s.split('') || []).reduce((target, item) => {
        target[vowel.includes(item) ? 'vowels' : 'consonants'].push(item)

        return target;
    }, { vowels: [], consonants: [] });

    vowels.concat(consonants).forEach((item) => {
        console.log(item);
    });
}

