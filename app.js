"use strict";

const submit = document.querySelector(".submit");
const rates = document.querySelectorAll(".rate");
const rated = document.getElementById("rated");

submit.disabled = true;

// switching to thank you panel//
submit.addEventListener("click", () => {
  document.querySelector(".question").classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
});

//displaing rate in thank-you panel//
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    submit.disabled = false;
    rated.innerHTML = rate.innerHTML;
  });
});
