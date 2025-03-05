const formContainer = document.querySelector(".form-container");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.createElement("form");
    form.id = "login-form";

    const heading = document.createElement("h1");
    heading.textContent = "Log in";
    heading.id = "logHeading";

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email / username";
    emailLabel.setAttribute("for", "email-input");

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email-input";
    emailInput.name = "email";
    emailInput.placeholder = "Enter your username";
    emailInput.required = true; 

    const passdiv = document.createElement("div");
    passdiv.id = "pass-sec";

    const passLabel = document.createElement("label");
    passLabel.textContent = "Password";
    passLabel.setAttribute("for", "pass-input");

    const passInput = document.createElement("input");
    passInput.type = "password";
    passInput.id = "pass-input";
    passInput.name = "password";
    passInput.placeholder = "Enter your password";
    passInput.required = true;

    const loginBtn = document.createElement("button");
    loginBtn.textContent = "Log in";
    loginBtn.classList.add("submit");
    loginBtn.type = "submit"; 

    const forgotdiv = document.createElement("div");
    forgotdiv.classList.add("forgot-div");

    const forgotLink = document.createElement("a");
    forgotLink.textContent = "Forgot Password?";
    forgotLink.href = "forgot.html";

    const signUp = document.createElement("div");
    signUp.classList.add("signup-div");

    const signUpPara = document.createElement("p");
    signUpPara.textContent = "New to Blogger";

    const signUpLink = document.createElement("a");
    signUpLink.textContent = "Create account";
    signUpLink.href = "signup.html";

    const eyeIcon = document.createElement("i");
    eyeIcon.classList.add("fa-solid", "fa-eye");
    eyeIcon.style.cursor = "pointer";

    form.appendChild(heading);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passdiv);
    form.appendChild(passInput);
    form.appendChild(loginBtn);
    form.appendChild(forgotdiv);
    form.appendChild(signUp);

    forgotdiv.appendChild(forgotLink);
    signUp.appendChild(signUpPara);
    signUp.appendChild(signUpLink);
    passdiv.appendChild(passLabel);
    passdiv.appendChild(eyeIcon);

    formContainer.appendChild(form);

    eyeIcon.addEventListener("click", function () {
        if (passInput.type === "password") {
            passInput.type = "text";
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passInput.type = "password";
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const loginEmail = emailInput.value.trim();
        const loginPass = passInput.value.trim();

        const storedEmail = localStorage.getItem("storedEmail");
        const storedPassword = localStorage.getItem("storedPassword");

        if (loginEmail === "" || loginPass === "") {
            alert("Please fill in both fields");
            return;
        }

        if (loginPass.length < 8) {
            alert("Password must contain at least 8 characters");
            return;
        }

        if (/[A-Z]/.test(loginEmail)) {
            alert("Enter a valid email (No uppercase letters allowed)");
            return;
        }

        if (!loginEmail.includes("@gmail.com")) {
            alert("Enter a valid email");
            return;
        }

        if (loginEmail === storedEmail && loginPass === storedPassword) {
            alert("Login successfully...!");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
