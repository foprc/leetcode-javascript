/**
 * Given n non-negative integers a1, a2, ..., an ,
 * where each represents a point at coordinate (i, ai). n vertical
 * lines are drawn such that the two endpoints of line i is at (i, ai)
 * and (i, 0). Find two lines, which together with x-axis forms a
 * container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 */

/**
 * Example:
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can
 * contain is 49.
 */

/**
 * @param {number[]} height
 * @return {number}
 */

let maxArea = function (height) {
  let i = 0
  let j = height.length - 1
  let max = 0
  while (i < j) {
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
    if (height[i] >= height[j]) {
      j -= 1
    } else {
      i += 1
    }
  }
  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
