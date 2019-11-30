// Exerciseercise 2.1
const inputExercise1 = [
  { a: 1, b: 2 },
  { a: 5, b: 8 },
  { a: "aaaa", c: "aaaaa" }
];

const outputExercise1 = inputExercise1.map(item => item.a);
console.log(outputExercise1);

// Exerciseercise 2.2
const inputExercise2 = [1, 2, 3, 4];
const outputExercise2 = inputExercise2.map(item => item * 2);
console.log(outputExercise2);

// Exerciseercise 2.3
const inputExercise3 = [1, 2, 3, 4, 5, 6];
const outputExercise3 = inputExercise3.filter(item => item % 2 == 0);
console.log(outputExercise3);

// Exerciseercise 2.4
const inputExercise4 = [1, 2, 3, 4];
outputExercise4 = inputExercise4.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(outputExercise4);

// Exerciseercise 2.5
const inputExercise5 = [1, 2, 3, 4, 5, 6];
outputExercise5 = inputExercise5
  .filter(item => item % 2 != 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(outputExercise5);

// Exerciseercise 2.6
const inputExercise6 = { who: "Organization", why: "Harmony", how: "Human" };
let outputExercise6 = [];
for (let [key, value] of Object.entries(inputExercise6)) {
  outputExercise6.push({ key: key, value: value });
}
console.log(outputExercise6);

// Exerciseercise 2.7
const inputExercise7 = [
  { name: "animal", age: 3 },
  { name: "human", age: 10 }
];

let newObject = {};
inputExercise7.map(item => (newObject[item.name] = item.age));
console.log(newObject);

// Exerciseercise 2.8
const inputExercise8 = {
  key1: 1,
  key2: "tar",
  key3: [
    { name: "animal", age: 3 },
    { name: "human", age: 10 }
  ]
};

const newList = [];
for (let [key, value] of Object.entries(inputExercise8)) {
  newList.push({ key, value });
}
console.log(newList);
