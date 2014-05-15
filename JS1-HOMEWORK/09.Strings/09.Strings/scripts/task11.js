function execute() {
    var input = jsConsole.read("#text");
    //{0}, {1}, {3} text {2}
    var inputWords = jsConsole.read("#words").trim().
                                replace(/\./g, " ").
                                replace(/,/g, " ").
                                replace(/;/g, " ").
                                replace(/:/g, " ").
                                replace(/"/g, " ").
                                replace(/'/g, " ").
                                replace(/{/g, " ").
                                replace(/}/g, " ").
                                replace(/-/g, " "),

    wordsTemp = inputWords.split(" ");
    var wordsArray = []; //no whitespace in the array az an elements;

    for (var i = 0; i < wordsTemp.length; i++) {
        if (wordsTemp[i] !== "") {
            wordsArray.push(wordsTemp[i]);
        }
    }

    var output = stringFormat(input, wordsArray);

    jsConsole.writeLine(output);
}
function stringFormat(text, wordsArray) {
    var strB = buildStringBuilder();
    var beggining = 0;
    var index = text.indexOf("{");
    while (index > -1) {
        var number = parseInt(text.substr(index + 1, 1));
        strB.append(text.substring(beggining, index - 1) + " ");
        strB.append(wordsArray[number] + " ");
        //jsConsole.writeLine(strB.toString());
        beggining = index + 3;
        index = text.indexOf("{", index + 1);
    }
    return strB.toString();
}
function buildStringBuilder() {
    return {
        strs: [],
        len: 0,
        append: function (str) {
            this.strs[this.len++] = str;
            return this;
        },
        toString: function () {
            return this.strs.join("");
        }
    };
}