
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

