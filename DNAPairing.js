// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


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
  
