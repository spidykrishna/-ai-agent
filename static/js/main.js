document.addEventListener("DOMContentLoaded", () => {

  
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

       
      localStorage.setItem("is_authenticated", "true");

      
      window.location.replace("dashboard.html");
    });
  }

   
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
 
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Clear session
      localStorage.removeItem("is_authenticated");

      
      window.location.replace("login.html");
    });
  }
});
 
document.addEventListener("DOMContentLoaded", () => {
  const demoModal = document.getElementById("demoModal");
  const closeDemo = document.getElementById("closeDemo");
  const demoButtons = document.querySelectorAll(".open-demo");

  if (!demoModal) return;

  demoButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      demoModal.style.display = "flex";
    });
  });

  if (closeDemo) {
    closeDemo.addEventListener("click", () => {
      demoModal.style.display = "none";
    });
  }

  demoModal.addEventListener("click", (e) => {
    if (e.target === demoModal) {
      demoModal.style.display = "none";
    }
  });
});


  
  if (closeDemo) {
    closeDemo.addEventListener("click", () => {
      demoModal.style.display = "none";
    });
  }

   
  if (demoModal) {
    demoModal.addEventListener("click", (e) => {
      if (e.target === demoModal) {
        demoModal.style.display = "none";
      }
    });
  }
;
 
document.addEventListener("DOMContentLoaded", () => {
  const demoOptions = document.querySelectorAll(".demo-option");
  const demoTypeInput = document.getElementById("demoType");

  demoOptions.forEach(option => {
    option.addEventListener("click", () => {
       
      demoOptions.forEach(o => o.classList.remove("active"));

       
      option.classList.add("active");

       
      if (demoTypeInput) {
        demoTypeInput.value = option.dataset.type;
      }
    });
  });
});
