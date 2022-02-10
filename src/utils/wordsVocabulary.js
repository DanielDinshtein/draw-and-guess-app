var randomWords = require("random-words");

export const getWords = () => {
    let easy;
    let medium;
    let hard;

    let next = false;

    easy = randomWords({ exactly: 1, maxLength: 3 })[0];

    //  Medium.length > 3  &&  Medium.length <= 6
    while (!next) {
        medium = randomWords({ exactly: 1, maxLength: 6 })[0];

        if (medium.length > 3 && medium.length <= 6) {
            next = true;
        }
    }
    next = false;
    //  Hard.length > 6
    while (!next) {
        hard = randomWords({ exactly: 1 })[0];

        if (hard.length > 6) {
            next = true;
        }
    }

    return { easy: easy, medium: medium, hard: hard };
};
