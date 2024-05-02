
var expect = function(val) {
    return {
        toBe: function(a){
            if(val!==a)
             throw new Error("Not Equal")
             else
             return true;
        },
        notToBe: function(a){
            if(val===a)
            throw new Error("Not Equal")
            else
            return true;

        }
    };
    
};


 console.log(expect(5).toBe(5)); // true
 console.log(expect(5).notToBe(5)); // throws "Equal"
 


// var expect = function(val) {
//     return {
//         toBe: function(a){
//             if(val!==a)
//              throw new Error("Not Equal")
//              else
//              return true;
//         },
//         notToBe: function(a){
//             if(val===a)
//             throw new Error("Not Equal")
//             else
//             return true;

//         }
//     };
    
// };
