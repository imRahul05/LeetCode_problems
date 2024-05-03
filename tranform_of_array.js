/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for(let i=0;i< arr.length;i++){
     arr[i]=fn(arr[i],i)
    }
    return arr;
};



// instaed of using three  different function ,we use one , because the main thing is the function map ,parameters are array and one function itself which has a body defined in the input ,when we ca;; the fn() with parametrs it is automatically calling the  fn in the main code and the arguments are passed and theer the updation will happen and fn will return accordingly 