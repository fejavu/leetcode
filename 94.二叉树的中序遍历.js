/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  let result = [];
  let tempStack = [];
  let curNode = root;

  while(curNode !== null || tempStack.length > 0 ) {
    while(curNode !== null)  {
      tempStack.push(curNode);
      curNode = curNode.left;
    }

    curNode = tempStack.pop();
    result.push(curNode.val);
    curNode = curNode.right;
  }
  return result;
};
// @lc code=end

