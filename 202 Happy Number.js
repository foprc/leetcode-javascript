/**
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by
 * the sum of the squares of its digits, and repeat the process
 * until the number equals 1 (where it will stay), or it loops
 * endlessly in a cycle which does not include 1. Those numbers
 * for which this process ends in 1 are happy numbers.
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字
 * 的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不
 * 到 1。如果可以变为 1，那么这个数就是快乐数。
 */

/**
 * Example:
 * Input: 19
 * Output: true
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  if (n === null) {
    return false
  }

  let val = n
  let hash = {}

  while (!hash[val]) {
    if (val === 1) {
      return true
    }

    hash[val] = true

    let sarr = [...val.toString()]
    let total = 0

    for (let i = 0; i < sarr.length; i++) {
      total += parseInt(sarr[i], 10) ** 2
    }

    val = total
  }

  return false
}

console.log(isHappy(19))
