function execute(firstPoint, secondPoint) {
    var string = jsConsole.read("#string"),
        reversedString = reverseWord(string);

    jsConsole.writeLine(reversedString);
}
function reverseWord(string) {
    return string.split('').reverse().join('');
}