//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?
//
//https://projecteuler.net/problem=3
'use strict';

//test to determine if a number is prime
function isPrime(num) {
    var i,
        m = Math.sqrt(num); // sqaure root of number to test
    if (num < 2) { return false; } // numbers less than 2 are not prime

    // starting at 3, check if every odd number
    // less than the square root of the number to be tested
    // is a factor of that number
    for (i = 3; i < m; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    // the number is prime if none of those numbers are a factor
    return true;
}

function largestPrimeFactorOf(num) {
    var i,
        m = Math.sqrt(num),
        primeFactorArr = [];

    for (i = 3; i < m; i += 2) {
        if (isPrime(i) && num % i === 0) {
            primeFactorArr.push(i);
        }
    }
    return primeFactorArr.pop();
}

console.log(largestPrimeFactorOf(600851475143));
