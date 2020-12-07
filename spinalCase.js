function spinalCase(str) {
    str.toLowerCase();
    const regex = /\s|_|[A-Z]/gm;
    
    for (let x=0; x < str.length; x++) {
        if (str[x] === regex) {
           return str[x] === '-'
        }
    }
    return str
}  
  console.log(spinalCase('This Is Spinal Tap'));