/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
  let res = 0;

  let dfs = function(node) {
    if(!node) return 0;

    let leftVal = dfs(node.left);
    let rightVal = dfs(node.right);

    res += Math.abs(leftVal - rightVal);
    return node.val + leftVal + rightVal;
  }

  dfs(root);

  return res;
};
// @lc code=end

