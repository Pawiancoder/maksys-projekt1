const name = "Lilly";
let number = 0;
//Zahl wird bei A - 1 gerechnet und bei B + 1. AB ist Reset.

//Forever loop erkennt welcher Button gedrückt wurde
basic.forever(function() {
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen();
        basic.showNumber(1);
    } else if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen();
        basic.showString("A");
    } else if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen();
        basic.showString("B");
    }
})

/*input.onButtonPressed(Button.A, () => {
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
*/
