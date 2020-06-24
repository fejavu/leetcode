/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
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
var invertTree = function(root) {
  if(!root) {
    return null;
  }

  let temp = null;

  function invertHelper(node) {
    if(node && !node.visited) {
      node.visited = true;
      temp = node.left;
      node.left = node.right;
      node.right = temp;

      invertHelper(node.left);
      invertHelper(node.right);
    }
  }

  invertHelper(root);
  return root;
};

// @lc code=end

