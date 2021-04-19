/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
console.log("1 - test if greet function works");

function greet(name) {
  // Your code here
  console.log(`2- hello ${name}`);
}

greet("kabochy");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
console.log("3 - test odd or even")
function isOdd(n) {
  // Your code here
  console.log(`4 - you have entered the number ${n} to ask if it's odd..`);

  if(n % 2 === 1){
    console.log(`the number ${n} is Odd`)
  } else{
    console.log(`the number ${n} is Even`)
  }
  console.log(n % 2 ===1);

}


isOdd(17);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
}

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
