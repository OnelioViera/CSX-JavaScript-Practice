// Codesmith: CSX
// Date: 10.25.2023
// Name: Onelio Viera
// Subject: Functions and Execution Context  - Challenge: Functions - Invoking Functions

let calls = "";

function jerry(str) {
  // concat str with jerry
  str += 'Jerry';
  // return the invocation of kramer method
  return kramer(str);
}

function george(str) {
  // concat str with george
  str += 'George';
  //return the invocation of elaine
  return elaine(str);
}

function elaine(str) {
  // concat str with elaine
  str += 'Elaine'
  // return the str
  return str;
}

function kramer(str) {
  // concat str with kramer
  str += 'Kramer';
  // return the invocation of george 
  return george(str);
}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
