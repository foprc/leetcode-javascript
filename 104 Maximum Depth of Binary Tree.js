/**
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the
 * longest path from the root node down to the
 * farthest leaf node.
 * Note: A leaf is a node with no children.
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 */

/**
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
 *    3
 *  / \
 * 9  20
 *   /  \
 *  15   7
 * return its depth = 3.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const TreeNode = (val, left = null, right = null) => {
  this.val = val
  this.left = left
  this.right = right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (root === null) {
    return 0
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))
