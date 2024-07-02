/*
input: an array and another function
goal: iterate through each element of array and invoke function for said element
algorithm:
  - from 0 up to length of arr - 1, for each index:
    - invoke function and pass in array[index] as argument to it
  - return undefined
*/


function myForEach(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    func(array[index], index, array);
  }
}

let min = Infinity;
let max = -Infinity;

[4, 5, 12, 23, 3].forEach(value => {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
});

console.log(min, max);           // 3 23