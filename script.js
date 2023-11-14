"use strict";

let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener("click", function () {
  burgerElement.classList.toggle("activeBurger");
  navigationElement.classList.toggle("navActive");
});

let inputElement = document.getElementById("input-field");
let addBtn = document.querySelector(".btn-add");
let ulElementItems = document.querySelector(".ul-list-items");
let deleetAllItems = document.querySelector(".clearAll");
let formElement = document.getElementById("form-wraper");
formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = inputElement.value;

  if (value == " ") {
    return;
  }
  let li = document.createElement("li");
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteIcon.addEventListener("click", function () {
    li.remove();
  });
  li.textContent = value;

  li.appendChild(deleteIcon);
  ulElementItems.appendChild(li);

  inputElement.value = " ";
});

deleetAllItems.addEventListener("click", function (e) {
  ulElementItems.innerHTML = " ";
});

