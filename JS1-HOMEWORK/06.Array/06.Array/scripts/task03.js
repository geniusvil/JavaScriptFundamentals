function findSequence() {
    var inputFirstTokens = jsConsole.read("#firstArray").trim(),
        inputArray = inputFirstTokens.split(" "),
        i,
        count = 1,
        maxLength = 0,
        someNumber = "",
        theNumber = "";

    for (i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] == inputArray[i + 1]) {
            count++;
            someNumber = inputArray[i];

        }
        else {
            count = 1;
            someNumber = "";
        }
        if (count > maxLength) {
            maxLength = count;
            theNumber = someNumber;
        }
    }

    for (i = 0; i < maxLength; i++) {
        jsConsole.write(theNumber + " ");
    }
    jsConsole.writeLine();
}
//2 1 1 2 3 3 2 2 2 2