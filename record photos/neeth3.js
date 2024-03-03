// const editButton = document.getElementById("edit-button");
// const saveButton = document.getElementById("save-button");
// const formInputs = document.querySelectorAll(".profile-form input, .profile-form textarea");


document
.querySelector("form")
.addEventListener("submit", function (event) {

  // event.preventDefault();
  var fname = document.getElementById("first-name").value.trim();
  var lname = document.getElementById("last-name").value.trim();

  var emailInput = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone").value;
  var address = document.getElementById("address").value.trim();
  var postal = document.getElementById("postal-code").value.trim();
 

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
      emailInput,"email-error",undefined,"This field is required."
    ) && isValid;
  
    isValid=validateField(
      phoneNumber,"phone-error",undefined,"This field is required."
    ) && isValid;
  
   
  
    isValid=validateField(
      address,"address-error",undefined,"This field is required."
    ) && isValid;
  
    isValid=validateField(
      postal,"postal-error",undefined,"This field is required."
    ) && isValid;
  
    // Validation for email
    console.log(emailInput);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        document.getElementById("email-error").innerText = "Invalid email format.";
        isValid = false;
    }

    // Validation for phone number
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phoneNumber)) {
        document.getElementById("phone-error").innerText = "Invalid phone number format (e.g., 123-456-7890).";
        isValid = false;
    }

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



document.getElementById(errorId).innerText = "";
return true;
}

function resetErrorMessages() {
var errorElements = document.querySelectorAll(".error-message");
errorElements.forEach(function (element) {
element.innerText = "";
});
}