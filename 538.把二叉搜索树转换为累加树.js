/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
var convertBST = function(root) {
  
  let sum = 0;
  
  function trans(node) {
    if(node === null) return;
    
    trans(node.right);
    
    node.val += sum;
    sum = node.val;

    trans(node.left)
  }

  trans(root);
  return root;
};
// @lc code=end

