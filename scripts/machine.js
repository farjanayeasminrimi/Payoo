function getElement(id) {
  let element = document.getElementById(id);
  return element;
}

function getValueFromInput(inputField) {
  const input = getElement(inputField);
  const value = input.value;
  return value;
}

function balance() {
  const balance = document.getElementById("balance");
  const currentBalance = balance.innerText;
  return Number(currentBalance);
}

function updateBalance(newBalance) {
  const balanceElement = getElement("balance");
  balanceElement.innerText = newBalance;
}

function removeValue(idName) {
  let input = getElement(idName);
  input.value = "";
}

function showOnly(id) {
  const addMoney = getElement("add-money");
  const cashOut = getElement("cash-out");
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  getElement(id).classList.remove("hidden");
}
