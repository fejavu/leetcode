/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  return checkInclusionSolu_one(s1, s2);
};

let checkInclusionSolu_one = function(s1, s2) {
  let len1 = s1.length;
  let len2 = s2.length;
  
  if(len1>len2) return false;
  
  let strArrOne = new Array(26);
  let strArrTwo = new Array(26);
  strArrOne.fill(0);
  strArrTwo.fill(0);
  
  for(let i=0; i<len1; i++) {
    strArrOne[s1[i].charCodeAt() - 97]++;
    strArrTwo[s2[i].charCodeAt() - 97]++;
  }
  
  for(let j=len1; j<len2; j++) {
    if(isEqual(strArrOne, strArrTwo)) {
      return true;
    } else {
      strArrTwo[s2[j-len1].charCodeAt() - 97]--;
      strArrTwo[s2[j].charCodeAt() - 97]++;
    }
  }
  
  return isEqual(strArrOne, strArrTwo);
  
  function isEqual(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false
    } else {
      for(let i=0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false
      }
      
      return true;
    }
  };
}

// @lc code=end

