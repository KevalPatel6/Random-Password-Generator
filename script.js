// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '=', '_']
let builtArray = [];



function generatePassword() {
  
  let passwordLength = prompt("How long do you want the password? Choose a number between 8 and 128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must pick a number from 8 to 128 for the length of your password!! Click Regenerate Password Again")
    return;
  }

  let lowerCaseQuestion = confirm("Do you want your password to contain lowercase letters?")
  let upperCaseQuestion = confirm("Do you want your password to contain uppercase letters?")
  let numberQuestion = confirm("Do you want your password to contain numbers?")
  
  let password = "";
  
  if (lowerCaseQuestion) {
    builtArray = [...builtArray, ...lowerCaseAlphabet]
  }
  
  if (upperCaseQuestion) {
    builtArray = [...builtArray, ...upperCaseAlphabet];
    
  }
  
  if (numberQuestion) {
    builtArray = [...builtArray, ...numbers];
    
  }
  
  
  if (builtArray.length === 0) {
    alert("You must select at least one character type!! Click Regenerate Password!")
    return;
  }



  for (let i = 0; i < passwordLength; i++) {
    let generateLetterIndex = builtArray[Math.floor(Math.random() * builtArray.length)];
    password += generateLetterIndex;

  }
  
  
  return password
  
};

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  if (password === undefined){
    return
  }

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
