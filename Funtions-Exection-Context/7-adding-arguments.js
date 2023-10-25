// Codesmith: CSX
// Date: 10.25.2023
// Name: Onelio Viera
// Subject: Functions and Execution Context  - Challenge: Functions - Adding Arguments

// Declare a global variable 'x' with the value 23
const x = 23;

// Define a function 'isX' that takes a 'num' argument
function isX(num) {
  // Declare a local variable 'x' with the value 44
  const x = 44;
  // Return 'true' if 'num' is equal to the local variable 'x'
  return num === x;
}

// Define a function 'isY' that takes a 'num' argument
function isY(num) {
  // Return 'true' if 'num' is equal to the global variable 'x'
  return num === x;
}

// Call the 'isX' function with the argument '44' and store the result in 'one'
const one = isX(44);

// Call the 'isY' function with the argument '23' and store the result in 'two'
const two = isY(23);

// Uncomment these lines to check the results
console.log(one); // should log: true
console.log(two); // should log: true
