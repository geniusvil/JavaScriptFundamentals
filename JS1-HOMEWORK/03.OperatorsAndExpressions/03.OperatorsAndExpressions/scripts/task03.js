function RectangularArea() {
    var inputSideA = jsConsole.readFloat("#inputSideA");
    var inputSideB = jsConsole.readFloat("#inputSideB");
    var area = inputSideA * inputSideB;
    jsConsole.writeLine("The area of rectangular with side " + inputSideA + " and side " + inputSideB + " is " + area + ".");
}