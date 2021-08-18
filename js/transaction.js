// common function...

function commonInputWork(inputID) {
  const inputFieldText = document.getElementById(inputID);
  const inputFieldNumber = parseFloat(inputFieldText.value);
  inputFieldText.value = "";
  return inputFieldNumber;
}

function commonTagsWork(textID, currentNumber) {
  // debugger;
  const innerFieldText = document.getElementById(textID);
  const innerFieldNumber = parseFloat(innerFieldText.innerText);
  const totalAmount = innerFieldNumber + currentNumber;
  innerFieldText.innerText = totalAmount;
}

function totalMoney(currentNumber, isAddOrSub) {
  const totalDollarText = document.getElementById("total-amount");
  const totalDollarNumber = parseFloat(totalDollarText.innerText);
  if (isAddOrSub == true) {
    const total = totalDollarNumber + currentNumber;
    totalDollarText.innerHTML = total;
  } else {
    const total = totalDollarNumber - currentNumber;
    totalDollarText.innerHTML = total;
  }
}
// Deposit part

document.getElementById("deposit-btn").addEventListener("click", function () {
  //const depositInputText = document.getElementById("deposit-field");
  //const depositTotalText = document.getElementById("deposit-amount");

  //depositTotalText.innerText = depositInputText.value;
  // console.log(depositTotalText.innerText);
  // console.log(parseFloat(depositTotalText.innerText));

  // Convert into string to number

  //const currentDepositInputNumber = parseFloat(depositInputText.value);
  //const previousDepositTotalNumber = parseFloat(depositTotalText.innerText);

  //const totalDeposit = previousDepositTotalNumber + currentDepositInputNumber;

  //depositTotalText.innerText = totalDeposit;
  // console.log(currentDepositInputNumber);
  // console.log(previousDepositTotalNumber);

  // Total amount calculate..

  // const totalAmount = document.getElementById("total-amount");

  // //const totalAmountText = totalAmount.innerText;

  // const totalAmountNumber = parseFloat(totalAmount.innerText);

  // const finalAmount = totalAmountNumber + currentDepositInputNumber;

  // totalAmount.innerText = finalAmount;

  //depositInputText.value = "";

  // using function
  const currentDepositInputNumber = commonInputWork("deposit-field");
  if (currentDepositInputNumber > 0) {
    commonTagsWork("deposit-amount", currentDepositInputNumber);
    totalMoney(currentDepositInputNumber, true);
  }
});

// Withdraw part...

document.getElementById("withdraw-btn").addEventListener("click", function () {
  //const withdrawTotalText = document.getElementById("withdraw-amount");

  //const withdrawInputText = document.getElementById("withdraw-field");

  // convert into string to Number

  //const previouswithdrawTotalNumber = parseFloat(withdrawTotalText.innerText);
  //const currentwithdrawInputNumber = parseFloat(withdrawInputText.value);

  //const totalWithdraw =
  //previouswithdrawTotalNumber + currentwithdrawInputNumber;

  //withdrawTotalText.innerText = totalWithdraw;

  //   Total amount

  // const totalAmountText = document.getElementById("total-amount");

  // const totalAmountNumber = parseFloat(totalAmountText.innerText);

  // const finalAmount = totalAmountNumber - currentwithdrawInputNumber;

  // totalAmountText.innerText = finalAmount;

  //withdrawInputText.value = "";

  // using function...

  const totalAmountText = document.getElementById("total-amount");
  const totalAmountNumber = parseFloat(totalAmountText.innerText);

  const currentwithdrawInputNumber = commonInputWork("withdraw-field");
  if (
    currentwithdrawInputNumber > 0 &&
    totalAmountNumber >= currentwithdrawInputNumber
  ) {
    commonTagsWork("withdraw-amount", currentwithdrawInputNumber);
    totalMoney(currentwithdrawInputNumber, false);
  }
});
