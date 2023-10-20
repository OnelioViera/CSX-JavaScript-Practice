// Codesmith: CSX
// Date: 10.18.2023
// Name: Onelio Viera
// Subject: Part 2 - Control Flow - if statement

// Write an if statement that evaluates the expression condition and if it is truthy, console.log() the string 'It was true!'.
const num = 40;
// const num = 50;
let final;

// Write an if statement to check num is > than 100. If num is > 100, reassign the value of final to null. Otherwise, set final to be two times the value of num.
if (num > 100) {
  final = null;

} else {
  final = num * 2;
}

// console.log(final); // 80
console.log(final);