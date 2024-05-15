"use strict";

const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");
const errorsDiv = document.getElementById("errors");

form.addEventListener("submit", e => {

    let errors = [];

    if (username.value == "") {
        errors.push("Username is required");
    } else if (username.value.length < 5) {
        errors.push("Minimal username length = 5");
    } 

    if (password.value == "") {
        errors.push("Password is required");
    }

    if (errors.length > 0) {
        e.preventDefault();
        errorsDiv.innerHTML = errors.join("<br>");
    }
    else {
        alert("Login OK!");
    }

});
