const assert = require('assert');

function simpleArraySum(ar) {
  return ar.reduce((total, value) => total + value, 0);
}

const cases = [
  { input: [1, 2, 3], expected: 6 },
  { input: [1, 2, 3, 4, 10, 11], expected: 31 },
  { input: [1000], expected: 1000 },
  { input: [5, 5, 5, 5], expected: 20 },
];

for (const { input, expected } of cases) {
  assert.strictEqual(simpleArraySum(input), expected);
}

console.log('simpleArraySum tests passed');
