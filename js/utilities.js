console.log("utilities js connected");

function donateMoney(amount, fundName) {
  const balanceString = document.getElementById("balance").innerText;
  const balance = Number(balanceString);
  const donationString = document.getElementById(amount).value;
  const donationAmount = Number(donationString);
  const fundBalanceString = document.getElementById(fundName).innerText;
  const fundBalance = Number(fundBalanceString);
  if (
    !isNaN(donationAmount) &&
    donationAmount <= balance &&
    donationAmount > 0
  ) {
    document.getElementById(fundName).innerText = fundBalance + donationAmount;
    document.getElementById("balance").innerText = balance - donationAmount;
    console.log("condition passed");
    document.getElementById(amount).value = null;
    document.getElementById("my_modal_5").showModal();
  } else {
    document.getElementById(amount).value = null;
    alert("Unable to donate! Please Check Your Input");
  }
}
