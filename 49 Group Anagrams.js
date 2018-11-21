/**
 * Given an array of strings, group anagrams together.
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，
 * 但排列不同的字符串。
 */

/**
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  let res = {}
  strs.forEach((str) => {
    let target = [...str]
    target.sort()
    if (res[target] === undefined) {
      res[target] = []
    }
    res[target].push(str)
  })

  return Object.values(res)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
