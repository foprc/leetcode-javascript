/**
 * Given a string which consists of lowercase or uppercase letters,
 * find the length of the longest palindromes that can be built with
 * those letters.
 * This is case sensitive, for example "Aa" is not considered a
 * palindrome here.
 * note: Assume the length of given string will not exceed 1,010.
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 */

/**
 * Example:
 * Input:"abccccdd"
 * Output:7
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose
 * length is 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  let strArr = [...s]
  let helper = {}
  let res = 0
  let single = 0
  let singleArr = []
  strArr.forEach((char) => {
    if (!helper[char]) {
      helper[char] = 0
    }
    helper[char] += 1
  })
  Object.values(helper).forEach((val) => {
    if (val % 2 === 0) {
      res += val
    } else if ((val - 1) % 2 === 0) {
      if (single < val) {
        single = val
      }
      singleArr.push(val - 1)
    }
  })
  if (singleArr.length > 0) {
    return singleArr.reduce((a, b) => a + b) + res + 1
  }
  return res + single
}

console.log(longestPalindrome('abccccdd'))
