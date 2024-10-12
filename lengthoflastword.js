
// **** Function  to find the length of the last word
function findLastWordLength(str) {
    // Split the string into words using space
    let afterSplit = str.split(' ');
    console.log("After Splitting:" + " " + afterSplit); // print statement
    
    // To find last word using length -1
    let lastWord = afterSplit[afterSplit.length-1];
    console.log("Last Word:" + " " + lastWord); // print statement
    
    // To calculate the length of the last word
    let lengthOfLastWord = lastWord.length;
    console.log("Length of last word:" + " " + lengthOfLastWord); // print statement
    
  }
  
  // Input for the function
  let text = "Sunday Fun Day and Holiday";
  
  //calling the function to execute
  findLastWordLength(text);