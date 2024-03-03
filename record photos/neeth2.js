const editButton = document.getElementById("edit-button");
const saveButton = document.getElementById("save-button");
const formInputs = document.querySelectorAll(".profile-form input, .profile-form textarea");

editButton.addEventListener("click", () => {
    // Trigger validation before allowing editing
    if (validateProfile()) {
        formInputs.forEach(input => input.removeAttribute("disabled"));
        saveButton.style.display = "block";
        editButton.style.display = "none";
    }
});

function validateProfile() {
    let isValid = true;
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    // Reset previous error messages
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(element => {
        element.innerText = "";
    });

    // Validation for email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById("email-error").innerText = "Invalid email format.";
        isValid = false;
    }

    // Validation for phone number
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phoneInput.value)) {
        document.getElementById("phone-error").innerText = "Invalid phone number format (e.g., 123-456-7890).";
        isValid = false;
    }

    return isValid;
}