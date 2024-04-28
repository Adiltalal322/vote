const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		togglePassword.textContent = "visibility";
	} else {
		passwordInput.type = "password";
		togglePassword.textContent = "visibility_off";
	}
});
