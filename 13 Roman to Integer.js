/**
 * Roman numerals are represented by seven different
 * symbols: I, V, X, L, C, D and M.
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 */

/**
 * Example:
 * Input: "III"
 * Output: 3
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let sum = 0
  for (let i = 0; i < s.length; i++) {
    const val1 = map[s[i]]
    const val2 = map[s[i + 1]]
    if (val2 > val1) {
      sum = sum + val2 - val1
      i += 1
    } else {
      sum += val1
    }
  }
  return sum
}

console.log(romanToInt('III'))
