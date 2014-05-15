function execute() {
    var inputNumber = jsConsole.read("#inputNumber");
    var inputToken = inputNumber.split("");
    var reversedArray = inputToken.reverse();
    removeZeroFront(reversedArray);
    printResult(reversedArray, inputNumber);
}
function removeZeroFront(reversedArray) {
    while (reversedArray[0] == 0) {
        reversedArray.shift();
    }
    //return reversedArray;
}
function printResult(reversedArray, original) {
    jsConsole.writeLine(original + " -> " + reversedArray.join(""));
}