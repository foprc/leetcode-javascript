/**
 * Given two binary trees and imagine that when you put one of them
 * to cover the other, some nodes of the two trees are overlapped
 * while the others are not.
 * You need to merge them into a new binary tree. The merge rule is
 * that if two nodes overlap, then sum node values up as the new
 * value of the merged node. Otherwise, the NOT null node will be
 * used as the node of new tree.
 * 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点
 * 便会重叠。
 * 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的
 * 值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。
 */

/**
 * Example:
 * Input:
 * Tree 1                     Tree 2
 *          1                         2
 *         / \                       / \
 *        3   2                     1   3
 *       /                           \   \
 *      5                             4   7
 * Output:
 * Merged tree:
 *      3
 *     / \
 *    4   5
 *   / \   \
 *  5   4   7
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
  let root

  if (t1 && t2) {
    root = new TreeNode(t1.val + t2.val)
    root.left = mergeTrees(t1.left, t2.left)
    root.right = mergeTrees(t1.right, t2.right)
  } else {
    root = t1 || t2
  }

  return root
}
