function BiggerOfThree() {
    var inputFistNum = jsConsole.readInteger("#inputFirstNumber");
    var inputSecondNum = jsConsole.readInteger("#inputSecondNumber");
    var inputThirdNum = jsConsole.readInteger("#inputThirdNumber");
    var inputFourthNum = jsConsole.readInteger("#inputFourthNumber");
    var inputFifthNum = jsConsole.readInteger("#inputFifthNumber");
    var theGreatest = inputFistNum;

    if (theGreatest < inputSecondNum) {
        theGreatest = inputSecondNum;
    }
    if (theGreatest < inputThirdNum) {
        theGreatest = inputThirdNum;
    }
    if (theGreatest < inputFourthNum) {
        theGreatest = inputFourthNum;
    }
    if (theGreatest < inputFifthNum) {
        theGreatest = inputFifthNum;
    }

    jsConsole.writeLine("The greatest of the input numbers " + inputFistNum + ", " + inputSecondNum + ", " + inputThirdNum + ", " + inputFourthNum + " and " + inputFifthNum + " is " + theGreatest + ".");
}