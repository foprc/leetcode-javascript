/**
 * Given a string containing just the characters '(' and ')',
 * find the length of the longest valid (well-formed) parentheses substring.
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 */

/**
 * Example 1:
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 */

/**
 *
 * @param {array} arr
 * @param {number} i
 * @param {number} deta
 * @param {number} end
 * @param {string} char
 * @return {number}
 */
const isValid = (arr, i, deta, end, char) => {
  let max = 0
  let sum = 0
  let currentLen = 0
  let validLen = 0
  for (i; i !== end; i += deta) {
    sum += arr[i] === char ? 1 : -1
    currentLen += 1
    if (sum < 0) {
      max = max > validLen ? max : validLen
      sum = 0
      currentLen = 0
      validLen = 0
    } else if (sum === 0) {
      validLen = currentLen
    }
  }
  return max > validLen ? max : validLen
}

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  let parenthes = [...s]
  return Math.max(
    isValid(parenthes, 0, 1, parenthes.length, '('),
    isValid(parenthes, parenthes.length - 1, -1, -1, ')'),
  )
}

console.log(longestValidParentheses(')()())'))
