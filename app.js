"use strict";

const submit = document.querySelector("button.submit");
const rates = document.getElementsByClassName("rate");
let i;
console.log(rates);

// rates.addEventListener("click", function()
// rates.classList.remove("clicked")
// )

for (i = 0; i < rates.length; i++) {
    rates[i].addEventListener("click", function () {
        this.classList.toggle("clicked");
    });
}

submit.addEventListener("click", () => {
  document.querySelector("div.question").classList.toggle("hidden");
  document.querySelector("div.thank-you-container").classList.toggle("hidden");
});
