/**
 * Given a string, you need to reverse the order of characters
 * in each word within a sentence while still preserving whitespace
 * and initial word order.
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词
 * 的初始顺序。
 */

/**
 * Example:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  let pre = s.split(' ')
  pre = pre.map((word) => [...word].reverse().join(''))
  return pre.join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))
