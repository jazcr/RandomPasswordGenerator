
var generateBtn = document.querySelector("#generate");
var passLength;
var hasLowerLtr;
var hasUpperLtr;
var hasRanNum;
var hasSpecChar;
var symbols = ["!","@","#","$","%","^","&","*","_","+","=","?","<",">",];
var getLowerLtr;
var getUpperLtr;
var getRanNum;
var getSpecChar;
var userChoices;


//Generating lowercase letters
function getLowerLtr() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);  
}


//Generating upercase letters
function getUpperLtr() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


//Generating random numbers

function getRanNum() {;
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


//Generating random symbol
function getSpecChar() {
	return String(Math.floor(Math.random() * symbols.length));
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function to generate password
function generatePassword() {


    // Prompting user input for pass length
    passLength = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));
    if (!passLength) {
        alert ("Please enter value between 8 and 128.")
    } else if (passLength < 8 || passLength > 128) {
        passLength = alert("Invalid input. Please enter a value between 8 and 128.")
    }



      //Prompting user for other password criteria
      else {
       hasLowerLtr = confirm("Press 'OK' if you'd like to include LOWERCASE letters. If not, press 'CANCEL'.");
       hasUpperLtr = confirm("Press 'OK' if you'd like  to include UPPERCASE letters. If not, press 'CANCEL'.");
       hasRanNum = confirm("Press 'OK' if you'd like to include NUMBERS. If not, press 'CANCEL'.");
       hasSpecChar = confirm("Press 'OK' if you'd like to include SPECIAL CHARACTERS. If not, press 'CANCEL'.");
    }

    // Alert if no criteria are chosen
if ( !hasLowerLtr && !hasUpperLtr && !hasRanNum && !hasSpecChar ) {
  userChoices = alert("At least one criteria must be chosen. Please start over.");

} 

  // All criteria chosen
  else if ( hasLowerLtr && hasUpperLtr && hasRanNum && hasSpecChar ) {
    lower = getLowerLtr();
    // symbols = getSpecChar();
    userChoices = lower.concat(getUpperLtr, getRanNum, getSpecChar);
  }


  // 3 out of 4 criteria chosen
  else if ( hasLowerLtr && hasUpperLtr && hasSpecChar ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getUpperLtr, getSpecChar);
  }

  else if ( hasLowerLtr && hasUpperLtr && hasRanNum) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getUpperLtr, getRanNum)
  }

  else if ( hasLowerLtr && hasRanNum && hasSpecChar) {
    var upper = getUpperLtr();
    userChoices = upper.concat(getRanNum, getSpecChar);
  }


  // 2 out of 4 criteria chosen
  else if ( hasLowerLtr && hasUpperLtr ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getUpperLtr)
  }
  else if ( hasLowerLtr && hasRanNum ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getRanNum)
  }
  else if ( hasLowerLtr && hasSpecChar ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getSpecChar)
  }
  else if ( hasLowerLtr && hasRanNum ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getRanNum)
  }
  else if ( hasLowerLtr && hasSpecChar ) {
    var upper = getUpperLtr();
    userChoices = upper.concat(getSpecChar)
  }
  else if ( hasLowerLtr && hasSpecChar ) {
    var num = getRanNum();
    userChoices = num.concat(getSpecChar)
  }


  // 1 out of 4 criteria selected
  else if (hasLowerLtr) {
    userChoices = getLowerLtr();
  }
  else if (hasUpperLtr) {
    userChoices = getUpperLtr();
  }
  else if (hasRanNum) {
    userChoices = getRanNum();
  }
  else if (hasSpecChar) {
    userChoices = getSpecChar();
  }

};

// Rendering generated password on the screen
var finalPass = " ";

for (var i = 0; i < passLength; i++) {
  finalPass = userChoices[Math.floor(Math.random() * userChoices.length)];
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
