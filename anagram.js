//function to check if the two strings are anagram
function checkStringsAnagram(txt1, txt2) {
   // to check string 1 length
    let len1 = txt1.length;
    console.log(len1);
    //to check string 2 length
    let len2 = txt2.length;
    console.log(len2);
   
    // to check if both string 1 an string 2 are in equal length
    if(len1 !== len2){
       console.log('Invalid Input');
    }

    else {
    // to check if the string 1 and string 2 are anagram
    let str1 = txt1.split('').sort().join("");
    console.log(str1);
    let str2 = txt2.split('').sort().join("");
    console.log(str2);
    
    if(str1 == str2){
        console.log("Anagram");
     } else { 
        console.log("Non-Anagram");
     }
    
    }

}

// Inputs for string 1 and string 2
 let firstInput = 'Listen';
 let SecondInput = 'Silent';

 // To call the function to execute
 checkStringsAnagram(firstInput,SecondInput);
 