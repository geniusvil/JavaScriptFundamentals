function FindNumbers() {
    var inputNumber = jsConsole.readInteger("#inputNumber").trim();
    var i;
    for (i = 1; i <= inputNumber; i++) {
        if (i % 21 !== 0) {
            jsConsole.write(i + " ");

        }
    }
    jsConsole.writeLine();
}