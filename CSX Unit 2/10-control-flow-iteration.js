// Codesmith: CSX
// Date: 10.18.2023
// Name: Onelio Viera
// Subject: Part 2 - Control Flow and Iteration

// Write a for loop that iterates over a string and logs its values.
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

// Write a for loop that iterates over an array and logs if its values are even.
for (let i = 0; i < timesTenIfOverFive.length; i++) {
    if (timesTenIfOverFive[i] > 5) {
    timesTenIfOverFive[i] *= 10;
  }
}

console.log(timesTenIfOverFive);


