/**
 * Write a function that takes an unsigned integer and
 * returnsthe number of '1' bits it has (also known as
 * the Hamming weight).
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位
 * 数为 ‘1’ 的个数（也被称为汉明重量）。
 */

/**
 * Example 1:
 * Input: 11
 * Output: 3
 * Explanation: Integer 11 has binary representation
 * 00000000000000000000000000001011
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => (n.toString(2).match(/1/gm) ? n.toString(2).match(/1/gm).length : 0)

console.log(hammingWeight(11))
