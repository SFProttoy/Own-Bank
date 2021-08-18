// valid user proof

document.getElementById("confirm-btn").addEventListener("click", function () {
  //email value

  const emailInput = document.getElementById("email-field");
  const emailInputValue = emailInput.value;

  //password value

  const passInput = document.getElementById("pass-field");
  const passInputValue = passInput.value;

  // validation check

  if (emailInputValue == "own@gmail.com" && passInputValue == "secpass") {
    window.location.href = "welcomebank.html";
  }
});
