"use strict";

const submit = document.querySelector(".submit");
const rates = document.querySelectorAll(".rate");
const rated = document.getElementById("rated")


// switching to thank you panel//
submit.addEventListener("click", () => {
  document.querySelector(".question").classList.toggle("hidden");
  document.querySelector(".thank-you").classList.toggle("hidden");
});

//displaing choosen rate in thank-you panel//
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rated.innerHTML = rate.innerHTML;
  })
})
