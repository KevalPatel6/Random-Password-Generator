// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ["!", "#", "$", "%", "&", ""];
//Still need to add special character//

//Default is lowercaseAlphabet
let builtArray = [];
// let upperCaseQuestion = confirm("Do you want your password to contain uppercase letters?");
// let numberQuestion = confirm("Do you want your password to contain numbers?");


function generatePassword () {
//Why does this only run and then stop without asking the prompt "How long do you want the password"//
  let passwordLength = prompt("How long do you want the password? Choose a number between 8 and 128");
  let lowerCaseQuestion = confirm("Do you want your password to contain lowercase letters?") 
  let upperCaseQuestion = confirm("Do you want your password to contain uppercase letters?")
  let numberQuestion = confirm("Do you want your password to contain numbers?")
  let password = "";
  
  if (lowerCaseQuestion){
      builtArray = [...builtArray,...lowerCaseAlphabet]
      }

  if(upperCaseQuestion){
      builtArray = [...builtArray, ...upperCaseAlphabet];

  }
  
  if(numberQuestion){
      builtArray = [...builtArray, ...numbers];

  }

  



//Need an exception if user chooses no for all 
if (lowerCaseQuestion=== false && upperCaseQuestion === false && numberQuestion === false){
    alert("You must select at least one character type!! Click Regenerate Password!")
    generatePassword();
}

if (passwordLength < 8 || passwordLength > 128){
  alert("You must pick a number from 8 to 128 for the length of your password!! Click Regenerate Password Again")
  generatePassword();
}
    

//Question: if I set the built Array's default as lowercase alphabet instead of blank would that make this code cleaner above//
//yes




  for (let i = 0; i< passwordLength; i++){
    let generateLetterIndex = builtArray[Math.floor(Math.random()*builtArray.length)];
    password += generateLetterIndex;
    // password += 

  // }
  //build a string based off aof randomly selected values from an array



 
}
 return password

};

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
