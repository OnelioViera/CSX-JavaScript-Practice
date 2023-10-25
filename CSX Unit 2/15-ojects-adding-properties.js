// Codesmith: CSX
// Date: 10.24.2023
// Name: Onelio Viera
// Subject: Part 2 - Objects - Adding Properties

// const possibleIterable = [4, 3, 9, 23]; // An array is an object
// const divByThree = {}; // An object is an object

// for (let i = 0; i < possibleIterable.length; i++) {
//   const element = possibleIterable[i];
//   if (element % 3 === 0) {
//     divByThree[element] = i;
//   }
// }

// console.log(divByThree);

const possibleIterable = [4, 3, 9, 6, 23]; // An array is an object
const divByThree = {}; // An object is an object
// ADD CODE HERE
// iterate over possibleIterable using a for loop
for (let i = 0; i < possibleIterable.length; i++) {
    //determine if current element is divisible by 3
    if (possibleIterable[i] % 3 === 0) {
      // if so, assign new key-value pair to divByThree
      // key is current element, value is current index
      divByThree[possibleIterable[i]] = i;
    }
}

console.log(divByThree);