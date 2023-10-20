// Codesmith: CSX
// Date: 10.18.2023
// Name: Onelio Viera
// Subject: Part 2 - For Loops and Array Indices

const firstNames = ["Jon", "Arya", "Jamie"]; // 0, 1, 2 
const lastNames = ["Snow", "Stark", "Lannister"]; // 0, 1, 2
const places = ["The Wall", "Winterfell", "Kings Landing"]; // 0, 1, 2

// create an empty array called bios
const bios = []; 

// loop through the firstNames array
for (let i = 0; i < firstNames.length; i++) { // i = 0, 1, 2

  // create a variable called personBio that stores a string in a template literal
  const personBio = `My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`;

  // push the string into the bios array
  bios.push(personBio); 
} 

// console.log(bios); // [ 'My name is Jon Snow and I am from The Wall', 'My name is Arya Stark and I am from Winterfell', 'My name is Jamie Lannister and I am from Kings Landing' ]
console.log(bios); 

