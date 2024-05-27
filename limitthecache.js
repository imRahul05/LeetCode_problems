// var TimeLimitedCache = function() {
    
// };

// /** 
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration time until expiration in ms
//  * @return {boolean} if un-expired key already existed
//  */
// TimeLimitedCache.prototype.set = function(key, value, duration) {
    
// };

// /** 
//  * @param {number} key
//  * @return {number} value associated with key
//  */
// TimeLimitedCache.prototype.get = function(key) {
    
// };

// /** 
//  * @return {number} count of non-expired keys
//  */
// TimeLimitedCache.prototype.count = function() {
    
// };

// /**
//  * const timeLimitedCache = new TimeLimitedCache()
//  * timeLimitedCache.set(1, 42, 1000); // false
//  * timeLimitedCache.get(1) // 42
//  * timeLimitedCache.count() // 1
//  */

class TimeLimitedCache{
    constructor(){
        this.cache = new Map()
    }
     
    set(key,value,duration){
        
       const alreadyexist = this.cache.get(key)
       if(alreadyexist){
        clearTimeout(alreadyexist.timeoutid)
       } 

       const timeoutid =   setTimeout(()=>{
           this.cache.delete(key)
         },duration)

        this.cache.set(key,{value,timeoutid})
        return Boolean(alreadyexist)
    } 

    get(key){
        if(this.cache.has(key)){
            return this.cache.get(key).value
        }
        return -1
    }

    count(){
        return this.cache.size;
    }

}