# Frontend Mentor - Age calculator app

![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

**To do this project, you need a decent understanding of HTML, CSS and JavaScript.**

## Live site

Here is a live site for the project for you to try out!

- https://aaliyanasif.github.io/age-calculator/

## The project

Your users are able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![screenshot](/assets/images/screenshot.png)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- CSS animations

### What I learned

While building this project i leanred about how to use the JavaScript Date method and its diffrent uses. I had to try a couple of methods to get till the logic needed to finish this project. I also experimented with validation and learned a few new techniques.

Below is some proud CSS and JS code snippets

```css
.an {
  animation-name: example;
  animation-duration: 3s;
}

@keyframes example {
  from {
    color: hsl(258, 17%, 88%);
  }
  to {
    color: hsl(259, 75%, 41%);
  }
  to {
    color: hsl(259, 100%, 65%);
  }
}
```

```js
let date = new Date(); // get today full date
let day = date.getDate(); // todays date
let month = date.getMonth() + 1; // current month
let currentYear = date.getFullYear(); // current year

const Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Array of days of months

function animate() {
  span.forEach((e) => {
    e.className = "an";
  });
}

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
```



