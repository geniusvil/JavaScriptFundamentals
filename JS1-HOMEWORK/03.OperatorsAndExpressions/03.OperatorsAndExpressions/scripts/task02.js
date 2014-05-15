function DividedBy35() {
    var inputNumber = jsConsole.readFloat("#inputNumber");
    if (inputNumber % 35 === 0) {
        jsConsole.writeLine("The input number " + inputNumber + " is divided by 5 and 7 at the same time.");
    }
    else {
        jsConsole.writeLine("The input number " + inputNumber + " is NOT divided by 5 and 7 at the same time.");
    }
}