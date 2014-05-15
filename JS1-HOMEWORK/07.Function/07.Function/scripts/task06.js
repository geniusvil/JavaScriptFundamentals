function isItBigger() {
    //during debugging throws an error - not effecting the result???IsItBigger1Neighbor is not defined
    var inputArray = jsConsole.read("#inputArray").split(jsConsole.read("#separator")),
        inputPosition = jsConsole.readInteger("#inputNum"),
        arrayNum = new Array(),
        i,
        Is2Neighbors = false;

    // jsConsole.writeLine(inputArray.join(" "));
    for (i = 0; i < inputArray.length; i++) {
        arrayNum.push(parseInt(inputArray[i]));
    }

    Is2Neighbors = chekingForNeighbrors(arrayNum, inputPosition);

    if (Is2Neighbors === true) {
        IsItBigger2Neighbors(arrayNum, inputPosition);
        jsConsole.writeLine();
    }
    else {
        IsItBigger1Neighbors(arrayNum, inputPosition);
        //here the error appear! and the next line is not printed
        jsConsole.writeLine();

    }
}

function chekingForNeighbrors(arrayNum, inputPosition) {

    if (inputPosition === 0 || inputPosition === arrayNum.length - 1) {
        jsConsole.writeLine("The asked number on position " + inputPosition + " has only one neighbor ");
        return false;
    }
    else {
        return true;
    }
}

function IsItBigger1Neighbor(arrayNum, inputPosition) {

    if (inputPosition === 0) {

        if (arrayNum[inputPosition] > arrayNum[inputPosition + 1]) {
            jsConsole.writeLine("and is bigger than it.");
        }
        else {
            jsConsole.writeLine("and is NOT bigger than it.");
        }
    }
    else if (inputPosition === arrayNum.length - 1) {

        if (arrayNum[inputPosition] > arrayNum[inputPosition - 1]) {
            jsConsole.writeLine("and is bigger than it.");
        }
        else {
            jsConsole.writeLine("and is NOT bigger than it.");
        }
    }
}

function IsItBigger2Neighbors(arrayNum, inputPosition) {
    if (arrayNum[inputPosition] > arrayNum[inputPosition - 1] && arrayNum[inputPosition] > arrayNum[inputPosition + 1]) {
        jsConsole.write("It is bigger than its neighbors");
    }
    else {
        jsConsole.write("It is NOT bigger than its neighbors.");
    }
}