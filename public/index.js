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

  // validate(dayValue, monthValue, yearValue);
  if (!validateDay() || !validateMonth() || !validateYear()) {
    return;
  }

  console.log("1 " + month);

  if (dayValue > day) {
    day = day + Months[month - 1];
    month = month - 1;
  }
  if (monthValue > month) {
    month = month + 12;
    currentYear = currentYear - 1;
  }
  console.log(month);
  // alert(monthValue);

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

// var ageDate = new Date(diff);
// var currentAgeYears = ageDate.getUTCFullYear() - 1970;
// var currentAgeMonths = ageDate.getUTCMonth() + 1;
// var currentAgeDays = ageDate.getUTCDay();

// if (currentAgeMonths == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
//   var currentAgeDays = Math.floor(ageDays % 31);
// } else if (currentAgeMonths == 2) {
//   currentAgeDays = Math.floor(ageDays % 28);
// } else {
// }
// var ageDays = Math.floor(currentAgeYears * 365.24);
// var currentAgeDays = ageDays % 30;

// var diff = today - birthday; //age in milliseocnds

// var currentAgeYears = Math.floor(diff / 31556952000); // age in milliseconds/ by milliseconds in a year
// var ageMonths = Math.floor(diff / 2629746000); // age in milisecond / by milliseconds in a month
// var currentAgeMonths = ageMonths % 12; // remainder  total age in months / 12 to get age in current year's month
// var ageDays = diff / 86400000; // age in milisecond / by milliseconds in a day

// currentAgeDays = Math.floor(ageDays % 30); // this is where i need help what logic can i use for days

// var birthday = new Date(yearValue, monthValue - 1, dayValue); // birthday in milliseconds
// var today = Date.now(); // todays in milliseconds

// if (!day) {
//   dayError.innerHTML = EmptyErrMesg;
// }
// if (!month) {
//   monthErr.innerHTML = EmptyErrMesg;

// else if (month > 12) {
//       monthInput.style.borderColor = "red";
//       monthErr.innerHTML = monthErrMesg;
//       validator = false;
//     } else if (dayInp.value > 31) {
//       dayInput.style.borderColor = "red";
//       dayError.innerHTML = dayErrMesg;
//       validator = false;
//     }

//  inputs.forEach((i) => {
//     const parent = i.parentElement;
//     if (!i.value) {
//       i.style.borderColor = "red";
//       parent.querySelector(".err").innerText = "this field is required.";
//       validator = false;
//     }
//   });
//   if (day < 1 || day > 31) {
//     dayInput.style.borderColor = "red";
//     dayError.innerHTML = dayErrMesg;
//     validator = false;
//     console.log(validator);
//   }
// else if (month < 1 || month > 12) {
//   monthInput.style.borderColor = "red";
//   monthErr.innerHTML = monthErrMesg;
//   validator = false;
// }
//  else if (year > currentYear) {
//   yearInput.style.borderColor = "red";
//   yearErr.innerHTML = yearErrMesg;
//   validator = false;}

// function validate(day, month, year) {
//   let validator;
//   if (day == "") {
//     dayInput.style.borderColor = "red";
//     dayError.innerHTML = EmptyErrMesg;
//     validator = false;
//   }
//   if (month == "") {
//     monthInput.style.borderColor = "red";
//     monthErr.innerHTML = EmptyErrMesg;
//     validator = false;
//   }
//   if (year == "") {
//     yearInput.style.borderColor = "red";
//     yearErr.innerHTML = EmptyErrMesg;
//     validator = false;
//   } else {
//     dayInput.style.borderColor = "black";
//     dayError.innerText = "";
//     validator = true;
//   }

//   return validator;
// }
