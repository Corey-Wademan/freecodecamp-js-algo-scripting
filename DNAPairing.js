function pairElement(str) {
    const splitArr = str.split('');
    const dnaArr = [];
  
    splitArr.map((strand) => {
      if (strand === 'C') {
        dnaArr.push([strand, "G"])
      }
      else if (strand === 'G') {
        dnaArr.push([strand, "C"])
      }
      else if (strand === 'A') {
        dnaArr.push([strand, "T"])
      }
      else if (strand === 'T') {
        dnaArr.push([strand, "A"])
      }
    })
    return dnaArr
  }
  