const couponBtn = getElement("coupon-btn");
couponBtn.addEventListener("click", function () {
  const coupon = getValueFromInput("coupon");
  // coupon validation
  if (coupon !== "rimi10") {
    alert("Give correct coupon");
    return;
  }

  // get new amount
  const bonusAmount = 5000;
  const newBalance = balance() + bonusAmount;
  const title = getElement("bonus-title").innerText;
  if (coupon === "rimi10") {
    alert(`Added bonous successfully 
      at ${new Date()}`);
    updateBalance(newBalance);
    addCard(title, "+", bonusAmount);
  }
  removeValue("coupon");
});
