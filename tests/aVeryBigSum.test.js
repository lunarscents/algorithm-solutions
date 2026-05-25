const assert = require('assert');

function aVeryBigSum(ar) {
  return ar.reduce((total, value) => total + value, 0);
}

const cases = [
  {
    input: [1000000001, 1000000002, 1000000003, 1000000004, 1000000005],
    expected: 5000000015,
  },
  { input: [1, 2, 3], expected: 6 },
  { input: [10000000000], expected: 10000000000 },
  { input: [9999999999, 1], expected: 10000000000 },
];

for (const { input, expected } of cases) {
  assert.strictEqual(aVeryBigSum(input), expected);
}

console.log('aVeryBigSum tests passed');
