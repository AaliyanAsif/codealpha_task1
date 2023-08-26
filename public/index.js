const dayOutput = document.getElementById("days"); // the day output
const monthOutput = document.getElementById("months"); // the month output
const yearOutput = document.getElementById("years"); // the year output

const dayInput = document.getElementById("day"); // the day input box
const monthInput = document.getElementById("month"); // the month input box
const yearInput = document.getElementById("year"); // the year input box

var dayError = document.getElementById("day-err");
var monthErr = document.getElementById("month-err");
var yearErr = document.getElementById("year-err");

const EmptyErrMesg = "this field is required!";
const dayErrMesg = "Invalid Day!";
const monthErrMesg = "Invalid Month!";
const yearErrMesg = "Invalid Year!";

const button = document.querySelector("form");

let date = new Date(); // get today full date
let day = date.getDate(); // todays date
let month = date.getMonth() + 1; // current month
let currentYear = date.getFullYear(); // current year

const Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Array of days of months

function validateDay() {
  let value = dayInput.value;
  let monthvalue = monthInput.value;
  if (value == "") {
    dayInput.style.borderColor = "red";
    dayError.innerHTML = EmptyErrMesg;
    return false;
  } else if (value > Months[monthvalue - 1] || value < 1) {
    dayInput.style.borderColor = "red";
    dayError.innerHTML = dayErrMesg;
    return false;
  } else {
    dayError.innerHTML = "";
    dayInput.style.borderColor = "black";
    return true;
  }
}

function validateMonth() {
  let value = monthInput.value;
  if (value == "") {
    monthInput.style.borderColor = "red";
    monthErr.innerHTML = EmptyErrMesg;
    return false;
  } else if (value < 1 || value > 12) {
    monthInput.style.borderColor = "red";
    monthErr.innerHTML = monthErrMesg;
    return false;
  } else {
    monthErr.innerHTML = "";
    monthInput.style.borderColor = "black";
    return true;
  }
}

function validateYear() {
  let value = yearInput.value;
  if (value == "") {
    yearInput.style.borderColor = "red";
    yearErr.innerHTML = EmptyErrMesg;
    return false;
  } else if (value > currentYear) {
    yearInput.style.borderColor = "red";
    yearErr.innerHTML = yearErrMesg;
    return false;
  } else {
    yearErr.innerHTML = "";
    yearInput.style.borderColor = "black";
    return true;
  }
}

function calculateYears(e) {
  e.preventDefault();
  var dayValue = document.getElementById("day").value; // day value
  var monthValue = document.getElementById("month").value; //month value
  var yearValue = document.getElementById("year").value; //year value

  if (!validateDay() || !validateMonth() || !validateYear()) {
    return;
  }

  if (dayValue > day) {
    day = day + Months[month - 1];
    month = month - 1;
  }
  if (monthValue > month) {
    month = month + 12;
    currentYear = currentYear - 1;
  }

  var currentAgeDays = day - dayValue;
  var currentAgeMonths = month - monthValue;
  var currentAgeYears = currentYear - yearValue;

  yearOutput.innerHTML = currentAgeYears + " ";
  monthOutput.innerHTML = currentAgeMonths + " ";
  dayOutput.innerHTML = currentAgeDays + " ";

  day = date.getDate(); // todays date
  month = date.getMonth() + 1; // current month
  currentYear = date.getFullYear(); // current year
}

button.addEventListener("submit", calculateYears);
