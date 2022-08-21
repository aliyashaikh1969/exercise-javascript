console.log("challenge000");


let moveZerosToEnd = (nums) => {
   let zeros = nums.filter(element => element <= 0);
   let numbers = nums.filter(elem => elem > 0);

   return numbers.concat(zeros);
}

console.log(moveZerosToEnd([1, 5, 0, 7, 9, 0, 4, 3, 0]));
console.log(moveZerosToEnd([224, 34, 0, 7, 9, 0, 4, 0, 0]));
console.log(moveZerosToEnd([11, 5, 0, 0, 9, 0, 4, 3, 0]));
console.log(moveZerosToEnd([1, 2, 34, 57, 0, 9, 0, 4, 3, 0]));

const zero = (array) => {
   return [...array.filter(i => i !== 0),
      ...array.filter(i => i == 0)
   ]
}
console.log(zero([1, 5, 0, 7, 9, 0, 4, 3, 0]));
console.log(zero([224, 34, 0, 7, 9, 0, 4, 0, 0]));