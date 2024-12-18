const number = ["1", "2", "3", "4"];

/*const one=number[0]
const tow=number[1]
const three=number[2]
const four=number[3]

console.log(one,tow,three,four); */

const [one, two, three, four, five = "5"] = number;
console.log(number);

const obj = {
  names: "john",
  age: 29,
  adress: {
    city: "kpm",
    state: "Tamil Nadu",
  },
};

// console.log(obj.names);
// console.log(obj.age);
// console.log(obj.adress.city);
// console.log(obj.adress.state);

const {
  names,
  age1,
  adress: { city, state },
} = obj;
console.log(names, age1, city, state);

const shop = [
  { name: "john", age: 29, clg: "SSARS" },

  { name: "dhoni", age: 43, clg: "SRM" },
];

// console.log(shop[0].name,shop[0].age,shop[0].clg);
// console.log(shop[1].name,shop[1].age,shop[1].clg)
const [{ name, age, clg }] = shop;
console.log(name, age, clg);

const objArry = {
  name1: "csk",
  cup: 4,
  cp: "msd",
  plyr: ["RR", "Mi", "csk"],
};
const {
  name1,
  cup,
  cp,
  plyr: [ss, HR, ru],
} = objArry;
console.log(name1, cup, cp, ss, HR, ru);

const id = 1;
const pizha = "formhouse";

const orderTwo = {
  id,
  pizha,
};
console.log(orderTwo);

const arr = [1, 2, 3];
console.log(arr);
console.log(...arr);
const arr1 = [4, 5, 6];
const arr2 = [7, 8, 9];
const arr3 = [...arr, ...arr1, ...arr2];
console.log(arr3);
console.log(...arr3);

function text(...c) {
  let evan = [];
  for (let i = 0; i < city.length; i++) {
    if (c[i] % 2 === 0) {
      evan.push(c[i]);
    }
  }
  return evan;
}
console.log(text(12, 13, 14, 15, 16));
