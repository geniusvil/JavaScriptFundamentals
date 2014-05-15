function BiggerOfThree() {
    var inputFistNum = jsConsole.readInteger("#inputFirstNumber");
    var inputSecondNum = jsConsole.readInteger("#inputSecondNumber");
    var inputThirdNum = jsConsole.readInteger("#inputThirdNumber");

    var theGreatest = inputFistNum;

    if (theGreatest < inputSecondNum) {
        theGreatest = inputSecondNum;
    }
    if (theGreatest < inputThirdNum) {
        theGreatest = inputThirdNum;
    }
    jsConsole.writeLine("The greatest of the input numbers " + inputFistNum + ", " + inputSecondNum + ", " + " and " + inputThirdNum + " is " + theGreatest + ".");
}