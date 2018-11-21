/**
 * Given a sorted array nums, remove the duplicates in-place such that
 * each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by
 * modifying the input array in-place with O(1) extra memory.
 */

/**
 * Example:
 * Given nums = [1,1,2],
 * Your function should return length = 2, with the first two elements
 * of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the returned length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let pointer = {}

  const test = (index) => {
    if (index <= nums.length) {
      if (pointer[nums[index]] === undefined) {
        pointer[nums[index]] = true
        test(index + 1)
      } else {
        nums.splice(index, 1)
        test(index)
      }
    }
  }

  test(0)
  return nums.length
}

console.log(removeDuplicates([1, 1, 2]))
