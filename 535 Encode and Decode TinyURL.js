/**
 * TinyURL is a URL shortening service where you enter a URL such
 * as https://leetcode.com/problems/design-tinyurl and it returns
 * a short URL such as http://tinyurl.com/4e9iAk.
 * Design the encode and decode methods for the TinyURL service.
 * There is no restriction on how your encode/decode algorithm
 * should work. You just need to ensure that a URL can be encoded
 * to a tiny URL and the tiny URL can be decoded to the original URL.
 * TinyURL是一种URL简化服务， 比如：当你输入一个URL
 * https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL
 * http://tinyurl.com/4e9iAk.
 * 要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解
 * 密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，
 * 并且这个TinyURL可以用解密方法恢复成原本的URL。
 */

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
const base = []
const i = 0

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = (longUrl) => {
  base[i] = longUrl
  return `http://tinyurl.com/${i++}`
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
let decode = function (shortUrl) {
  return base[shortUrl.replace('http://tinyurl.com/', '')]
}

console.log(encode('https://leetcode.com/problems/design-tinyurl'))
console.log(decode('http://tinyurl.com/0'))
