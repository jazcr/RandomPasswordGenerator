
var generateBtn = document.querySelector("#generate");
var passLength;
var getLowerLtr;
var getUpperLtr;
var getRanNum;
var getSpecChar = ["!@#$%^&*_+=?><?"];
var userChoices;



// //Generating lowercase letters
function getLowerLtr() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  getLowerLtr = lower;
}


//Generating upercase letters
function getUpperLtr() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  getUpperLtr = upper;
}


//Generating random numbers

function getRanNum() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  getRanNum = num;
}


//Generating randomsymbol
function getSpecChar() {
	const symbols = '!@#$%^&*_+=?<>'
	return symbols[Math.floor(Math.random() * symbols.length)];
  getSpecChar = symbols;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// get.addEventListener("click", () => {
//     pw = generatePassword();
//     document.querySelector("#password").placeholder = pw;
// });

// Start function to generate password
function generatePassword() {
    // Prompting user input for pass length
    passLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!passLength) {
        alert ("Please enter value between 8 and 128.")
    } else if (passLength < 8 || passLength > 128) {
        passLength = alert("Invalid input. Please enter a value between 8 and 128.")
    }
      //Prompting user for other password criteria
      else {
       getLowerLtr = confirm("Press 'OK' if you'd like to include LOWERCASE letters. If not, press 'CANCEL'.");
       getUpperLtr = confirm("Press 'OK' if you'd like  to include UPPERCASE letters. If not, press 'CANCEL'.");
       getRanNum = confirm("Press 'OK' if you'd like to include NUMBERS. If not, press 'CANCEL'.");
       getSpecChar = confirm("Press 'OK' if you'd like to include SPECIAL CHARACTERS. If not, press 'CANCEL'.");
    }

};



//Alert if no criteria are chosen
if ( passLength && !getLowerLtr && !getUpperLtr && !getRanNum && !getSpecChar ) {
  userChoices = alert("At least one criteria must be chosen. Please start over.");

} 

// if (getLowerLtr && getUpperLtr && getRanNum && getSpecChar){
//    getLowerLtr.concat(getUpperLtr, getRanNum, getSpecChar);
//passlLength $$ }

