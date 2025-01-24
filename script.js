document.addEventListener("DOMContentLoaded", () => {
    // Select form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Named function for form validation and feedback display
    function validateForm(event) {
        // Prevent default form submission
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation status and messages
        let isValid = true;
        const messages = [];

        // Username validation: At least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation: Must include '@' and '.'
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation: At least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback display
        feedbackDiv.style.display = "block"; // Make feedback visible
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
            form.reset(); // Optionally reset the form
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with line breaks
            feedbackDiv.style.color = "#dc3545"; // Red for errors
        }
    }

    // Attach the named function to the submit event listener
    form.addEventListener("submit", validateForm);
});