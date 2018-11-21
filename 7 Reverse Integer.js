/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 */

/**
 * Example:
 * Input: 123
 * Output: 321
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let str
  if (x > 0) {
    str = [...x.toString()]
      .reverse()
      .join('')
      .replace(/^0{1,}/, '')
  } else if (x < 0) {
    str = `-${[...Math.abs(x).toString()]
      .reverse()
      .join('')
      .replace(/^0{1,}/, '')}`
  } else {
    return 0
  }
  if (str.length > 11) {
    return 0
  } else if (Math.abs(parseInt(str, 10)) > 2147483648) {
    return 0
  }
  return parseInt(str, 10)
}

console.log(reverse(123))
