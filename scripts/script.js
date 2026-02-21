const loginBtn = document.getElementById("login-btn");
const numberInput = document.getElementById("number");
const pinInput = document.getElementById("pin");
loginBtn.addEventListener("click", function () {
  let number = numberInput.value;
  let pin = pinInput.value;
  if (number === "01333348792" && pin === "4444") {
    alert("Login Successfully");
    window.location.assign("./home.html");
  } else {
    alert("Invalid number or pin");
    return;
  }
  numberInput.value = "";
  pinInput.value = "";
});
