/**
 * Given a string containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

/**
 * Example:
 * Input: "()[]{}"
 * Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let _s = s
  while (/\(\)|\[\]|\{\}/g.test(s)) {
    _s = _s.replace(/\(\)|\[\]|\{\}/g, '')
  }
  return !s.length
}

console.log(isValid('()[]{}'))
