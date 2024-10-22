/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {

//   nums.sort((a,b)=> a-b)
//   for (let i =0 ;i<nums.length;i++){

//     for(let j=i+1;j<nums.length;j++){
       
//         if(nums[i]===nums[j])
//         return true
//     }
    
//   }  
//   return false
// };

//previous one is also correct but the time complexity is very high
//so we can use the set method to solve this problem new

var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b); 
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true; 
    }
  }
  return false; 
}