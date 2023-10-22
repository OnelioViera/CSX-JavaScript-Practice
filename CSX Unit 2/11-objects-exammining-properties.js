// Codesmith: CSX
// Date: 10.22.2023
// Name: Onelio Viera
// Subject: Part 2 - Objects - Examining Properties

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE
// Use a for...in loop to iterate over the checkObj object and check if it contains the property foundNum
for (let key in checkObj) {
  if (key === "foundNum") {
    found = 1;
    break; // break out of loop once foundNum is found
  }
}

console.log(found);