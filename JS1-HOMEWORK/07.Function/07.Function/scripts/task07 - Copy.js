function findIndex() {
    var inputArray = jsConsole.read("#inputArray").split(jsConsole.read("#separator")),
        inputNum = jsConsole.readInteger("#inputNum"),
        arrayNum = new Array(),
        i,
        index = -10;

    // jsConsole.writeLine(inputArray.join(" "));
    for (i = 0; i < inputArray.length; i++) {
        arrayNum.push(parseInt(inputArray[i]));
    }

    index = arrayNum.indexOf(inputNum);

    var lengthArray = arrayNum.length - 1;
    if (index < 0) {
        jsConsole.writeLine("No such number in the array");
    }
    else if (index === 0 || index === arrayNum.length - 1) {
        jsConsole.write("Has ONE neighbor ")
        checkingWithOneNeighbor(arrayNum, index);

    }
    else {
        checkingWithTwoNeighbors(arrayNum, index);

    }
}

function checkingWithOneNeighbor(arrayNum, index) {

    if (index === 0) {

        if (arrayNum[index] > arrayNum[index + 1]) {
            jsConsole.writeLine("is bigger than it.");
        }
        else {
            jsConsole.writeLine("and is NOT bigger than it.");
        }
    }
    else if (index === arrayNum.length - 1) {

        if (arrayNum[index] > arrayNum[index - 1]) {
            jsConsole.writeLine("and is bigger than it.");
        }
        else {
            jsConsole.writeLine("and is NOT bigger than it.");
        }
    }
}

function checkingWithTwoNeighbors(arrayNum, index) {

    if (arrayNum[index] > arrayNum[index - 1] && arrayNum[index] > arrayNum[index + 1]) {
        jsConsole.writeLine("It is bigger than its neighbors");
    }
    else {
        jsConsole.writeLine("It is NOT bigger than its neighbors.");
    }
}