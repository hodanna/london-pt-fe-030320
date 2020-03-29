
/**
 * create an array "carBrands"
 * and assign to it ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall", "Land Rover"]
 */

 const carBrands = ["Mercedes", "Volvo", "BMW", "Reno","Vauxhall"]

/**
 * Exercise 1
 *
 * remove the last element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */

console.log(carBrands.pop());

/**
 * Exercise 2
 *
 * remove the first element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */

 console.log(carBrands.shift());
/**
 * Exercise 3
 *
 * from "carBrands" remove "Vauxhall"
 *
 * * PS: console.log() the result to see the difference
 */
console.log(carBrands.splice(4,1));
/**
 * Exercise 4
 *
 * in "carBrands" replace BMW with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */

 console.log(carBrands.splice(1,2,"Rolls-Royce" ));
