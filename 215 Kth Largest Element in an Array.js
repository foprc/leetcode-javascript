/**
 * Find the kth largest element in an unsorted array.
 * Note that it is the kth largest element in the sorted order,
 * not the kth distinct element.
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的
 * 第 k 个最大的元素，而不是第 k 个不同的元素。
 */

/**
 * Example:
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = (nums, k) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let temp = 0
      if (nums[i] <= nums[j]) {
        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums[k - 1]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
