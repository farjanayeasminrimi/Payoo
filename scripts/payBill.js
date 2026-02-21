const payBillBtn = getElement("pay-bill-btn");

payBillBtn.addEventListener("click", function () {
  const bank = getValueFromInput("pay-bank");
  // check bank selection
  if (bank === "Select Bank") {
    alert("Select a bank");
    return;
  }

  // validation user account number
  const billerNum = getValueFromInput("biller-number");
  if (billerNum.length != 11) {
    alert("Invalid biller account number");
    return;
  }

  // get new amount
  const payBillAmount = getValueFromInput("pay-bill-amount");
  const currentBalance = balance();
  // new balance
  const newBalance = Number(currentBalance) - Number(payBillAmount);

  // validate new balance
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // validate pin
  const pin = getValueFromInput("pay-bill-pin");
  if (pin === "4444") {
    updateBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
  removeValue("pay-bank");
  removeValue("biller-number");
  removeValue("pay-bill-amount");
  removeValue("pay-bill-pin");
});
