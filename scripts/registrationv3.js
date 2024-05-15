"use strict";

const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");
const errorsDiv = document.getElementById("errors");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameBlock = document.getElementById("usernameBlock");
const passwordBlock = document.getElementById("passwordBlock");

form.addEventListener("submit", e => {    

    //username
    let username = usernameInput.value;
    if (username == "") {
        setError(usernameInput, "cannot be empty");
    } else if (username.length < 5) {
        setError(usernameInput, "must be at least 5 letters long");
    } else {
        setValid(usernameInput);
    }
    
    //password
    let password = passwordInput.value;
    if (password == "") {
        setError(passwordInput, "cannot be empty");
    } else if (password.length < 9) {
        setError(passwordInput, "must be at least 8 letters long");
    } else {
        setValid(passwordInput);
    }

    if (!FormValid()) {
        e.preventDefault();
    }   

});

function FormValid(){
    let result = true;
    inputs.forEach((input)=>{
        if(input.classList.contains("error")){
            result = false;
        }
    });
    return result;
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    ToggleClass(element,"valid");
    element.classList.add("error");
    const paragraph = parent.querySelector("p");
    paragraph.innerText = errorMessage;
}

function setValid(element){
    const parent = element.parentElement;
    ToggleClass(element,"error");
    element.classList.add("valid");
    const paragraph = parent.querySelector("p");
    paragraph.innerText = "";
}

function ToggleClass(element,css){
    if(element.classList.contains(css)){
        element.classList.remove(css);
    };
};