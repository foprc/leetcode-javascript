/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the
 * array, and it should return false if every element is distinct.
 * 给定一个整数数组，判断是否存在重复元素。如果任何值在数组中出现至少两次，函数返回 true。
 * 如果数组中每个元素都不相同，则返回 false。
 */

/**
 * Example:
 * Input: [1,2,3,1]
 * Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => nums.length !== [...new Set(nums)].length

console.log(containsDuplicate([1, 2, 3, 1]))
