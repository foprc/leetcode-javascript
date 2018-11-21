/**
 * Given a matrix of m x n elements (m rows, n columns),
 * return all elements of the matrix in spiral order.
 *
 */

/**
 * Example 1:
 * nput:
 * [
 *   [ 1, 2, 3 ],
 *   [ 4, 5, 6 ],
 *   [ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  if (matrix.length === 0) return []
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  let result = []
  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j])
    }
    top += 1
    if (top > bottom) {
      break
    }
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right -= 1
    if (right < left) {
      break
    }
    for (let j = right; j >= left; j--) {
      result.push(matrix[bottom][j])
    }
    bottom -= 1
    if (bottom < top) {
      break
    }
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left += 1
    if (left > right) {
      break
    }
  }
  return result
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
