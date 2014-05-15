function allocatesArray() {
    var input = jsConsole.read("#input");
    var array = new Array();

    for (i = 0; i < input; i++) {
        array.push(i * 5);
    }

    jsConsole.writeLine(array.join(", "));

    //another way
    for (i = 0; i < input; i++) {
        array[i] = i * 5;
    }
    jsConsole.writeLine(array.join(", "));
    jsConsole.writeLine();
}