/**
 * We are given the head node root of a binary tree, where
 * additionally every node's value is either a 0 or a 1.
 * Return the same tree where every subtree (of the given tree)
 * not containing a 1 has been removed.
 * Recall that the subtree of a node X is X, plus every node
 * that is a descendant of X.
 * 给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。
 * 返回移除了所有不包含 1 的子树的原二叉树。
 * 节点 X 的子树为 X 本身，以及所有 X 的后代。
 */

/**
 * Example 1:
 * Input: [1,null,0,0,1]
 * Output: [1,null,0,null,1]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const pruneTree = (root) => {
  if (root === null) {
    return null
  }
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)

  if (root.left === null && root.right === null && root.val === 0) {
    return null
  }

  return root
}
