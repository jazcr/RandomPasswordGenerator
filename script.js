// Assignment Code
var generateBtn = document.querySelector("#generate");

constconst lowerLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ranNum = "0123456789";
const specialChar = "!@#$%^&*<>?_+";




// Write password to the #password input

const passLength = function() => {
  const passLength = promp("Choose length of password (between 8 and 128 characters).");
  const ranLowerLet =promp("")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var getRandomlowerLetter = window.prompt ("Length of password? (Between 8 and 128 characers)");
