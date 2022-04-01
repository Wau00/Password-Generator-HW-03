// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = prompt("How many characters your password will have? (Minimum 8 characters).")
  if (passLength < 8) {
    alert("Your password must be minimum of 8 characters.");
  } else if (passLength > 128) {
    alert("Oh, I forgot! Your password must not exceed the 128 characters.");   
   }  else {
        return "Your new password will appear here";
  }    
 
 
 
 
 
 
 
  }


