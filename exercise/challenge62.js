console.log("challenge 62")



const sumOfMultiple = (nums) => {
    let array = [...Array(nums).keys()].filter(num=>(num%3 && num%5)).reduce((a,b)=> a+b);

    return array
}

console.log(sumOfMultiple(15))
