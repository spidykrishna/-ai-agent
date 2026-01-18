document.addEventListener("DOMContentLoaded", () => {

  /* ================= LOGIN ================= */
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const error = document.getElementById("loginError");

      const savedEmail = localStorage.getItem("auth_user_email");
      const savedPass = localStorage.getItem("auth_user_pass");

      if (!savedEmail || !savedPass) {
        error.textContent = "No account found. Please sign up first.";
        return;
      }

      if (email !== savedEmail || password !== savedPass) {
        error.textContent = "Invalid email or password.";
        return;
      }

      // ✅ LOGIN SUCCESS
      localStorage.setItem("is_authenticated", "true");

      // 🔥 FORCE REDIRECT
      window.location.replace("dashboard.html");
    });
  }

  /* ================= SIGNUP ================= */
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value.trim();
      const confirm = document.getElementById("signupConfirm").value.trim();
      const error = document.getElementById("signupError");

      if (!email || !password || !confirm) {
        error.textContent = "All fields are required.";
        return;
      }

      if (password !== confirm) {
        error.textContent = "Passwords do not match.";
        return;
      }

      localStorage.setItem("auth_user_email", email);
      localStorage.setItem("auth_user_pass", password);

      window.location.replace("login.html");
    });
  }

});
/* ================= LOGOUT ================= */
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Clear session
      localStorage.removeItem("is_authenticated");

      // Redirect to login
      window.location.replace("login.html");
    });
  }
});
