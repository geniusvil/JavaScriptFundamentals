function mostFrequentNumber() {
    var inputFirstTokens = jsConsole.read("#firstArray"),

        inputArray = inputFirstTokens.split(" "),

        arrayNum = new Array(),

        i, j,
        count = 1,
        maxCount = 0,
        elements = new Array();

    for (i = 0; i < inputArray.length; i++) {
        arrayNum[i] = parseInt(inputArray[i]);

    }
    //jsConsole.writeLine(arrayNum.join(".."));



    for (i = 0; i < arrayNum.length - 1; i++) {
        count = 1;
        for (j = i + 1; j < arrayNum.length; j++) {
            if (arrayNum[i] === arrayNum[j]) {
                count++;
            }
            if (count > maxCount) {
                maxCount = count;
            }
        }
    }

    for (i = 0; i < arrayNum.length - 1; i++) {
        count = 1;
        for (j = i + 1; j < arrayNum.length; j++) {
            if (arrayNum[i] === arrayNum[j]) {
                count++;
            }

        }
        if (count === maxCount) {

            elements.push(arrayNum[i]);
        }
    }
    if (elements.length === 1) {
        jsConsole.writeLine("Number " + elements[0] + " is in the array " + maxCount + " times.");
    }
    else {
        jsConsole.writeLine("Each number " + elements.join(", ") + " appears " + maxCount + " times.");

    }

}