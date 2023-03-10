"use strict";

let age = document.querySelector("#age");
let gender = document.querySelector("#gender");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

let calcBtn = document.querySelector(".btn");
let result = document.querySelector("#result");

function calcualteBMI() {
  // weight in kilograms divided by height in meters squared
  const BMI = weight.value * (height.value * height.value);
  if (!age.value || !gender.value || !height.value || !weight.value) {
    result.innerHTML = `Please Fill all values!`;
  } else {
    result.innerHTML = `Your BMI is : ${BMI}`;
  }
}

calcBtn.addEventListener("click", calcualteBMI);
