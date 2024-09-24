console.log("history js connected");

function transactionRecorder(amount, donationFund) {
  const div = document.createElement("div");
  div.setAttribute("class", "transaction border-2 rounded-xl p-8");
  const currentTime = new Date();
  div.innerHTML = `<p>
            ${amount} Taka is Donated for
            ${donationFund}
          </p>
          <p>
            Date : ${currentTime}
          </p>`;
  console.log(div);

  document.getElementById("transaction-history").appendChild(div);
}
