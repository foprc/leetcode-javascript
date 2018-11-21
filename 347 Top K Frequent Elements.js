/**
 * Given a non-empty array of integers, return the k most frequent elements.
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 */

/**
 * For example,
 * Given [1,1,1,2,2,3] and k = 2, return [1,2].
 * Note: You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n),
 * where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const ds = {}
  const ds2 = {}
  for (let i = 0; i < nums.length; i++) {
    if (ds[nums[i]] === undefined) {
      ds[nums[i]] = {
        value: nums[i],
        count: 0,
      }
    }
    ds[nums[i]].count += 1
  }
  Object.values(ds).forEach((o) => {
    if (ds2[o.count] === undefined) {
      ds2[o.count] = []
    }
    ds2[o.count].push(o.value)
  })
  let res = []
  Object.values(ds2).forEach((o) => {
    res = res.concat(o)
  })
  res.reverse()
  return res.slice(0, k)
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
