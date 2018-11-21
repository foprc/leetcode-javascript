/**
 * Given a non-empty array of integers, every element appears
 * twice except for one. Find that single one.
 * Note: Your algorithm should have a linear runtime complexity.
 * Could you implement it without using extra memory?
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 找出那个只出现了一次的元素。
 * 说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 */

/**
 * Example:
 * Input: [4,1,2,1,2]
 * Output: 4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
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
    if (val === 1) {
      res = Object.keys(f)[index]
    }
  })
  return parseInt(res, 10)
}

console.log(singleNumber([4, 1, 2, 1, 2]))
