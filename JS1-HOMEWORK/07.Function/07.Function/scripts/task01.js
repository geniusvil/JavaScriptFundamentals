function Execute() {
    var inputToken = jsConsole.readInteger("#inputNumber");
    var digitsInWords = findLastDigit(inputToken);

    printResult(digitsInWords, inputToken);

}
function findLastDigit(inputToken) {
    var lastDigit = inputToken % 10;
    return switchDigits(lastDigit);
}

function printResult(digitsInWords, number) {
    jsConsole.writeLine(number + " -> " + digitsInWords);
}

function switchDigits(name) {
    switch (name) {
        case 0: return "zero"; break;
        case 1: return "one"; break;
        case 2: return "two"; break;
        case 3: return "three"; break;
        case 4: return "four"; break;
        case 5: return "five"; break;
        case 6: return "six"; break;
        case 7: return "seven"; break;
        case 8: return "eight"; break;
        case 9: return "nine"; break;
        default: return "Unknown number"; break;
    }
}