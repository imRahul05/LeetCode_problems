
var removeElement = function(nums, val) {
    let x=0
    for (let a=0;a<nums.length;a++){
        if(nums[a]!==val){
        nums[x]= nums[a]
        x++
        }
    }
    return x

}


