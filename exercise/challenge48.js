console.log("challenge 48")


const hastagGenerator = (str) =>{
    let tit =  str.trim().split(" ");

    let upper = tit.map(e=>{
       return e.charAt(0).toUpperCase() + e.substr(1);
    }).join('');
    return `#${upper}`

}


console.log(hastagGenerator("   first  hastag"));