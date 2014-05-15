function OddOrEven() {
    var inputNumber = jsConsole.readFloat("#inputNumber");
    if (inputNumber % 2 === 0) {
        jsConsole.writeLine("The input number " + inputNumber + " is even.");
    }
    else {
        jsConsole.writeLine("The input number " + inputNumber + " is odd.");
    }
}