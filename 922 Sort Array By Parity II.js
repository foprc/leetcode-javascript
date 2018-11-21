/**
 * Given an array A of non-negative integers, half of the
 * integers in A are odd, and half of the integers are even.
 * Sort the array so that whenever A[i] is odd, i is odd;
 * and whenever A[i] is even, i is even.
 * You may return any answer array that satisfies this condition.
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i]
 * 为偶数时， i 也是偶数。
 * 你可以返回任何满足上述条件的数组作为答案。
 */

/**
 * Example:
 * Input: [4,2,5,7]
 * Output: [4,5,2,7]
 * Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also
 * have been accepted.
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = (A) => {
  let oddIndex = 1
  let evenIndex = 0
  const res = []

  A.forEach((num) => {
    if (num % 2 === 0) {
      res[evenIndex] = num
      evenIndex += 2
    } else {
      res[oddIndex] = num
      oddIndex += 2
    }
  })
  return res
}

console.log(sortArrayByParityII([4, 2, 5, 7]))
