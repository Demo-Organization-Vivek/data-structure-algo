const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a=fruits.reverse();

console.log(a);


//Logic of reverse function

const ar = [1, 2, 3, 4]

const reverse = function (arr) {


    let x = arr, len = x.length-1;

        for(i=0; i<x.length/2;i++) {

          x[i]+=x[len-i];
          x[len-i]=x[i]-x[len-i];
          x[i]-=x[len-i]


        }
return x;   
};

const reversedArray = reverse(ar);
console.log(reversedArray);