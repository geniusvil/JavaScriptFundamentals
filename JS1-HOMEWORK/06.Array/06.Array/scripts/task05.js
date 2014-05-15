function sortArray() {
    var inputFirstTokens = jsConsole.read("#firstArray"),

        inputArray = inputFirstTokens.split(" "),

        arrayNum = new Array(),

        i;

    for (i = 0; i < inputArray.length; i++) {
        arrayNum[i] = parseInt(inputArray[i]);

    }
    // jsConsole.writeLine(arrayNum.join(".."));

    for (i = 0; i < arrayNum.length; i++) {
        var currMin = i;
        for (var j = i + 1; j < arrayNum.length; j++) {
            if (arrayNum[currMin] > arrayNum[j]) {
                currMin = j;
            }
        }
        var helper = arrayNum[i];
        arrayNum[i] = arrayNum[currMin];
        arrayNum[currMin] = helper;
    }
    jsConsole.writeLine(arrayNum.join(".."));
}