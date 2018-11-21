/**
 * Given an array with n objects colored red, white or blue,
 * sort them in-place so that objects of the same color are
 * adjacent, with the colors in the order red, white and blue.
 * Here, we will use the integers 0, 1, and 2 to represent
 * the color red, white, and blue respectively.
 * Note: You are not suppose to use the library's sort
 * function for this problem.
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，
 * 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 注意: 不能使用代码库中的排序函数来解决这道题。
 */

/**
 * Example:
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] >= nums[j]) {
        let temp = nums[i]
        temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
      }
    }
  }
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
