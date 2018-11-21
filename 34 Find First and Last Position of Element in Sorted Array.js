/**
 * Given an array of integers nums sorted in ascending order,
 * find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。
 * 找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。
 */

/**
 * Example:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let res = [-1, -1]
  if (nums.length === 1 && nums[0] === target) {
    res = [0, 0]
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (res[0] === -1) {
        res[0] = i
      }
      res[1] = i
    }
  }
  return res
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
