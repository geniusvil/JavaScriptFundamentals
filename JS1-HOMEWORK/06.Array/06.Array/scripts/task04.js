function findSequence() {
    var inputArray = jsConsole.read("#firstArray").split(" "),

        arrayNum = new Array(),
        i,

        count = 1,
        maxLength = 0,
        someArray = new Array(),
        theArray = new Array();
    someArray.push(inputArray[0]);

    for (i = 0; i < inputArray.length ; i++) {
        arrayNum[i] = parseInt(inputArray[i]);

    }
    arrayNum.push("a");

    for (i = 0; i < arrayNum.length -1; i++) {
        if (arrayNum[i] < arrayNum[i + 1]) {
            count++;
            someArray.push(inputArray[i + 1]);

        }
        else {
            count = 1;
            someArray = new Array();
            someArray.push(inputArray[i + 1]);

        }

        if (count > maxLength) {
            maxLength = count;
            theArray = someArray;
        }
    }

    if (maxLength !== 1) {
        jsConsole.writeLine(theArray.join(" "));
    }
}
//2 1 1 2 3 3 2 2 2 1 2 3 4 5 