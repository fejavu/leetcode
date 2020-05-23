/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  return simplifyPathSolu_one(path);
};

let simplifyPathSolu_one = function(path) {
  let res = '/';
  let dirStack = [];
  let dirSet = new Set(['..', '.', '']);

  path.split('/').forEach(item => {
    if((item=='..') && dirStack.length>0) {
      dirStack.pop(item);
    }else if(!dirSet.has(item)) {
      dirStack.push(item);
    }
  });

  res = res+dirStack.join('/');
  return res;
}

// @lc code=end