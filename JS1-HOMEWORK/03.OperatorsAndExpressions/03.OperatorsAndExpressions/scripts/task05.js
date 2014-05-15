function WhatIsThe3thBit() {
    var inputNumber = jsConsole.readFloat("#inputNumber");

    var position = 3;
    var mask = 1 << position;
    var resultWithMask = inputNumber & mask;
    var bit = resultWithMask >> position;

    jsConsole.writeLine("Third bit of number " + inputNumber + " is " + bit + ".");

}