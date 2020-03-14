/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // return reverseWordsSolu_one(s);
  return reverseWordsSolu_two(s);
  // return reverseWordsSolu_three(s);
};

let reverseWordsSolu_one = function(s) {
  let res = '';
  let tempArr = s.match(/\S+/g);

  if(tempArr) {
    tempArr.reverse();
    res = tempArr.join(' ');
  }

  return res;
}

let reverseWordsSolu_two = function(s) {
  let res = '';
  let tempArr = s.split(' ').filter((item) => {
    if(item) {
      return item;
    }
  });
  res = tempArr.reverse().join(' ');
  return res;
}

let reverseWordsSolu_three = function(s) {
  let res = '';
  let tempArr = s.split(' ').reverse();

  tempArr = tempArr.filter(item => {
    if(item) {
      return item;
    }
  });

  tempArr.forEach((element, index) => {
    if(index !== tempArr.length-1) {
      res = res + element+' ';
    } else {
      res = res + element;
    }
  });

  return res;
}

// @lc code=end

