// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let builtArray = [];

function generatePassword () {

  let upperCaseQuestion = confirm("Do you want your password to contain uppercase letters?");
  let numberQuestion = confirm("Do you want your password to contain numbers?");
  
  if (upperCaseQuestion === true && numberQuestion === true){
      let builtArray = [...builtArray, lowerCaseAlphabet, upperCaseAlphabet, numbers];
  }
    else if (upperCaseQuestion === false && numbers === true) {
      let builtArray = [...builtArray, lowerCaseAlphabet, numbers];
    }

    else if (upperCaseQuestion ===true && numbers === false) {
      let builtArray = [...builtArray, lowerCaseAlphabet, upperCaseAlphabet]
    }
    else {
      let builtArray = [...builtArray, lowerCaseAlphabet]
    }
//Question: if I set the built Array's default as lowercase alphabet instead of blank would that make this code cleaner above//

  


  let password = "";

  let passwordLength = prompt("How long do you want the password");

  for (let i = 0; i< passwordLength; i++){
    let generateLetterIndex = Math.floor(Math.random()*builtArray.length);
    builtArray[generateLetterIndex];  
    password += generateLetterIndex;

  }
  //build a string based off aof randomly selected values from an array

return password

}



function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
