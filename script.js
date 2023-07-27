//Assignment Code//
let generateBtn = document.querySelector("#generate");


//Arrays that will be used for this password generator//
let lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '=', '_']
let builtArray = [];


//Function for generating the password//
function generatePassword() {

  //Setting global variables//
  let password = "";
  let passwordLength = prompt("How long do you want the password? Choose a number between 8 and 128");
  
  //This is the exception if the user selects password length that is not within the allowed parameters - this needs to be here or it won't prompt again right away//
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must pick a number from 8 to 128 for the length of your password!! Click Regenerate Password Again")
    return;
  }
  //Setting more Global variables//
    //Prompts are set as variables to make the code easier to read//
  let lowerCaseQuestion = confirm("Do you want your password to include lowercase letters?");
  let upperCaseQuestion = confirm("Do you want your password to include uppercase letters?");
  let numberQuestion = confirm("Do you want your password to include numbers?");
  let specialCharactersQuestion = confirm("Do you want your password to include special characters (i.e. `! # $ % ?`");
  
  
  //Conditionals for when the user confirms a prompt for which characters to include in the password//  
  if (lowerCaseQuestion) {
    builtArray = [...builtArray, ...lowerCaseAlphabet]
  }
  
  if (upperCaseQuestion) {
    builtArray = [...builtArray, ...upperCaseAlphabet];
    
  }
  
  if (numberQuestion) {
    builtArray = [...builtArray, ...numbers];
    
  }
  
  if (specialCharactersQuestion){
    builtArray = [...builtArray,...specialCharacters]
  }

  //Conditional for when the user does not select any characters to be included in the password//
    //They will need to hit Generate Password again//
  if (builtArray.length === 0) {
    alert("You must select at least one character type!! Click Regenerate Password!")
    return;
  }

  //For Loop so that we can generate a random characters for the password based on its length//
  for (let i = 0; i < passwordLength; i++) {
    let generateLetterIndex = builtArray[Math.floor(Math.random() * builtArray.length)];
    password += generateLetterIndex;

  }
  
//Finally this returns the password after it is generated//
  return password
  
};

// Writing the password to the #password input//
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  //Conditional if the password is undefined (if user chooses no characters to be included)//
  if (password === undefined){
    return
  }

  //Prints out the password in the dialogue box//
  passwordText.value = password;

};

//Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);
