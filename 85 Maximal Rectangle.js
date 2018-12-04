/**
 * Given a 2D binary matrix filled with 0's and 1's,
 * find the largest rectangle containing only 1's and return its area.
 * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 */

/**
 * Example:
 * Input:
 * [
 *   ["1","0","1","0","0"],
 *   ["1","0","1","1","1"],
 *   ["1","1","1","1","1"],
 *   ["1","0","0","1","0"]
 * ]
 * Output: 6
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = (matrix) => {
  if (matrix.length <= 0 || matrix[0].length <= 0) {
    return 0
  }
  let area = 0
  let row = matrix.length
  let col = matrix[0].length
  let height = new Array(col).fill(0)
  let left = new Array(col).fill(0)
  let right = new Array(col).fill(col)

  for (let i = 0; i < row; ++i) {
    let currLeft = 0
    let currRight = col

    for (let j = 0; j < col; ++j) {
      if (matrix[i][j] === '1') {
        height[j] += 1
        left[j] = Math.max(left[j], currLeft)
      } else {
        height[j] = 0
        left[j] = 0
        currLeft = j + 1
      }
    }

    for (let j = col - 1; j >= 0; --j) {
      console.log('down:', j)
      if (matrix[i][j] === '1') {
        right[j] = Math.min(right[j], currRight)
      } else {
        right[j] = col
        currRight = j
      }
      area = Math.max(area, (right[j] - left[j]) * height[j])
    }
  }

  return area
}

console.log(maximalRectangle([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]))
