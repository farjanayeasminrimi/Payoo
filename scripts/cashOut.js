const cashOutBtn = document.getElementById("cash-out-btn");
const agentNumberInput = document.getElementById("agent-number");
const cashOutAmountInput = document.getElementById("cash-out-amount");
cashOutBtn.addEventListener("click", function () {
  const agentNumber = agentNumberInput.value;
  const cashOutAmount = cashOutAmountInput.value;
  const balance = document.getElementById("balance");
  const currentBalance = balance.innerText;

  // validate number
  if (agentNumber.length != 11) {
    alert("Invalid Number");
    return;
  }

  // new balance
  const newBalance = Number(currentBalance) - Number(cashOutAmount);
  // validate new balance
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  const cashOutPin = document.getElementById("cashout-pin");
  const pin = cashOutPin.value;
  if (pin === "4444") {
    balance.innerText = newBalance;
  } else {
    alert("Invalid Pin");
    return;
  }
});
