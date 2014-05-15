function IsThirdDigitIs7() {
    var inputNumber = jsConsole.readFloat("#inputNumber");

    var inputIntNumber = parseInt(inputNumber / 100)
    if (inputIntNumber % 10 === 7) {
        jsConsole.writeLine("Third digit of number " + inputNumber + " is 7.");
    }
    else {
        jsConsole.writeLine("Third digit of number: " + inputNumber + " is NOT 7.");
    }
}