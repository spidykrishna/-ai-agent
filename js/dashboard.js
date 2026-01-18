// 🚨 PROTECT DASHBOARD
if (localStorage.getItem("is_authenticated") !== "true") {
  window.location.replace("login.html");
}
