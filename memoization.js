
function memoize(fn) {
    let cacheValue =[]
    return function(...args) {
      if(args in cacheValue){
        return cacheValue[args]
      }
      else{
        cacheValue[args] = fn(...args)
        return cacheValue[args]
      }
       
    }
}

// memoizener function that is used to cache the value if the vaalue that is 
//called already called once then it is shown from the array