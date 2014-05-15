function IsItPrime() {
    var inputNumber = jsConsole.readInteger("#inputNumber");

    var countDivivers = 0;

    if (inputNumber < 0) {
        jsConsole.writeLine("Please enter Positive number.");
    }

    else if (inputNumber < 2) {
        jsConsole.writeLine("The Number " + inputNumber + " is NOT prime.");
    }

    else {

        for (var i = 2; i <= Math.sqrt(inputNumber) ; i++) {
            if (inputNumber % i == 0) {
                countDivivers++;
                //jsConsole.writeLine("The Number " + inputNumber + " is NOT prime.");
                break;

            }
        }

        if (countDivivers == 0) {
            jsConsole.writeLine("The Number " + inputNumber + " IS prime.");
        }
        else {
            jsConsole.writeLine("The Number " + inputNumber + " is NOT prime.");
        }
    }
}