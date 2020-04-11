// jshint esversion: 7
//Req. 3b ========================
let arrAvg = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(arrAvg([6, 2, 4]));
console.log(arrAvg([2, 3, 5, 7, 9]));
//Req. 3c ========================
let arrMax = arr => {
  let currentMaximum = -Infinity;
  arr.forEach(function(arr) {
    if (arr > currentMaximum) {
      currentMaximum = arr;
    }
  });
  return currentMaximum;
};

console.log(arrMax([2, 3, 5, 7, 9]));
console.log(arrMax([6, 2, 4]));
//Req. 3d ========================
let arr = [1, 2, 3, 4, 5];

let sumEvens = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};

console.log(sumEvens(arr));
