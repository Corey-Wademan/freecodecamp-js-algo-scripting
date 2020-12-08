function translatePigLatin(str) {
    const consonant = /[bcdfghjklmnpqrstvwxyz]/gymi;
    const vowel = /[aeiou]/mi;
    const conMatch = str.match(consonant);
    const vowMatch = str.match(vowel);
  
      if(!str.match(vowel)) {
        return str + 'ay'
      }
      else if(conMatch) {
        return str
          .split('')
          .splice(conMatch.length)
          .concat(conMatch)
          .join('')
          .concat('ay')
      }
      else if(vowMatch) {
        return str + 'way'
      }
  }
  