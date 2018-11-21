/**
 * The Hamming distance between two integers is the number
 * of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 注意：0 ≤ x, y < 231.
 */

/**
 * Example:
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * The above arrows point to positions where the corresponding
 * bits are different.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let sx = x.toString(2)
  let sy = y.toString(2)
  let res = 0
  if (sx.length !== sy.length) {
    let d = Math.abs(sx.length - sy.length)
    if (sx.length > sy.length) {
      sy = [...sy]
      for (let i = 0; i < d; i++) {
        sy.unshift('0')
      }
      sy = sy.join('')
    } else {
      sx = [...sx]
      for (let i = 0; i < d; i++) {
        sx.unshift('0')
      }
      sx = sx.join('')
    }
  }

  for (let i = 0; i < sx.length; i++) {
    if (sx[i] !== sy[i]) {
      res += 1
    }
  }

  return res
}

console.log(hammingDistance(1, 4))
