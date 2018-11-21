/**
 * Given a List of words, return the words that can be typed
 * using letters of alphabet on only one row's of American
 * keyboard like the image below.
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。
 * 键盘如下图所示。
 * https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/keyboard.png
 */

/**
 * Example 1:
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 */

const checkLine = (line, _words, result) => {
  let flag = true
  console.log(line, _words)
  _words.forEach((char) => {
    if (!line.includes(char.toLowerCase())) {
      flag = false
    }
  })
  if (flag) {
    result.push(_words.join(''))
  }
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  let res = []
  let line1 = [...'qwertyuiop']
  let line2 = [...'asdfghjkl']
  let line3 = [...'zxcvbnm']

  words.forEach((word) => {
    let wordArr = [...word]

    if (line1.includes(wordArr[0].toLowerCase())) {
      checkLine(line1, wordArr, res)
    } else if (line2.includes(wordArr[0].toLowerCase())) {
      checkLine(line2, wordArr, res)
    } else if (line3.includes(wordArr[0].toLowerCase())) {
      checkLine(line3, wordArr, res)
    }
  })

  return res
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']))
