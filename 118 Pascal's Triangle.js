/**
 * Given a non-negative integer numRows, generate the
 * first numRows of Pascal's triangle.
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
 */

/**
 * Example:
 * Input: 5
 * Output:
 *[
 *     [1],
 *    [1,1],
 *   [1,2,1],
 *  [1,3,3,1],
 * [1,4,6,4,1]
 *]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  let res = [[1], [1, 1]]
  if (numRows === 0) {
    return []
  } else if (numRows === 1) {
    return [[1]]
  } else if (numRows === 2) {
    return [[1], [1, 1]]
  }

  for (let i = 1; i <= numRows - 2; i++) {
    let add = []
    add[0] = 1
    for (let j = 1; j < res[i].length; j++) {
      add[j] = res[i][j] + res[i][j - 1]
    }
    add.push(1)
    res.push(add)
  }

  return res
}

console.log(generate(5))
