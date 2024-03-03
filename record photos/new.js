
document
.querySelector("form")
.addEventListener("submit", function (event) {

  // event.preventDefault();
  var fname = document.getElementById("fname").value.trim();
  var lname = document.getElementById("lname").value.trim();
  var country = document.getElementById("country").value;
  var cardtype = document.getElementById("cardtype").value;
  var cname = document.getElementById("cardnumber").value.trim();
  var cvname = document.getElementById("cvv").value.trim();
  var c1name = document.getElementById("c1name").value.trim();
  var edate = document.getElementById("edate").value.trim();

  // // Reset previous error messages
  resetErrorMessages();

  // Validate each field
 
  var isValid = true;
  
    isValid=validateField(
      fname,"fname-error",undefined,"This field is required."
    ) && isValid;
  
    isValid=validateField(
      lname,"lname-error",undefined,"This field is required."
    ) && isValid;
  
    isValid=validateField(
      country,"country-error",undefined,"This field is required."
    ) && isValid;
  
    isValid=validateField(
      cardtype,"cardtype-error",undefined,"This field is required."
    ) && isValid;
  
    isValid=validateField(
      cname,"cname-error",16,"Card number should be 16 characters long."
    ) && isValid;
  
    isValid=validateField(
      cvname,"cvname-error",undefined,"This field is required."
    ) && isValid;
  
    isValid=validateField(
      c1name,"c1name-error",undefined,"This field is required."
    ) && isValid;
  
    isValid=validateField(
      edate,"edate-error",undefined,"This field is required."
    ) && isValid;

  // Prevent form submission if validation fails
  if (!isValid) {
    event.preventDefault();
  }
});


function validateField(value, errorId, maxLength, errorMessage) {
if (value === "") {
document.getElementById(errorId).innerText = errorMessage;
return false;
}

if (maxLength && value.length !== maxLength) {
document.getElementById(errorId).innerText = errorMessage;
return false;
}

// Clear the error message if the validation passes
document.getElementById(errorId).innerText = "";
return true;
}

function resetErrorMessages() {
var errorElements = document.querySelectorAll(".error-message");
errorElements.forEach(function (element) {
element.innerText = "";
});
}