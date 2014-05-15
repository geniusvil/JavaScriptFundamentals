function NameOfNumber() {//da se prenapi[e?????????????????????
    var inputNumber = jsConsole.read("#inputNumber");

    var firstDigit,
        secondDigit,
        thirdDigit,

        digitTo9 = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
    numberTo19 = ["None", "Eleven", "Twelve", "Thirteen", "Fourteen", "fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
    numberTo90 = ["None", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (inputNumber.length === 3) {
        firstDigit = parseInt(inputNumber[0]);
        secondDigit = parseInt(inputNumber[1]);
        thirdDigit = parseInt(inputNumber[2]);
    }
    else if (inputNumber.length === 2) {
        firstDigit = 0
        secondDigit = parseInt(inputNumber[0]);
        thirdDigit = parseInt(inputNumber[1]);
    }
    else if (inputNumber.length === 1) {
        firstDigit = 0
        secondDigit = 0;
        thirdDigit = parseInt(inputNumber);
    }




    if ((firstDigit === 0) && (secondDigit === 0) && (thirdDigit === 0)) {
        jsConsole.writeLine("0 -> Zero");
    }

    if (firstDigit != 0) {
        if ((secondDigit != 0) && (thirdDigit != 0)) {
            if (secondDigit > 1) {
                jsConsole.writeLine(inputNumber + " -> " + digitTo9[firstDigit] + " hundred " + numberTo90[secondDigit] + " " + digitTo9[thirdDigit]);
            }
            else {
                if (secondDigit == 1) {
                    jsConsole.writeLine(inputNumber + " -> " + digitTo9[firstDigit] + " hundred and " + numberTo19[thirdDigit]);
                }
            }
        }
        else {
            if ((secondDigit == 0) && (thirdDigit == 0)) {
                jsConsole.writeLine(inputNumber + " -> " + digitTo9[firstDigit] + " hundred ");
            }
            else {
                if ((secondDigit == 0) && (thirdDigit != 0)) {
                    jsConsole.writeLine(inputNumber + " -> " + digitTo9[firstDigit] + " hundred and " + digitTo9[thirdDigit]);
                }

                else {
                    if ((secondDigit != 0) && (thirdDigit == 0)) {
                        jsConsole.writeLine(inputNumber + " -> " + digitTo9[firstDigit] + " hundred and " + numberTo90[secondDigit]);
                    }
                    else {
                        if ((secondDigit == 1) && (thirdDigit != 0)) {
                            jsConsole.writeLine(inputNumber + "  -> " + digitTo9[firstDigit] + " hundred and " + numberTo19[thirdDigit]);
                        }
                    }
                }
            }
        }
    }
    else {
        if ((secondDigit === 0) && (thirdDigit !== 0)) { //ima gre[ka
            jsConsole.writeLine(inputNumber + " -> " + digitTo9[thirdDigit]);
        }
        else {
            if ((secondDigit != 0) && (thirdDigit != 0)) {
                if (secondDigit == 1) {
                    jsConsole.writeLine(inputNumber + " -> " + numberTo19[thirdDigit]);
                }
                else {
                    if (secondDigit > 1) {
                        jsConsole.writeLine(inputNumber + " -> " + numberTo90[secondDigit] + " and " + digitTo9[thirdDigit]);
                    }
                }
            }
            else {
                if ((secondDigit != 0) && (thirdDigit == 0)) {
                    jsConsole.writeLine(inputNumber + " -> " + numberTo90[secondDigit]);
                }
            }
        }
    }
}