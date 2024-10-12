//Function initiated
function printOddNumber(number){
    // for loop defined for checking numbers from 1 to 25
    for (let i = 1; i<=number; i++){
    // if condition to check if the number is odd
    if (i%2 != 0){
        // print statement to print odd number
        console.log(i);
    }
}

}

//calling the function
let result = printOddNumber(25);

