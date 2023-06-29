"use strict";

//# Forms_1_1
function multiplizieren(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#number").value;
  const outputField = document.querySelector(".results");
  outputField.innerHTML += `<p>${inputNumber} * 2 = ${inputNumber*2}</p>`;
}

//# Forms_1_2

function birthYear(event) {
  console.log("test");
  event.preventDefault();
  const inputYear = document.querySelector("#age").value;
  const results = document.querySelector(".birth_years");
  results.innerHTML += `<p>Du bist ${2023 - inputYear} Jahre alt.</p>`;
}

//# Forms 1_2 Change bg-color

function changeColor(event) {
  event.preventDefault();
  const inputColor = document.querySelector("#color").value;
  const body = document.body;
  body.style.backgroundColor = inputColor;
}

const colorSection = document.querySelector(".color_change_section form");
colorSection.style.display = "flex";
colorSection.style.flexDirection = "column";
colorSection.style.alignItems = "center";
colorSection.style.rowGap = "10px";
colorSection.style.width = "20%";
colorSection.style.marginBlock = "5%";
colorSection.style.marginInline = "auto";
colorSection.style.padding = "20px";
colorSection.style.backgroundColor = "#fff";
colorSection.style.borderRadius = "10px";
colorSection.style.border = "1px solid gray";
colorSection.querySelector("button").style.backgroundColor = "green";

//# Forms 1_3 compare_age

function compare_age(event) {
  event.preventDefault();
  const age1 = document.querySelector("#age1").value;
  const age2 = document.querySelector("#age2").value;
  const results_conatiner = document.querySelector(".results_differenz");
  let result;
  if (age1<=age2){
    result = age2 - age1;
  } else {
    result = age1 - age2;
  }
  results_conatiner.innerHTML += `<p>Die Differenz von ${age1} und ${age2} ist: ${result}</p>`; 
}

//# Forms 2_1

const headline = document.querySelector(".headline");

function changeHeadline() {
  // headline.style.backgroundColor = "#f00";
  headline.classList.add("red");
}

function resetHeadline() {
  // headline.style.backgroundColor = "initial";
  headline.classList.remove("red");
}