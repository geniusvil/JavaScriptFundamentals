function PrintSequence() {
    var inputNumber = jsConsole.readInteger("#inputNumber").trim();
    var i;
    for (i = 1; i <= inputNumber; i++) {
        jsConsole.write(i + " ");

    }
    jsConsole.writeLine();
}