/**
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more
 * than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the
 * majority element always exist in the array.
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现
 * 次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 */

/**
 * Example:
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let f = {}
  let res
  nums.forEach((num) => {
    if (f[num] === undefined) {
      f[num] = 1
    } else {
      f[num] += 1
    }
  })
  Object.values(f).forEach((val, index) => {
    if (val > nums.length / 2) {
      res = Object.keys(f)[index]
    }
  })
  return parseInt(res, 10)
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
