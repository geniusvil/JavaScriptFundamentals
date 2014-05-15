function IsInCircle() {
    var inputX = jsConsole.readFloat("#inputX");
    var inputY = jsConsole.readFloat("#inputY");
    var radius = 5;
    if ((inputX * inputX + inputY * inputY) < radius * radius) {
        jsConsole.writeLine("A Point (" + inputX + "," + inputY + ") is WITHIN a circle K(0,5).");
    }
    else {
        jsConsole.writeLine("A Point (" + inputX + "," + inputY + ") is OUTSIDE a circle K(0,5).");
    }

}