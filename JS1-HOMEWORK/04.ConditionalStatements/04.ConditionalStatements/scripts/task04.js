function SortThreeNumbers() {
    var inputFirstNum = jsConsole.readFloat("#inputFirstNumber");
    var inputSecondNum = jsConsole.readFloat("#inputSecondNumber");
    var inputThirdNum = jsConsole.readFloat("#inputThirdNumber");

    if (inputFirstNum > inputSecondNum) {
        if (inputSecondNum > inputThirdNum) {
            jsConsole.writeLine(inputFirstNum + " " + inputSecondNum + " " + inputThirdNum);
        }
        else {
            if (inputFirstNum > inputThirdNum) {
                jsConsole.writeLine(inputFirstNum + " " + inputThirdNum + " " + inputSecondNum);
            }
            else {
                jsConsole.writeLine(inputThirdNum + " " + inputFirstNum + " " + inputSecondNum);
            }
        }
    }
    else {
        if (inputSecondNum > inputThirdNum) {
            if (inputFirstNum > inputThirdNum) {
                jsConsole.writeLine(inputSecondNum + " " + inputFirstNum + " " + inputThirdNum);
            }
            else {
                jsConsole.writeLine(inputSecondNum + " " + inputThirdNum + " " + inputFirstNum);
            }
        }
        else {
            jsConsole.writeLine(inputThirdNum + " " + inputSecondNum + " " + inputFirstNum);
        }
    }
}