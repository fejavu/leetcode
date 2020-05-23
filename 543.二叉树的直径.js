/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let diameter = 0;

  depthFirstSearch(root);

  return diameter;

  function depthFirstSearch(node) {
    if(!node) return 0;

    const left = depthFirstSearch(node.left);
    const right = depthFirstSearch(node.right);

    diameter = Math.max(diameter, left + right);
    return (1 + Math.max(left, right));
  }
};


// @lc code=end

