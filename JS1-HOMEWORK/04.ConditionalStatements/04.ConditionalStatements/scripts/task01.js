function BiggerOfTwo() {
    var inputFistNum = jsConsole.readInteger("#inputFirstNumber");
    var inputSecondNum = jsConsole.readInteger("#inputSecondNumber");
    if (inputFistNum == undefined || inputSecondNum == undefined) {//???????????????????????????????????
        jsConsole.writeLine("The is no numbers.");
    }
    else if (inputFistNum == inputSecondNum) {
        jsConsole.writeLine("Numbers are equal.");
    }
    else if (inputFistNum > inputSecondNum) {
        jsConsole.writeLine("Fist number " + inputFistNum + " is bigger than the second number " + inputSecondNum + ".");
        jsConsole.writeLine("In other words " + inputFistNum + " > " + inputSecondNum + ".");
    }
    else {
        jsConsole.writeLine("Second number " + inputSecondNum + " is bigger than the first number " + inputFistNum + ".");
        jsConsole.writeLine("In other words " + inputFistNum + " < " + inputSecondNum + ".");

    }
}