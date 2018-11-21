/**
 * A peak element is an element that is greater than its neighbors.
 * Given an input array nums, where nums[i] ≠ nums[i+1], find a
 * peak element and return its index.
 * The array may contain multiple peaks, in that case return the
 * index to any one of the peaks is fine.
 * You may imagine that nums[-1] = nums[n] = -∞.
 * 峰值元素是指其值大于左右相邻值的元素。
 * 给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。
 * 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
 * 你可以假设 nums[-1] = nums[n] = -∞。
 */

/**
 * Example:
 * Input: nums = [1,2,1,3,5,6,4]
 * Output: 1 or 5
 * Explanation: Your function can return either index number 1
 * where the peak element is 2, or index number 5 where the
 * peak element is 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  if (nums.length === 1) {
    return 0
  }
  if (nums[0] > nums[1]) {
    return 0
  }
  for (let i = 1, l = nums.length - 1; i < l; i++) {
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
      return i
    }
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1
  }

  return 0
}

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
