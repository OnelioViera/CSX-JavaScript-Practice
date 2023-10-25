// Codesmith: CSX
// Date: 10.24.2023
// Name: Onelio Viera
// Subject: Part 2 - Objects - Evaluating Keys

const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
// us a for... in loop to iterate over sumMe
for (let key in sumMe) {
  if (typeof sumMe[key] === 'number') {
    total += sumMe[key];
  }
}

console.log(total);
