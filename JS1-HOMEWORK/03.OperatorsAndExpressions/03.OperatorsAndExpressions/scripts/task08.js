function TrapezoidArea() {
    var inputSideA = jsConsole.readFloat("#inputSideA");
    var inputSideB = jsConsole.readFloat("#inputSideB");
    var inputHeight = jsConsole.readFloat("#inputHeight");
    var area = ((inputSideA + inputSideB) * inputHeight) / 2;
    jsConsole.writeLine("The area of trapezoid with sides " + inputSideA + " and " + inputSideB + ", and height " + inputHeight + " is " + area + ".");
}