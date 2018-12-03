/**
 * Given an unsorted array of integers, find the length of
 * longest increasing subsequence.
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 */

/**
 * Example:
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101],
 * therefore the length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let lengthOfLIS = function (nums) {
  let res = 0
  let numsLength = nums.length
  let lenHelper = new Array(numsLength).fill(1)

  for (let i = 0; i < numsLength; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lenHelper[i] = Math.max(lenHelper[i], lenHelper[j] + 1)
      }
    }
  }
  lenHelper.forEach((len) => {
    res = Math.max(len, res)
  })
  return res
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 4])) // output 3
