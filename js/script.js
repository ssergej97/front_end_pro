'use strict';

const userName= prompt("What is your name?");
const greetings = confirm("Do you want to see greeting?")
if (greetings) {
    alert(`Hello ${userName}!`);
}