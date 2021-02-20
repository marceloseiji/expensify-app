//Object destructuring
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisher = "None" } = book.publisher;

// console.log(`The publisher is ${publisher}`);

//Array destructuring
const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
