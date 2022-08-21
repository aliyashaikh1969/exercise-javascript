console.log("rotate");
var element = document.getElementById('rotate');
var textNode = element.childNodes[0];

// console.log(textNode)
var text = textNode.data;
// console.log(text)

setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
    // console.log(text);
}, 100);



// setInterval(rotate , 1000)
// rotate()

// console.log(text)
// console.log(rtext)
// console.log(elem)