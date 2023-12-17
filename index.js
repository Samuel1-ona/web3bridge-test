const LoginSection = document.querySelector(".login-section");
const Username = document.querySelector(".username");
const LoginButton = document.querySelector(".login-button");

function login() {
  //check if user added value
  if (Username.value == "") {
    alert("Please Add username");
    return;
  }
  //store in local storage
  localStorage.setItem("username", Username.value);
  //inform users they have logged in
  alert("logged in successfully");
  //remove Login section from dom
  LoginSection.remove();
}

LoginButton.addEventListener(onclick, login);
