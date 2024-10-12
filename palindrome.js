// Initializing and Declaring String
let orginalString = "11211211211";

// Function for reversing a string
function reverseoriginalString(txt){
    return txt.split("").reverse().join("");
    
}

//Calling the function for reverse string and storing it ina variable
let reversedString = reverseoriginalString(orginalString);

// Printing original and reversed string
console.log(`Original: ${orginalString}`);
console.log(`Reversed: ${reversedString}`);

//if condition to check if it is palindrome
if(orginalString === reversedString){
    console.log(`Both Orginal and Reversed String are Palindrome`);
}
else{
    console.log(`Orginal and Reversed String aren't Palindrome`);
}









