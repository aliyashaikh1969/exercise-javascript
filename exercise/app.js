
function myFunction(nums) {

    nums.sort((a,b)=> a - b);
    return nums.slice(0,2)
    .reduce((a,b)=> a+b ,0);
}


// console.log(myFunction())
console.log(myFunction([1, 6, 2, 8]));
console.log(myFunction([1, 2, 7, 20 , 11]));
console.log(myFunction([21, 2233, 5432, 99 ]));
console.log(myFunction([2022, 1, 2025, 3100 ]));

