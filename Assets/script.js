// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of lowercase letters
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var lowerCaseSplit = lowerCase.split("");
// Array of UPPERCASE letters
var passUppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passUppCaseSplit = passUppCase.split("");
// Array of Numbers
var passNumCase = "0123456789";
var passNumCaseSplit = passNumCase.split("");
// Array of Symbols
var passSymCase ="!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var passSymCaseSplit = passSymCase.split("");

// Password Requirements (Prompts / Confirms )
var manyCharacters = "How many characters your password will have? (Minimum 8 characters)."
var placeholder= "Your new password will appear here"
var wantLowerCase = "Do you want to add lowerCase letters?"
var wantUpperCase = "Do you want to add UpperCase letters?"
var wantSymbols = "Do you want to add Special Characters?"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var passwordValue = [];
  var randomPass = "";
  var passCharacters = prompt(manyCharacters);
  
  // First Requirement 
  if (passCharacters < 8) {
      alert("Your password must be minimum of 8 characters.");
        return placeholder;
  } else if (passCharacters > 128) {
        alert("Oh, I forgot! Your password must not exceed the 128 characters.");  
          return placeholder; 
  
  } else if (passCharacters === null){
       return placeholder;
  }    
  
  // Second Requirement
    var passLower = confirm(wantLowerCase); 
      if(passLower===true) {
        for (var i =0; i < lowerCaseSplit.length; i++) {
          passwordValue.push(lowerCaseSplit[i]);
    }
    
  }

  // Third Requirement
  var passUpper = confirm(wantUpperCase);
    if (passUpper===true) {
      for (var i=0; i < passUppCaseSplit.length; i++){
        passwordValue.push(passUppCaseSplit[i]);
    }
      
  }
  // Fourth Requirement
  var passSymbols = confirm(wantSymbols);
    if (passSymbols ===true) {
      for (var i=0; i < passSymCaseSplit.length; i++){
        passwordValue.push(passSymCaseSplit[i]);
   }
      
 }
 
 // Sum all Values and Generate a Random Password
 for (var i=0; i < passCharacters; i++){
   passwordValue[Math.floor(Math.random() * passwordValue.length)];
   randomPass +=
    passwordValue [Math.floor(Math.random() * passwordValue.length)];
 }
 return randomPass
}
 
 
 
  


