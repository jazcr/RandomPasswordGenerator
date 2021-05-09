
var generateBtn = document.querySelector("#generate");
var ranSymbol = ["!@#$%^&*_+=?><?"];





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

get.addEventListener("click", function () {
    pw = generatePassword();
    document.querySelector("#password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    // Prompting user input for pass length
    passLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!passLength) {
        alert ("Please enter value between 8 and 128.")
    } else if (passLength < 8 || passLength > 128) {
        passLength = parseInt(prompt("Please enter value between 8 and 128."))
    } else {
        
    }

}

