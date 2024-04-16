/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 0;
let daysSelected = 0;
let totalCost = 0;
let dayButtons = document.querySelectorAll(".day-selector li");
let clearButton = document.getElementById("clear-button");
let halfDayButton = document.getElementById("half");
let fullDayButton = document.getElementById("full");
let calculatedCostElement = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayButtonClick() {
  dayButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        daysSelected++;
      } else {
        this.classList.remove("clicked");
        daysSelected--;
      }
      calculateTotalCost();
    });
  });
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
  dayButtons.forEach((button) => {
    button.classList.remove("clicked");
  });
  daysSelected = 0;
  totalCost = 0;
  calculateTotalCost();
}

clearButton.addEventListener("click", clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeToHalfDay() {
  costPerDay = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  calculateTotalCost();
}

function changeToFullDay() {
  costPerDay = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculateTotalCost();
}

halfDayButton.addEventListener("click", changeToHalfDay);
fullDayButton.addEventListener("click", changeToFullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
  totalCost = daysSelected * costPerDay;
  calculatedCostElement.innerHTML = `${totalCost}`;
}

document.addEventListener("DOMContentLoaded", function () {
  fullDayButton.click();

  handleDayButtonClick();
});
