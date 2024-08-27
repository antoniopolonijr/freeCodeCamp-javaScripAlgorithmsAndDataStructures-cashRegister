/// Cash Register

// Initial variables
let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

// Currency units and their values
const currencyUnits = [
  ["ONE HUNDRED", 100.0],
  ["TWENTY", 20.0],
  ["TEN", 10.0],
  ["FIVE", 5.0],
  ["ONE", 1.0],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
];

// variables assigned to access elements in HTML document
const totalPrice = document.getElementById("total-price");
const cash = document.getElementById("cash"); // set the "cash"
const purchaseBtn = document.getElementById("purchase-btn"); // set the "Purchase" buttom
const changeInDrawer = document.getElementById("change-in-drawer");
const changeDue = document.getElementById("change-due"); // set the "output"

// Functions

const checkCash = (cash) => {
  // Check if the customer has enough money
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  // Handle exact cash payment
  if (cash === price) {
    changeDue.innerHTML =
      "<p>No change due - customer paid with exact cash</p>";
    return;
  }

  calculateChange(cash);
};

// Calculate the change due
const calculateChange = (cash) => {
  let currentChange = (cash - price).toFixed(2);
  const totalCID = cid
    .reduce((total, currency) => total + currency[1], 0)
    .toFixed(2);

  if (currentChange > totalCID) {
    changeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
    return;
  }
};

// update html
totalPrice.textContent = `Total Price: $${price.toFixed(2)}`;

cid.forEach((element) => {
  changeInDrawer.innerHTML += `<p>${element[0]}: $${element[1].toFixed(2)}</p>`;
});

// Event Listeners

// event listener to call the checkCash function when users click the Check button.
purchaseBtn.addEventListener("click", () => {
  checkCash(Number(cash.value)); // take the value of text input and execute the checkCash function
  cash.value = ""; // clear the input text in the html
});

// event listener to call the checkCash function when users press the Enter / Return key.
cash.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // method to stop the browser from refreshing the page after submitting the form.
    checkCash(Number(cash.value)); // take the value of text input and execute the checkCash function
    cash.value = ""; // clear the input text in the html
  }
});
