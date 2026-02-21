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
  const moneyTransfer = getElement("money-transfer");
  const bonus = getElement("bonus");
  const payBill = getElement("pay-bill");
  const transaction = getElement("Transaction");
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  moneyTransfer.classList.add("hidden");
  bonus.classList.add("hidden");
  payBill.classList.add("hidden");
  transaction.classList.add("hidden");
  getElement(id).classList.remove("hidden");
}

function addCard(type, symbol, price) {
  const historyContainer = getElement("transaction-card-container");
  const card = document.createElement("div");
  card.className = "transaction-card flex justify-between items-center";
  card.innerHTML = `
            <div class="flex gap-6 items-center">
              <img src="./assets/opt-1.png" alt="" />
              <div class="flex flex-col">
                <h3 class="text-[.9rem] font-bold text-gray-700">${type}</h3>
                <span class="text-[.7rem] font-semibold text-gray-500">${new Date().toLocaleString(
                  "en-US",
                  {
                    timeZone: "Asia/Dhaka",
                    dateStyle: "medium",
                    timeStyle: "short",
                  },
                )}</span>
              </div>
            </div>
            <div class="flex gap-3">
              <h3 class="text-[1rem] font-semibold text-gray-500">
                <span id="symbol">${symbol}</span>
                $${price}
              </h3>
              <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
  `;
  historyContainer.appendChild(card);
}
