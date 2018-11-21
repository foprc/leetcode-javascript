/**
 * Write a function that takes a string as input and
 * returns the string reversed.
 * 编写一个函数，其作用是将输入的字符串反转过来。
 */

/**
 * Example 1:
 * Input: "hello"
 * Output: "olleh"
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => [...s].reverse().join('')

console.log(reverseString('hello'))
