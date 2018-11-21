/**
 * Example:
 * Input: "UD"
 * Output: true
 * Explanation: The robot moves up once, and then down once.
 * All moves have the same magnitude, so it ended up at the
 * origin where it started. Therefore, we return true.
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
let judgeCircle = function (moves) {
  let x = 0
  let y = 0
  let movesArr = [...moves]
  const maps = {
    R: () => {
      x += 1
    },
    L: () => {
      x -= 1
    },
    U: () => {
      y += 1
    },
    D: () => {
      y -= 1
    },
  }
  movesArr.forEach((move) => {
    maps[move]()
  })
  if (x === 0 && y === 0) {
    return true
  }
  return false
}

console.log(judgeCircle('UD'))
