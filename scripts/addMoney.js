const addMoneyBtn = getElement("add-money-btn");
addMoneyBtn.addEventListener("click", function () {
  const bank = getValueFromInput("select-bank");
  // check bank selection
  if (bank === "Select Bank") {
    alert("Select a bank");
    return;
  }

  // validation bank account number
  const bankAccNum = getValueFromInput("bank-account-number");
  if (bankAccNum.length != 11) {
    alert("Invalid bank account number");
    return;
  }

  // get new amount
  const addAmount = getValueFromInput("add-money-amount");
  const newBalance = balance() + Number(addAmount);

  // pin validation
  const pin = getValueFromInput("add-money-pin");
  const title = getElement("add-money-title").innerText;
  if (pin === "4444") {
    alert(`Added balance successfully to 
      ${bank}
      at ${new Date()}`);
    updateBalance(newBalance);
    addCard(title, "+", addAmount);
  } else {
    alert("Invalid Pin");
    return;
  }
  removeValue("select-bank");
  removeValue("bank-account-number");
  removeValue("add-money-amount");
  removeValue("add-money-pin");
});
