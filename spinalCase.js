// Converts a string to lowercase then places '-' between each word that are orginally seperated by underscores, spaces, or capital letters.
// ----------Tests-----------
// "This Is Spinal Tap" --> "this-is-spinal-tap"
// "TheAndyGriffith_Show" --> "the-andy-griffith-show"
// "AllThe-small Things" --> "all-the-small-things"




function spinalCase(str) {    
    const regex = /\s|_|(?=[A-Z])/gm;
    return str 
      .split(regex)
      .join("-")
      .toLowerCase();
};
