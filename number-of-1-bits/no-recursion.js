// https://leetcode.com/problems/number-of-1-bits/
// no divide and conquer

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {

  const numStr = dec2bin(n)

  let total = 0;

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === '1') total += 1
  }

  return total
};

console.log({
  '00000000000000000000000000001011': hammingWeight(0o0000000000000000000000000001011),
  '00000000000000000000000010000000': hammingWeight(0o0000000000000000000000010000000),
  '11111111111111111111111111111101': hammingWeight(0o11111111111111111111111111111101)
})