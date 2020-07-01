/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let result = [];
  let tempStack = [];

  if(root) tempStack.push(root);
  while(tempStack.length > 0) {
    let curNode = tempStack.pop();
    result.push(curNode.val);

    if(curNode.right) tempStack.push(curNode.right);
    if(curNode.left) tempStack.push(curNode.left);
  }
  return result;
};
// @lc code=end

