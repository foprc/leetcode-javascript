/**
 * Write a function to find the longest common prefix string
 * amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

/**
 * Example:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let minWord = strs.reduce((a, b) => (a.length < b.length ? a : b), 0)

  let res = []
  function test(len) {
    if (len <= minWord.length) {
      const arr = []
      strs.forEach((str) => {
        arr.push(str.charAt(len))
      })
      if ([...new Set(arr)].length === 1) {
        res.push(arr[0])
        test(len + 1)
      }
    }
  }
  test(0)
  return res.join('')
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
