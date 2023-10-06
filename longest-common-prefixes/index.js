// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = ''
  for (let i = 0; i < strs[0]?.length; i++) {
    const letter = strs?.[0]?.[i] || ''
    if (strs.every(str => str[i] === letter)) {
      result += letter
    } else {
      break
    }
  }

  return result
};

console.log(longestCommonPrefix(["flower","flow","flight"]))