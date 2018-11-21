/**
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */

/**
 * Example:
 * Input: 121
 * Output: true
 */

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false
  }

  return x === parseInt([...x.toString()].reverse().join(''), 10)
}

console.log(isPalindrome(121))
