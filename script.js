function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("show");
}

function toggleLogin() {
  const loginBox = document.getElementById("loginDiv");
  const signupBox = document.getElementById("signupDiv");

  // Hide signup if it's open
  signupBox.style.display = "none";

  // Toggle login box
  loginBox.style.display = loginBox.style.display === "block" ? "none" : "block";
}

function toggleSignup() {
  const signupBox = document.getElementById("signupDiv");
  const loginBox = document.getElementById("loginDiv");

  // Hide login if it's open
  loginBox.style.display = "none";

  // Toggle signup box
  signupBox.style.display = signupBox.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".fuck_in");
  const signupBtn = document.querySelector(".fuck_up");

  if (loginBtn) {
    loginBtn.addEventListener("click", toggleLogin);
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", toggleSignup);
  }

  // Click outside to close
  document.addEventListener("click", function (event) {
    const loginBox = document.getElementById("loginDiv");
    const signupBox = document.getElementById("signupDiv");

    if (
      !event.target.closest(".float_box") &&
      !event.target.classList.contains("fuck_in") &&
      !event.target.classList.contains("fuck_up")
    ) {
      loginBox.style.display = "none";
      signupBox.style.display = "none";
    }
  });
});