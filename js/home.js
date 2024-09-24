document
  .getElementById("btn-navigate-blog")
  .addEventListener("click", function () {
    location.href = "../blog.html";
  });

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

document
  .getElementById("btn-show-donationCard")
  .addEventListener("click", function () {
    document.getElementById("donation-card").classList.remove("hidden");
    document.getElementById("transaction-history").classList.add("hidden");
    document
      .getElementById("foot")
      .classList.remove(...["fixed", "bottom-0", "left-0", "right-0"]);
  });

document
  .getElementById("btn-show-history")
  .addEventListener("click", function () {
    document.getElementById("transaction-history").classList.remove("hidden");
    document.getElementById("donation-card").classList.add("hidden");
    document
      .getElementById("foot")
      .classList.add(...["fixed", "bottom-0", "left-0", "right-0"]);
  });
