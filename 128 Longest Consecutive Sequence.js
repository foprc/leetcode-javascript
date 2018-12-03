/**
 * Given an unsorted array of integers, find the length
 * of the longest consecutive elements sequence.
 * Your algorithm should run in O(n) complexity.
 * 给定一个未排序的整数数组，找出最长连续序列的长度。
 * 要求算法的时间复杂度为 O(n)。
 */

/**
 * Example:
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence
 * is [1, 2, 3, 4]. Therefore its length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  if (nums.length === 0) {
    return 0
  } else if (nums.length === 1) {
    return 1
  }
  let nArr = []
  let pArr = []
  nums.forEach((num) => {
    if (num >= 0) {
      pArr[num] = num
    } else {
      nArr[Math.abs(num)] = num
    }
  })
  nums = Object.values(nArr)
    .filter((a) => a.toString())
    .reverse()
    .concat(Object.values(pArr).filter((a) => a.toString()))
  nums = [...new Set(nums)]
  let res = 1
  let temp = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i] + 1) {
      temp += 1
      res = Math.max(res, temp)
    } else {
      temp = 1
    }
  }

  return res
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
