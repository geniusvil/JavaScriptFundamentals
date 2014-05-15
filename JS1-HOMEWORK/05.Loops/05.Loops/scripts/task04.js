function FindProperty(obj) {

    var min = "z";
    var max = "a";

    for (var prop in obj) {

        if (prop > max) {
            max = prop;
        }

        if (prop < min) {
            min = prop;
        }
    }

    jsConsole.writeLine("Object: " + obj);
    jsConsole.writeLine("Min: " + min);
    jsConsole.writeLine("Max: " + max);
    jsConsole.writeLine();
}

FindProperty(document);
FindProperty(window);
FindProperty(navigator);