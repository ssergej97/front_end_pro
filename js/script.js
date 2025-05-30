'use strict';

const userName = prompt(`What is your name?`);
let userAge = Number(prompt(`How old are you?`));
let userAgreement = confirm(`Do you agree to take part in?`);
const userId = 12345678901234567890n;
let bonusCode = null;
let secondName;

if (userAgreement === true) {
    userAgreement = `Участь підтверджено`;
}
else {
    userAgreement = `Відмовився`;
}

alert(`Привіт, ${userName}!\nТвій вік: ${userAge}\nТвій статус: ${userAgreement}`);

console.log(`Ім'я:`, userName, typeof userName);
console.log(`Вік:`, userAge, typeof userAge);
console.log(`Статус:`, userAgreement, typeof userAgreement);
console.log(`ID:`, userId, typeof userId);
console.log(`Bonus code:`, bonusCode, typeof bonusCode);
console.log(`Second name:`, secondName, typeof secondName);
