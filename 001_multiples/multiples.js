/* If we list all the natural numbers below 10 that are multiples
   of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 
   Find the sum of all the multiples of 3 or 5 below 1000. */


function multipleOf(limit) {
    'use strict';
    var i,
        arr = [];
    for (i = 1; i < limit; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

var answer = multipleOf(1000).reduce(function (a, b) {
    return a + b;
});

console.log(answer);