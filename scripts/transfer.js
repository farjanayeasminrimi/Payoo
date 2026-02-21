const transferBtn = getElement("transfer-btn");

transferBtn.addEventListener("click", function () {
  const userNumber = getValueFromInput("user-account-number");
  // validate number
  if (userNumber.length != 11) {
    alert("Invalid Number");
    return;
  }
  const transferAmount = getValueFromInput("transfer-amount");
  const currentBalance = balance();
  // new balance
  const newBalance = Number(currentBalance) - Number(transferAmount);
  console.log(newBalance);
  // validate new balance
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // validate pin
  const pin = getValueFromInput("transfer-pin");
  if (pin === "4444") {
    updateBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
  removeValue("user-account-number");
  removeValue("transfer-amount");
  removeValue("transfer-pin");
});
