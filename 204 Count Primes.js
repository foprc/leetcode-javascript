/**
 * Count the number of prime numbers less than a non-negative number, n.
 * 统计所有小于非负整数 n 的质数的数量。
 */

/**
 * Example:
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  let res = 0
  const isPrime = (num) => {
    let numSqrt
    if (num === 2 || num === 3) {
      return true
    }
    if (num % 6 !== 1 && num % 6 !== 5) {
      return false
    }
    numSqrt = Math.floor(Math.sqrt(num))

    for (let i = 5; i <= numSqrt; i += 6) {
      if ((num % i === 0) | (num % (i + 2) === 0)) {
        return false
      }
    }
    return true
  }

  if (n <= 2) {
    return 0
  }
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      res += 1
    }
  }

  return res
}

console.log(countPrimes(10))
