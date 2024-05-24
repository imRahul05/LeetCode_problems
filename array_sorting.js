// Explanation
// Function Signature:

// sortBy(arr, fn) takes an array arr and a function fn.
// arr: The array to be sorted.

// fn: A function that takes an element of arr and returns a value to sort by.

// Sorting Logic:
// arr.sort((x, y) => fn(x) - fn(y)): This sorts the array in-place.

// The sort function compares two elements, x and y, by applying fn to both
// and subtracting the result of fn(y) from fn(x).

// If the result is negative, x comes before y.

// If the result is positive, x comes after y.

// If the result is zero, x and y are considered equal.

// Return Value:

// The sorted array is returned. -->

// Code
// /**
//  * @param {Array} arr
//  * @param {Function} fn
//  * @return {Array}
//  */
var sortBy = function(arr, fn) {
    const sortedArray = arr.sort((x,y)=>fn(x)-fn(y))
    return sortedArray
};