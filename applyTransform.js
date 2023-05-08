/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = []
    
    arr.forEach((ele, ind)=>{
        res.push(fn(ele,ind));
    })
    
    return res;
};
/*

Why Use Callbacks
The simple answer is they allow you to write code that can be reused across different use-cases.

Imagine you created an algorithm that sorts an array of numbers. Then you encounter a situation where you want to sort an array of people by their age. One option is to re-write the algorithm to handle arrays of people. However, a far better way is to have this function accept a callback that is expected to return a number. Then you can keep the core algorithm the same, and the user of the function simply passes person => person.age as the 2nd parameter.

Just about any generic algorithm can benefit from accepting callbacks. The standard JavaScript library and many 3rd party packages rely heavily on them. This particular question asks to reimplement the Array.map method, which is one of the most heavily used array methods in JavaScript. However, there are four small differences.

Array.map is a method on the Array prototype. This implementation accepts the array as the 1st argument.
The callback provided to Array.map passes a reference to the original array as the 3rd argument. This implementation's callback only accepts two arguments.
Array.map optionally allows you pass a thisArg as the 2nd parameter. If provided, the passed callback will be bound to that context (assuming the callback isn't an arrow function as they can't be bound).
Array.map is required to handle sparse arrays. For example, if you write code let arr = Array(100); arr[1] = 1;, Array.map will only look at index 1.

*/
