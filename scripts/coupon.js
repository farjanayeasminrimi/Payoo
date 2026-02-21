const couponBtn = getElement("coupon-btn");
couponBtn.addEventListener("click", function () {
  const coupon = getValueFromInput("coupon");
  // coupon validation
  if (coupon !== "rimi10") {
    alert("Give correct coupon");
    return;
  }

  // get new amount
  const newBalance = balance() + 5000;

  if (coupon === "rimi10") {
    alert(`Added bonous successfully 
      at ${new Date()}`);
    updateBalance(newBalance);
  }
  removeValue("coupon");
});
