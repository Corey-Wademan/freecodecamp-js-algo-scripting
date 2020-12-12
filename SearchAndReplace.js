function myReplace(str, before, after) {
    const index = str.indexOf(before);

    if (str[index] === str[index].toUpperCase()) {
        return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1))
    } else {
        return str.replace(before, after.charAt(0).toLowerCase() + after.slice(1))
    }
    
  }