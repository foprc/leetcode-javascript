/**
 * Given an array nums of n integers where n > 1,
 * return an array output such that output[i] is
 * equal to the product of all the elements of
 * nums except nums[i].
 * 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组
 * output ，其中 output[i] 等于 nums 中除 nums[i] 之
 * 外其余各元素的乘积。
 */

/**
 * Example:
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function (nums) {
  let result = [1]
  let curr = 1
  for (let i = 0, l = nums.length; i < l - 1; i++) {
    result.push(nums[i] * curr)
    curr *= nums[i]
  }
  curr = 1
  for (let j = nums.length - 1; j > 0; j--) {
    curr *= nums[j]
    result[j - 1] *= curr
  }
  return result
}

console.log(productExceptSelf([1, 2, 3, 4]))
