/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let result = false;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
      continue;
    }

    if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      const lastCharInStack = stack.pop();

      if (lastCharInStack === '(' && s[i] === ')') {
        result = true;
      } else if (lastCharInStack === '[' && s[i] === ']') {
        result = true;
      } else if (lastCharInStack === '{' && s[i] === '}') {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  }

  return stack.length ? false : result;
};
