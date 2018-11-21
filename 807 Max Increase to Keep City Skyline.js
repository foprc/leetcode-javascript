/**
 * Example:
 * Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
 * Output: 35
 * Explanation:
 * The grid is:
 * [ [3, 0, 8, 4],
 *  [2, 4, 5, 7],
 *  [9, 2, 6, 3],
 *  [0, 3, 1, 0] ]
 * The skyline viewed from top or bottom is: [9, 4, 8, 7]
 * The skyline viewed from left or right is: [8, 7, 9, 3]
 * The grid after increasing the height of buildings without
 * affecting skylines is:
 * gridNew = [ [8, 4, 8, 7],
 *            [7, 4, 7, 7],
 *            [9, 4, 8, 7],
 *            [3, 3, 3, 3] ]
 */

const getMaxOfArray = (numArray) => Math.max.apply(null, numArray)
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = (grid) => {
  let res = 0
  const rowMaxArr = []
  const columnMaxArr = []
  grid.forEach((row, rindex) => {
    rowMaxArr.push(getMaxOfArray(row))
    const column = []
    for (let i = 0; i < grid.length; i++) {
      column.push(grid[i][rindex])
    }
    columnMaxArr.push(getMaxOfArray(column))
  })
  grid.forEach((row, rindex) => {
    row.forEach((c, cindex) => {
      const cpNum = Math.min(rowMaxArr[rindex], columnMaxArr[cindex])
      const target = grid[rindex][cindex]
      if (cpNum > target) {
        res += cpNum - target
      }
    })
  })

  return res
}

console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]))
