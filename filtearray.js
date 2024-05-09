/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let narr =[];
    let n = arr.length;
     for(let i=0;i<n;i++){
         if(fn(arr[i],i)){
            narr.push(arr[i])
         }
     }
     return narr;
};


// var filter = function(arr, fn) {
//     let narr =[];
//     let n = arr.length;
//      for(let i=0;i<n;i++){
//          if(fn(arr[i],i)){
//             arr[i]=arr[i])
//          }
//          else{
//             arr.shift()

//          }
//      }
//      return narr;
// };