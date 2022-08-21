console.log("exercise 64");

function phraseParser(phrase){
    let chara = phrase.length;
    let words = phrase.split(" ").length;
    let line = phrase.split('\n').length;

    let result = `characteres : ${chara}, words : ${words}, lines : ${line}`
    return result;
}

console.log(phraseParser("once upon a time"))
console.log(phraseParser("happily ever after"))
console.log(phraseParser("true courage is in facing danger \n when you are afraid"))