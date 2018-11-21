/**
 * Reverse bits of a given 32 bits unsigned integer.
 * 颠倒给定的 32 位无符号整数的二进制位。
 */

/**
 * Example:
 * Input: 43261596
 * Output: 964176192
 * Explanation: 43261596 represented in
 * binary as 00000010100101000001111010011100,
 * return 964176192 represented in
 * binary as 00111001011110000010100101000000.
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  /**
   * @param {string} n
   * @returns
   */
  const padNumber = (num, fill) => {
    const len = num.length
    return Array(fill > len ? fill - len + 1 || 0 : 0).join(0) + num
  }

  const source = padNumber(n.toString(2), 32)
  const target = [...source].reverse().join('')
  return parseInt(target, 2)
}

console.log(reverseBits(43261596))
