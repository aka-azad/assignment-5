console.log("home js connected");

document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    donateMoney("donate-noakhali-flood", "balance-noakhali");
  });
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    donateMoney("donate-feni-flood", "balance-feni");
  });
document
  .getElementById("btn-donate-quotaMovement")
  .addEventListener("click", function () {
    donateMoney("donate-quota-movement", "balance-quota-movement");
  });
