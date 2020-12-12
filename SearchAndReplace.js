// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".

function myReplace(str, before, after) {
    const index = str.indexOf(before);

    if (str[index] === str[index].toUpperCase()) {
        return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1))
    } else {
        return str.replace(before, after.charAt(0).toLowerCase() + after.slice(1))
    }
    
  }
