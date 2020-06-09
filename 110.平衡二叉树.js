/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

import { match } from "assert";

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
 * @return {boolean}
 */
var isBalanced = function(root) {
  // return isBalancedSolu_one(root);
  return isBalancedSolu_two(root);
};

function isBalancedSolu_one (node) {
  if(!node) return true;

  const left = dfs(node.left);
  const right = dfs(node.right);

  if(!left || !right || Math.abs(left - right)>1){
    return false;
  }

  return Math.max(left, right) +1;
}

function isBalancedSolu_two(node) {
  let balanceFlag = true;

  helper(node);
  return balanceFlag;
  
  function helper(node) {
    if(!node) return 0;

    let left = helper(node.left) + 1;
    let right = helper(node.right) + 1;

    if(Math.abs(left - right)>1){
      balanceFlag = false;
    }

    return Math.max(left, right);
  }
}

// @lc code=end

