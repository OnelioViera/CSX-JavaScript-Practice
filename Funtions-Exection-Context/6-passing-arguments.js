// Codesmith: CSX
// Date: 10.25.2023
// Name: Onelio Viera
// Subject: Functions and Execution Context  - Challenge: Passing Arguments

const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5); // Pass 5 as an argument to isX1
const two = isX2(3); // Pass 3 as an argument to isX2

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true