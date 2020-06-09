/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
  let res = [];
  let tmpRes = [];
  let level = 0;

  DFS(root, level);
  averageFun(tmpRes);

  return res;

  function DFS(node, level) {
    if(!node) return;

    !tmpRes[level] && (tmpRes[level] = []);
  
    tmpRes[level].push(node.val);

    DFS(node.left, level+1);
    DFS(node.right, level+1);
  }

  function averageFun(array) {
    array.forEach(element => {
      let itemSum = element.reduce((acc, cur) => {
        return acc+cur
      });
      let count = element.length;
      res.push(itemSum / count);
    });
  }
};
// @lc code=end

