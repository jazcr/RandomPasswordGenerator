
var generateBtn = document.querySelector("#generate");
var passLength;
var getLowerLtr;
var getUpperLtr;
var getRanNum;
var getSpecChar = ["!@#$%^&*_+=?><?"];
var userChoices;

const ranFunction = {

length: passLength,
lower: getLowerLtr,
upper: getUpperLtr,
number: getRanNum,
symbol: getSpecChar
}


//Generating lowercase letters
function getLowerLtr() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);  
}


//Generating upercase letters
function getUpperLtr() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


//Generating random numbers

function getRanNum() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


//Generating random symbol
function getSpecChar() {
	const symbols = '!@#$%^&*_+=?<>'
	return String(Math.floor(Math.random() * symbols.length));
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

    // Alert if no criteria are chosen
if ( !getLowerLtr && !getUpperLtr && !getRanNum && !getSpecChar ) {
  userChoices = alert("At least one criteria must be chosen. Please start over.");

} 

  // All criteria chosen
  else if ( getLowerLtr && getUpperLtr && getRanNum && getSpecChar ) {
  userChoices = getLowerLtr.concat(getUpperLtr, getRanNum);
  }


  // 3 out of 4 criteria chosen
  else if ( getLowerLtr && getUpperLtr && getSpecChar ) {
    userChoices = getLowerLtr.concat(getUpperLtr, getSpecChar);
  }

  else if ( getLowerLtr && getUpperLtr && getRanNum) {
    userChoices = getLowerLtr.concat(getUpperLtr, getRanNum)
  }

  else if ( getUpperLtr && getRanNum && getSpecChar) {
    userChoices = getUpperLtr.concat(getRanNum, getSpecChar);
  }


  // 2 out of 4 criteria chosen
  else if ( getLowerLtr && getUpperLtr ) {
    userChoices = getLowerLtr.concat(getUpperLtr)
  }
  else if ( getLowerLtr && getRanNum ) {
    userChoices = getLowerLtr.concat(getRanNum)
  }
  else if ( getLowerLtr && getSpecChar ) {
    userChoices = getLowerLtr.concat(getSpecChar)
  }
  else if ( getUpperLtr && getRanNum ) {
    userChoices = getUpperLtr.concat(getRanNum)
  }
  else if ( getUpperLtr && getSpecChar ) {
    userChoices = getUpperLtr.concat(getSpecChar)
  }
  else if ( getRanNum && getSpecChar ) {
    userChoices = getRanNum.concat(getSpecChar)
  }


  // 1 out of 4 criteria selected
  else if (getLowerLtr) {
    userChoices = getLowerLtr;
  }
  else if (getUpperLtr) {
    userChoices = getUpperLtr;
  }
  else if (getRanNum) {
    userChoices = getRanNum;
  }
  else if (getSpecChar) {
    userChoices = getSpecChar;
  }

};





// if (getLowerLtr && getUpperLtr && getRanNum && getSpecChar){
//    getLowerLtr.concat(getUpperLtr, getRanNum, getSpecChar);
//passlLength $$ }

