// Codesmith: CSX
// Date: 10.18.2023
// Name: Onelio Viera
// Subject: Part 2 - Challenge: fizzbuzz

const fb = [];

// Write a for loop that pushes the integers 1 through 16 to fb.
for (let i = 1; i <= 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push("fizzbuzz");

    // Divisible only by 3 push "fizz"
  } else if (i % 3 === 0) {
    fb.push("fizz");

    // If divisible by 5, push "buzz"
  } else if (i % 5 === 0) {
    fb.push("buzz");

    // In the final else case, push the value i to fb.
  } else {
    fb.push(i);
  }
}

  console.log(fb);

