/* Add your JavaScript to this file */

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailField = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailField.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "white";
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.style.color = "white";
        }
    });
});
