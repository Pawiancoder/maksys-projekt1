const name = "Lilly";
let number = 0;
//Zahl wird bei A - 1 gerechnet und bei B + 1. AB ist Reset.

input.onButtonPressed(Button.A, () => {
    basic.clearScreen();
    number = number - 1;
    basic.showNumber(number);
})

input.onButtonPressed(Button.B, () => {
    basic.clearScreen();
    number = number + 1;
    basic.showNumber(number);
});

input.onButtonPressed(Button.AB, () => {
    basic.clearScreen();
    number = 0;
    basic.showNumber(number);
})