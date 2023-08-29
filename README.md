# Frontend Mentor - Age calculator app

![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a decent understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this age calculator app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

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

## My process

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

## Live site

Here is a live site for the project for you to try out!

- 

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack).
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback.

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
