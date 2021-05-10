
var generateBtn = document.querySelector("#generate");
var passLength;
var getLowerLtr;
var getUpperLtr;
var getRanNum;
var userChoices;

const ranFunction = {

length: passLength,
lower: getLowerLtr,
upper: getUpperLtr,
number: getRanNum,
symbol: getSpecChar
}


//Generating lowercase letters
function getLowerLtr(lower) {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);  
}


//Generating upercase letters
function getUpperLtr(upper) {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


//Generating random numbers

function getRanNum(num) {;
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


//Generating random symbol
function getSpecChar(symbols) {
	const spec = ["!","@","#","$","%","^","&","*","_","+","=","?","<",">",];
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
  userChoices = lower.concat(upper, num, symbols);
  }


  // 3 out of 4 criteria chosen
  else if ( getLowerLtr && getUpperLtr && getSpecChar ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getUpperLtr, getSpecChar);
  }

  else if ( getLowerLtr && getUpperLtr && getRanNum) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getUpperLtr, getRanNum)
  }

  else if ( getUpperLtr && getRanNum && getSpecChar) {
    var upper = getUpperLtr();
    userChoices = upper.concat(getRanNum, getSpecChar);
  }


  // 2 out of 4 criteria chosen
  else if ( getLowerLtr && getUpperLtr ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getUpperLtr)
  }
  else if ( getLowerLtr && getRanNum ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getRanNum)
  }
  else if ( getLowerLtr && getSpecChar ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getSpecChar)
  }
  else if ( getUpperLtr && getRanNum ) {
    var lower = getLowerLtr();
    userChoices = lower.concat(getRanNum)
  }
  else if ( getUpperLtr && getSpecChar ) {
    var upper = getUpperLtr();
    userChoices = upper.concat(getSpecChar)
  }
  else if ( getRanNum && getSpecChar ) {
    var num = getRanNum();
    userChoices = num.concat(getSpecChar)
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

var password = [];

for (var i = 0; i < passLength; i++) {
  var userInput = userChoices[Math.floor(Math.random() * userChoices.length)];
  password.push(userInput);

}

