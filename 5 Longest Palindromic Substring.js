/**
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */

/**
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 */

/**
 *
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {string}
 */
const check = (s, left, right) => {
  let _left = left
  let _right = right
  while (_left >= 0 && _right < s.length && s[_left] === s[_right]) {
    _left -= 1
    _right += 1
  }

  return s.substring(left + 1, right)
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s === null || s.length === 0) {
    return ''
  }

  let result = ''

  const len = 2 * s.length - 1
  let left
  let right

  for (let i = 0; i < len; i++) {
    left = parseInt(i / 2, 10)
    right = left
    if (i % 2 === 1) {
      right += 1
    }

    let str = check(s, left, right)

    if (str.length > result.length) {
      result = str
    }
  }
  return result
}

console.log(longestPalindrome('babad'))
