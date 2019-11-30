// Exercise 1
const list = [1, 2, 3, 4, 4, 2, 1, 3];

const newList = list.filter(
  (item, index, self) => self.indexOf(item) === index
);

console.log(newList);
