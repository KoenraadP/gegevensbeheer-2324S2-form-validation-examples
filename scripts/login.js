"use strict";

let form = document.getElementById("form");
let inputs = document.querySelectorAll("input");
let errorsDiv = document.getElementById("errors");

form.addEventListener("submit", function(e) {

    e.preventDefault();  
    
    inputs.forEach(element => {
        element.removeAttribute("class");
    });

    let errors = [];

    inputs.forEach(element => {
        if (element.validity.valid == true) {
            element.classList.add("valid");
        }
        else {
            element.classList.add("error");
            errors.push(element.id + ": " + element.validationMessage);
        }
    });

    if (errors.length > 0){  
        errorsDiv.innerHTML = errors.join("<br>");
    }
    else {
        alert("Login OK!");
        location.assign("https://www.creo.be");        
    }

});
