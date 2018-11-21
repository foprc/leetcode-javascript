/**
 * International Morse Code defines a standard encoding where each
 * letter is mapped to a series of dots and dashes, as follows: "a"
 * maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
 * 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的
 * 字符串， 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。
 */

/**
 * Example:
 * Input: words = ["gin", "zen", "gig", "msg"]
 * Output: 2
 * Explanation:
 * The transformation of each word is:
 * "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 * "msg" -> "--...--."
 * There are 2 different transformations, "--...-." and "--...--.".
 */

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  let morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ]
  let wordTable = {
    a: morse[0],
    b: morse[1],
    c: morse[2],
    d: morse[3],
    e: morse[4],
    f: morse[5],
    g: morse[6],
    h: morse[7],
    i: morse[8],
    j: morse[9],
    k: morse[10],
    l: morse[11],
    m: morse[12],
    n: morse[13],
    o: morse[14],
    p: morse[15],
    q: morse[16],
    r: morse[17],
    s: morse[18],
    t: morse[19],
    u: morse[20],
    v: morse[21],
    w: morse[22],
    x: morse[23],
    y: morse[24],
    z: morse[25],
  }

  let res = {}
  words.forEach((word) => {
    let wordArr = [...word]
    let str = ''
    wordArr.forEach((char) => {
      str += wordTable[char]
    })
    res[str] = 1
  })
  return Object.keys(res).length
}

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']))
