const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const result = document.getElementById("result");

function showError(el, message) {
    el.innerHTML = message;
}

function clearError(el) {
    el.innerHTML = "";
}

function validateName() {
    let value = nameInput.value.trim();
    if (value.length < 2) {
        showError(nameError, "Name must be at least 2 characters.");
        return false;
    }
    clearError(nameError);
    return true;
}

function validateEmail() {
    let value = emailInput.value.trim();
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
        showError(emailError, "Enter a valid email address.");
        return false;
    }
    clearError(emailError);
    return true;
}

function validatePassword() {
    let value = passInput.value;
    if (value.length < 8) {
        showError(passError, "Password must be at least 8 characters.");
        return false;
    }
    clearError(passError);
    return true;
}

function validateConfirm() {
    let pass = passInput.value;
    let confirm = confirmInput.value;
    if (confirm === "") {
        showError(confirmError, "Please confirm your password.");
        return false;
    }
    if (confirm !== pass) {
        showError(confirmError, "Passwords do not match.");
        return false;
    }
    clearError(confirmError);
    return true;
}

function validateForm() {
    let okName = validateName();
    let okEmail = validateEmail();
    let okPass = validatePassword();
    let okConfirm = validateConfirm();
    return okName && okEmail && okPass && okConfirm;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    result.innerHTML = "";

    if (validateForm()) {
        result.innerHTML = "Form is valid!";
        result.className = "ok";
    } else {
        result.innerHTML = "Please fix the errors.";
        result.className = "error";
    }
});






















// Global Error Handlers
// Handle uncaught exceptions (synchronous errors)
process.on('uncaughtException', (error) => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(error.name, error.message);

  // Perform cleanup (close database connections, etc.)
  server.close(() => {
    console.log('Process terminated due to uncaught exception');
    process.exit(1); // Exit with failure
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error('Unhandled Rejection at:', promise, 'Reason:', reason);

  // Close server and exit
  server.close(() => {
    process.exit(1);
  });
});

// Example of an unhandled promise rejection
Promise.reject(new Error('Something went wrong'));

// Example of an uncaught exception
setTimeout(() => {
  throw new Error('Uncaught exception after timeout');
}, 1000);







