/**
 * Given a positive integer, output its complement number.
 * The complement strategy is to flip the bits of its binary
 * representation.
 * 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
 */

/**
 * Example:
 * Input: 5
 * Output: 2
 * Explanation: The binary representation of 5 is 101 (no
 * leading zero bits), and its complement is 010. So you
 * need to output 2.
 */

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) =>
  parseInt([...num.toString(2)].map((val) => (parseInt(val, 10) === 0 ? 1 : 0)).join(''), 2)

console.log(findComplement(5))
