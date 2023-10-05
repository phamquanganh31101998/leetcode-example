/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let result = false;
  const stack = [];
  const keys = ['(', '[', '{']
  const closeChar = {'(': ')', '[': ']', '{': '}'}

  for (let i = 0; i < s.length; i++) {
    if (keys.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const lastCharInStack = stack.pop()
      const relatedCloseChar = closeChar[lastCharInStack]
      if (relatedCloseChar === s[i]) {
        result = true
      } else {
        result = false;
        break;
      }
    }
  }

  return stack.length ? false : result;
};
