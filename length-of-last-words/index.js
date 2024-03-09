// https://leetcode.com/problems/length-of-last-words/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let result = 0;
  let i = s.length - 1;

  while (i >= 0) {
    if (s[i] === ' ' && result === 0) {
      i--;
      continue;
    }

    if (s[i] === ' ' && result > 0) {
      break
    }

    result++
    i--;
  }

  return result
};

function main() {
  console.log(lengthOfLastWord('   fly me   to   the moon  '))
}

main()