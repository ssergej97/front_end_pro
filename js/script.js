'use strict';

const user = {
    name: `Sergey`,
    age: 27,
    isOnline: true,
    friends: [`Daniel`, `Timyr`, `Evgenyi`],
    settings: {
        theme: `light`,
        notifications: true
    }
}

let firstFriendsName = user.friends[0];

let notificationsEnabled = user.settings.notifications;
if (notificationsEnabled === true) {
    notificationsEnabled = `Cповіщення ввімкнені`;
}
else {
    notificationsEnabled = `Сповіщення вимкнені`;
}

console.log(`Ім’я користувача: ${user.name}`);
console.log(`Кількість друзів: ${user.friends.length}`);
console.log(`Ім’я першого друга: ${firstFriendsName}`);
console.log(`Увімкнена тема: ${user.settings.theme}`);
console.log(notificationsEnabled);