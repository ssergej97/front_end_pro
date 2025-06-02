'use strict';

const userName = prompt(`What is your name?`);
const userAge = Number(prompt(`What is your age?`));

let userNotificationsVerified = confirm(`Are you want ot get notifications?`);

const userId = 1234567890123456789n;

let lastLogin = null;

let nickname;

const favouriteTech = [`HTML`, `CSS`, `JavaScript`];

const settings = {
    theme: `light`,
    autologin: false,
}

const sessions = {
    name: userName,
    age: userAge,
    notifications: userNotificationsVerified,
    id: userId,
    lastLogin: lastLogin,
    nickname: nickname,
    favouriteTech: favouriteTech,
    settings: settings,
};

alert(`Привіт, ${sessions.name}! Ваш ID: ${sessions.id}`);
console.log(sessions);
console.log(`name: ${typeof sessions.name}`, `age: ${typeof sessions.age}`, `notifications: ${typeof sessions.notifications}`, `id: ${typeof sessions.id}`, `lastLogin: ${typeof sessions.lastLogin}`, `nickname: ${typeof sessions.nickname}`, `favouriteTech: ${typeof sessions.favouriteTech}`, `settings: ${typeof sessions.settings}`);
