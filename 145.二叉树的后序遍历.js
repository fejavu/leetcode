/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let result = [];
  let tempStack = [root];
  
  while(tempStack.length > 0) {
    let curNode = tempStack.pop();
    if(curNode) {
      result.push(curNode.val);
      tempStack.push(curNode.left);
      tempStack.push(curNode.right);
    }
  }
  return result.reverse();
};
// @lc code=end

