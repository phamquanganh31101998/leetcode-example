// https://leetcode.com/problems/length-of-last-words/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let result = 0;
  let i = s.length - 1;

  while (i >= 0) {
    // encounter the space before the last word -> skip
    if (s[i] === ' ' && result === 0) {
      i--;
      continue;
    }

    // encounter the space after the last word -> stop
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