'use strict';

let userAgeBirthday = prompt(`What is your age birthday?`);
let userCityLive = prompt(`Where are you live?`);
let userFavouriteSport = prompt(`What is your favorite sport?`);

userAgeBirthday = userAgeBirthday ? `Your age is ${userAgeBirthday}` : `Sorry that you didn't want to enter your date of birth`;

switch (userCityLive) {
    case null:
        userCityLive = `Sorry that you didn't want to enter your place of birth`;
        break;
    case `Kyiv`:
        userCityLive = `You live in the capital Kyiv`;
        break;
    case `Washington`:
        userCityLive = `You live in the capital Washington`;
        break;
    case `London`:
        userCityLive = `You live in the capital London`;
        break;
    default:
        userCityLive = `You live in ${userCityLive}`;
}

if (userFavouriteSport === null) {
    userFavouriteSport = `Sorry that you didn't want to enter your favourite sport`;
} else if (userFavouriteSport === `Football`) {
    userFavouriteSport = `Cool! Do you want to become a Ronaldo?`;
} else if (userFavouriteSport === `Tennis`) {
    userFavouriteSport = `Cool! Do you want to become a Svitolina?`;
} else if (userFavouriteSport === `Basketball`) {
    userFavouriteSport = `Cool! Do you want to become a Durant?`;
} else {
    userFavouriteSport = `Your favorite sport is ${userFavouriteSport}`;
}

alert(`${userAgeBirthday}\n${userCityLive}\n${userFavouriteSport}`);


