// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// If a word begins with a vowel, just add "way" at the end.

// ex.  'california' should return "aliforniacay" | "algorithm" should return "algorithmway" | "schwartz" should return "artzschway"


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
  
