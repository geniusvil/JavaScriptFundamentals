function FindSign() {
    var inputFistNum = jsConsole.readFloat("#inputFirstNumber");
    var inputSecondNum = jsConsole.readFloat("#inputSecondNumber");
    var inputThirdNum = jsConsole.readFloat("#inputThirdNumber");
    if (inputFistNum == 0 || inputSecondNum == 0 || inputThirdNum == 0) {
        jsConsole.writeLine("The product has no sign");

    }
    else if ((inputFistNum > 0) && (inputSecondNum > 0)) {
        if (inputThirdNum > 0) {
            jsConsole.writeLine("The product is with POSITIVE sign");
        }
        else {
            jsConsole.writeLine("The product is with NEGATIVE sign");
        }
    }
    if ((inputFistNum > 0) && (inputSecondNum < 0)) {
        if (inputThirdNum > 0) {
            jsConsole.writeLine("The product is with NEGATIVE sign");
        }
        else {
            jsConsole.writeLine("The product is with POSITIVE sign");
        }
    }
    if ((inputFistNum < 0) && (inputSecondNum > 0)) {
        if (inputThirdNum > 0) {
            jsConsole.writeLine("The product is with NEGATIVE sign");
        }
        else {
            jsConsole.writeLine("The product is with POSITIVE sign");
        }
    }
    if ((inputFistNum < 0) && (inputSecondNum < 0)) {
        if (inputThirdNum > 0) {
            jsConsole.writeLine("The product is with POSITIVE sign");
        }
        else {
            jsConsole.writeLine("The product is with NEGATIVE sign");
        }
    }
}