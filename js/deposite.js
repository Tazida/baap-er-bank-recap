/**
 1. add event listener to the deposite button
 2. get deposite amount from the deposite input field
 2-5. convert string deposite amount to a number type
 3. clear the deposite input field after getting the value
 4. get the previous deposite total
 5. calculate new deposite total and set the value to the deposite total
 6. get current balance total
 7. calculate the new balance and set it to the balance total element
 */

// step 1
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step 3
  depositField.value = "";

  // step 4
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step 5
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  // step 6
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

  // step 7
  const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
