//how to make new array

const car = new Array();

car.push("Saab");
car.push("Volvo");
car.push("Seltos");

//[ 'Saab', 'Volvo', 'Seltos' ]

const cars =["Saab","Wagnor","BMW","Volvo"];

// To push new items in string we use .push(item_name)

cars.push("Creta")

//pop() - pops the last message from the array

cars.pop();
cars.pop();

console.log(cars);

//[ 'Saab', 'Wagnor', 'BMW' ]

//at() - returns index

const index = car.at(2)
console.log(index);

//concat()-join two arrays
const b = car.concat(cars);
console.log(b);

//IMPORTANT Methods 

//map(),//filter(),reduce()

//find() - method returns the value

const ages = [3, 15,25 , 28];

function checkAge(age) {
  return age > 18;
}

const c = ages.find(checkAge);

console.log(c);

//We can sort array of number by using this 
//array_name.sort(function(a, b){return a - b});
// Sort the Array
let s=ages.sort(function(a, b){return a - b});
console.log(s);

// Reverse the array
let r=ages.reverse();
console.log(r);

let a=car.shift();
console.log(a);
//shift() - The shift() method returns the shifted element.

//slice()- give all the element present between indexes
///slice(start-index,end-index);
const x = ages.slice(1, 4);
console.log(x);

//
