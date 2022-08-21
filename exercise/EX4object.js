console.log("hello");


let library = [
    {
        title: "The Road Ahead",
        author: "Bill gates",
        readingStatus: true
    },
    {
        title: "Steve jobs",
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
// console.log(typeof(library))
for (let i = 0; i < library.length; i++) {
    let book = library[i].title +" by "+ library[i].author + ".";
    if (library[i].readingStatus) {
        console.log(book)
    } else {
        // console.log("You still needed to read "+ library[i].title)
        console.log("You still needed to read "+ book)
    }

}


