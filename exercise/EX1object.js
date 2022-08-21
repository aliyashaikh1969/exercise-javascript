let obj = {
    fruit: "mango",
    flower: "rose",
    animal: "lion"
}

for (let key in obj) {
    console.log(obj[key]);

}

let someArray = ["foo","bar","baz"];
someArray.forEach((item) => {
    console.log(item);
})



// delete a property from an aobject
delete obj.flower;
console.log(obj)


// get a length of an object

let student={
    name:"aliya",
    class:"15",
    rollno : 85
};

//only key of an object
let size = Object.keys(student);
console.log(size)

//lenght of an object
let length = size.length;
console.log(length)

//       OR
console.log(Object.values(student).length)



const  array = [15,15,10].map(parseInt);
console.log(array)