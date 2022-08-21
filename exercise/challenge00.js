console.log("challenge0000")
  

let array = [1 ,5,8,3,7,21]


// console.log(array.indexOf(9)==-1)


const findMissingNumber = (nums)=>{
    let mis = []
    let count = Math.max(...nums)
    for (let i = 1; i <= count; i++) {
        if(nums.indexOf(i) == -1) {
            mis.push(i)
        }       
    }
    return mis
}
console.log(findMissingNumber([1,2,4,3,5,7,8,9,10,11,4,20,25,26,28,24,29,30,12,13,14,15,18,19,50]))
// let array = [1,2,4,3,5,7,8,9,10,11,4,20,25,26,28,24,29,30,12,13,14,15,17,18,19,]
console.log(Math.max(...array));