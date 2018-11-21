/**
 * Given a m x n matrix, if an element is 0, set its entire
 * row and column to 0. Do it in-place.
 * 给定一个 m x n 的矩阵，如果一个元素为 0，
 * 则将其所在行和列的所有元素都设为 0。请使用原地算法。
 */

/**
 * Example:
 * Input:
 * [
 *   [1,1,1],
 *   [1,0,1],
 *   [1,1,1]
 * ]
 * Output:
 * [
 *   [1,0,1],
 *   [0,0,0],
 *   [1,0,1]
 * ]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  let originZeros = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        originZeros.push({ x: j, y: i })
      }
    }
  }
  originZeros.forEach((point) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === point.y) {
          matrix[i][j] = 0
        }
        if (j === point.x) {
          matrix[i][j] = 0
        }
      }
    }
  })
}

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
