/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const helper = (result, node, level, left, right) => {
  if (node === null) {
    return
  }
  let index = (left + right) / 2
  result[level][index] = `${node.val}`
  helper(result, node.left, level + 1, left, index - 1)
  helper(result, node.right, level + 1, index + 1, right)
}

const getHeight = (node) => {
  if (node === null) {
    return 0
  }
  return Math.max(1 + getHeight(node.left), 1 + getHeight(node.right))
}

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
const printTree = (root) => {
  let height = getHeight(root)
  let size = 2 ** height - 1
  let result = []
  for (let i = 0; i < height; i++) {
    const list = []
    for (let j = 0; j < size; j++) {
      list.push('')
    }
    result.push(list)
  }
  helper(result, root, 0, 0, size - 1)
  return result
}

console.log(printTree())
