function execute() {
    var text = jsConsole.read("#inputText"),
        substr = jsConsole.read("#inputWord"),
        regexp
    count = 0;

    if (document.getElementById("sensitive").checked === true) {
        regexp = new RegExp(substr, "g");
    }
    else if (document.getElementById("insensitive").checked === true) {
        regexp = new RegExp(substr, "gi");
    }

    count = text.match(regexp).length;

    jsConsole.writeLine("Word [" + substr + "] count = " + count);
};

//http://www.w3schools.com/jsref/jsref_replace.asp