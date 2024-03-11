function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email= document.getElementById("email").value;
    var firstNameError = document.getElementById("firstNameError");
    var lastnameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var valid = true;
  
    // Validate firstName
    if (!firstName || firstName === "") {
        firstNameError.textContent = "firstName is required";
        valid = false;
      } else if (!isValidfirstName(firstName)) {
        firstNameError.textContent = "Invalid name";
        valid = false;
      } else {
        firstNameError.textContent = "";
      }
    
       // Validate lastName
    if (!lastName || lastName === "") {
        lastNameError.textContent = "lastName is required";
        valid = false;
      } else if (!isValidlastName(lastName)) {
        lastNameError.textContent = "Invalid name";
        valid = false;
      } else {
        lastNameError.textContent = "";
      }
    // Validate email
    if (!email || email === "") {
      emailError.textContent = "Email is required";
      valid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email address";
      valid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Validate password
    if (!password || password === "") {
      passwordError.textContent = "Password is required";
      valid = false;
    } else if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters";
      valid = false;
    } else {
      passwordError.textContent = "";
    }
  
    return valid;
  }
  
  function isValidEmail(email) {
    // Simple email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }