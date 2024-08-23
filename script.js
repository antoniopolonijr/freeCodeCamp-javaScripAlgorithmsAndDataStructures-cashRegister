/// Cash Register

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

// variables assigned to access elements in HTML document
const totalPrice = document.getElementById("total-price");
const cash = document.getElementById("cash"); // set the "cash"
const purchaseBtn = document.getElementById("purchase-btn"); // set the "Purchase" buttom
const changeInDrawer = document.getElementById("change-in-drawer");
const changeDue = document.getElementById("change-due"); // set the "output"

// Functions

// update html text
totalPrice.textContent = `Total Price: $${price}`;

// Event Listeners

// event listener to call the checkCash function when users click the Check button.
purchaseBtn.addEventListener("click", () => {
  checkCash(cash.value); // take the value of text input and execute the checkCash function
  cash.value = ""; // clear the input text in the html
});

// event listener to call the checkCash function when users press the Enter / Return key.
cash.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // method to stop the browser from refreshing the page after submitting the form.
    checkCash(cash.value); // take the value of text input and execute the checkCash function
    cash.value = ""; // clear the input text in the html
  }
});
