/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

//  TWO TEST CASE PASSED
// var reduce = function(nums, fn, init) {
//     let size = nums.length
//     let a = init
//     let result
//     for(let i = 0 ;i< size;i++){
//          result = fn(a,nums[i])
//          a = result;
//     }
//     return result;
//     };

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let size = nums.length;
  let a = init;
  let result;
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      result = fn(a, nums[i]);
      a = result;
    }
  } else {
    result = init;
  }

  return result;
};
