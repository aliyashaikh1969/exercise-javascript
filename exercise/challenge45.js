console.log('challenge 45');

const second =(second)=>{
    let sec = (second % 60);
    let min = Math.floor(second / (60)% 60)
    let hour = Math.floor(second / (60 * 60))
    
    return  String(hour).padStart(2,"0")+ ":" +
            String(min).padStart(2,"0") + ":" +
            String(sec).padStart(2,"0")

}


console.log(second(3661))