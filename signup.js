document.addEventListener("DOMContentLoaded", function () {
    const signupFormContainer = document.querySelector(".form-container");

    if (!signupFormContainer) {
        console.error("Signup form container not found! Make sure the class is correct.");
        return;
    }

    const form = document.createElement("form");
    form.id = "signup-form";

    const heading = document.createElement("h1");
    heading.textContent = "Sign up";

    const sec1 = document.createElement("div");
    sec1.id = "sec-1";

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email-Input");
    emailLabel.textContent = "Email / Username";

    const emailInput = document.createElement("input");
    emailInput.id = "email-Input";
    emailInput.type = "email";
    emailInput.placeholder = "Enter username";
    emailInput.name = "user";
    emailInput.required = true;

    sec1.appendChild(emailLabel);
    sec1.appendChild(emailInput);

    const sec2 = document.createElement("div");
    sec2.id = "sec-2";

    const passDiv1 = document.createElement("div");
    passDiv1.classList.add("passDiv");

    const passLabel1 = document.createElement("label");
    passLabel1.setAttribute("for", "pass-Input");
    passLabel1.textContent = "Password";

    const passInput1 = document.createElement("input");
    passInput1.id = "pass-Input";
    passInput1.type = "password";
    passInput1.placeholder = "Enter password";
    passInput1.name = "pass";
    passInput1.required = true;

    const eyeIcon1 = document.createElement("i");
    eyeIcon1.classList.add("fa-solid", "fa-eye");
    eyeIcon1.style.cursor = "pointer";

    passDiv1.appendChild(passLabel1);
    passDiv1.appendChild(eyeIcon1);

    const passDiv2 = document.createElement("div");
    passDiv2.classList.add("passDiv");

    const passLabel2 = document.createElement("label");
    passLabel2.setAttribute("for", "pass-Input2");
    passLabel2.textContent = "Confirm password";

    const passInput2 = document.createElement("input");
    passInput2.id = "pass-Input2";
    passInput2.type = "password";
    passInput2.placeholder = "Confirm your password";
    passInput2.name = "pass";
    passInput2.required = true;

    const eyeIcon2 = document.createElement("i");
    eyeIcon2.classList.add("fa-solid", "fa-eye");
    eyeIcon2.style.cursor = "pointer";

    passDiv2.appendChild(passLabel2);
    passDiv2.appendChild(eyeIcon2);

    sec2.appendChild(passDiv1);
    sec2.appendChild(passInput1);
    sec2.appendChild(passDiv2);
    sec2.appendChild(passInput2);

    const subBtn = document.createElement("button");
    subBtn.textContent = "Sign up";
    subBtn.classList.add("submit");
    subBtn.type = "submit"; 

    form.appendChild(heading);
    form.appendChild(sec1);
    form.appendChild(sec2);
    form.appendChild(subBtn);

    signupFormContainer.appendChild(form);

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

        const signupEmail = emailInput.value.trim();
        const signupPassword = passInput1.value.trim();
        const confirmPassword = passInput2.value.trim();

        if (signupEmail === "" || signupPassword === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (signupPassword.length < 8) {
            alert("Password must contain at least 8 characters.");
            return;
        }

        if (signupPassword !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        if(/[A-Z]/.test(signupEmail)){
            alert("Enter a valid email (No uppercase letters allowed)");
            return;
        }

        if(!signupEmail.includes("@gmail.com")){
            alert("Enter a valid email");
            return;
        }

        localStorage.setItem("storedEmail", signupEmail);
        localStorage.setItem("storedPassword", signupPassword);

        alert("Signup successful! Redirecting to login page...");
        window.location.href = "index.html";
    });
});
