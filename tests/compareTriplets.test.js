const assert = require('assert');

function compareTriplets(a, b) {
  return a.reduce((scores, value, index) => {
    if (value > b[index]) {
      scores[0] += 1;
    } else if (value < b[index]) {
      scores[1] += 1;
    }

    return scores;
  }, [0, 0]);
}

const cases = [
  { a: [5, 6, 7], b: [3, 6, 10], expected: [1, 1] },
  { a: [17, 28, 30], b: [99, 16, 8], expected: [2, 1] },
  { a: [1, 1, 1], b: [1, 1, 1], expected: [0, 0] },
  { a: [100, 100, 100], b: [1, 1, 1], expected: [3, 0] },
];

for (const { a, b, expected } of cases) {
  assert.deepStrictEqual(compareTriplets(a, b), expected);
}

console.log('compareTriplets tests passed');
