document.addEventListener("DOMContentLoaded", function () {
    const forgotForm = document.querySelector(".form-container");

    if (!forgotForm) {
        console.error("Forgot form container not found! Make sure the class is correct.");
        return;
    }

    const form = document.createElement("form");
    form.id = "forgot-form";

    const heading = document.createElement("h2");
    heading.textContent = "Reset your Password";

    const passDiv1 = document.createElement("div");
    passDiv1.classList.add("passDiv");

    const passLabel1 = document.createElement("label");
    passLabel1.setAttribute("for", "pass-Input");
    passLabel1.textContent = "New Password";

    const eyeIcon1 = document.createElement("i");
    eyeIcon1.classList.add("fa-solid", "fa-eye");
    eyeIcon1.style.cursor = "pointer";

    const passInput1 = document.createElement("input");
    passInput1.id = "pass-Input";
    passInput1.type = "password";
    passInput1.placeholder = "Enter new password";
    passInput1.name = "pass";
    passInput1.required = true;

    passDiv1.appendChild(passLabel1);
    passDiv1.appendChild(eyeIcon1);

    const passDiv2 = document.createElement("div");
    passDiv2.classList.add("passDiv");

    const passLabel2 = document.createElement("label");
    passLabel2.setAttribute("for", "pass-Input2");
    passLabel2.textContent = "Confirm password";

    const eyeIcon2 = document.createElement("i");
    eyeIcon2.classList.add("fa-solid", "fa-eye");
    eyeIcon2.style.cursor = "pointer";

    const passInput2 = document.createElement("input");
    passInput2.id = "pass-Input2";
    passInput2.type = "password";
    passInput2.placeholder = "Confirm your password";
    passInput2.name = "pass";
    passInput2.required = true;

    passDiv2.appendChild(passLabel2);
    passDiv2.appendChild(eyeIcon2);

    const subBtn = document.createElement("button");
    subBtn.textContent = "Reset Password";
    subBtn.classList.add("submit");
    subBtn.type = "submit"; 

    form.appendChild(heading);
    form.appendChild(passDiv1);
    form.appendChild(passInput1);
    form.appendChild(passDiv2);
    form.appendChild(passInput2);
    form.appendChild(subBtn);

    forgotForm.appendChild(form);

    function togglePasswordVisibility(inputField, icon) {
        icon.addEventListener("click", function () {
            if (inputField.type === "password") {
                inputField.type = "text";
                icon.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                inputField.type = "password";
                icon.classList.replace("fa-eye-slash", "fa-eye");
            }
        });
    }

    togglePasswordVisibility(passInput1, eyeIcon1);
    togglePasswordVisibility(passInput2, eyeIcon2);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const newPassword = passInput1.value.trim();
        const confirmPassword = passInput2.value.trim();

        if (newPassword === "" || confirmPassword === "") {
            alert("Please fill in both fields.");
            return;
        }

        if (newPassword.length < 8) {
            alert("Password must contain at least 8 characters.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        localStorage.setItem("storedPassword", newPassword);

        alert("Password updated successfully! Redirecting to login page...");
        window.location.href = "index.html";
    });
});
