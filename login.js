let msg = document.getElementById("msg");
let colors = document.querySelector(":root");
let password = document.getElementById("password");
password.addEventListener("input", (e) => {
  if (e.target.value.length < 5) {
    msg.innerText = "weak password";
    colors.style.setProperty("--color1", "#f50000");
    colors.style.setProperty("--color2", "#ff2525");
  } else if (e.target.value.length < 10) {
    msg.innerText = "good password";
    colors.style.setProperty("--color1", "#fee508");
    colors.style.setProperty("--color2", "#ffee50");
  } else {
    msg.innerText = "great password";
    colors.style.setProperty("--color1", "#2efd00");
    colors.style.setProperty("--color2", "#68ff46");
  }
});
document.getElementById("forget").addEventListener("click", () => {
  password.value = "";
});
document.getElementById("show").addEventListener("click", (e) => {
  if (e.target.innerText == "Show password") {
    e.target.innerText = "Hide password";
    password.type = "text";
  } else {
    e.target.innerText = "Show password";
    password.type = "password";
  }
});
