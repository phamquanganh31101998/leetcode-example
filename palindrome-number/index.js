// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const stack = []
  if (x < 0) return false

  let result = true
  const str = x.toString().split('')
  str.forEach(char => stack.push(char))

  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - i - 1] !== str[i]) {
      result = false
      break
    }
  }

  return result
};

function main() {
  console.log(isPalindrome(121))
}

main()