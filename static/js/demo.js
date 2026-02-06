const demoForm = document.getElementById("demoForm");

if (demoForm) {
  demoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("demoName").value.trim();
    const email = document.getElementById("demoEmail").value.trim();
    const phone = document.getElementById("demoPhone").value.trim();
    const company = document.getElementById("demoCompany").value.trim();
    const city = document.getElementById("demoCity").value.trim();
    const error = document.getElementById("demoError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name || !email || !phone || !company || !city) {
      error.textContent = "All fields are required";
      error.style.color = "red";
      return;
    }

    if (!emailRegex.test(email)) {
      error.textContent = "Enter a valid email address";
      error.style.color = "red";
      return;
    }

    if (!phoneRegex.test(phone)) {
      error.textContent = "Enter a valid 10-digit phone number";
      error.style.color = "red";
      return;
    }

    error.style.color = "green";
    error.textContent =
      "Demo request submitted ✅ Our team will contact you shortly.";

    demoForm.reset();
  });
}
