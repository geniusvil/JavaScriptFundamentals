function FindMinMax() {
    var input = jsConsole.read("#input").trim(),

    arrayToken = input.split(" "),

     arrayNum = new Array(arrayToken.length),
     i;

    for (i = 0; i < arrayNum.length; i++) {

        arrayNum[i] = parseInt(arrayToken[i]);
    }
    jsConsole.writeLine("Given Array: " + arrayNum.join(" "));

    arrayNum.sort(orderBy);
    jsConsole.writeLine("Sorted Array: " + arrayNum.join(" "));
    jsConsole.writeLine("Min element is " + arrayNum[0] + ", Max element is " + arrayNum[arrayNum.length - 1]);
    jsConsole.writeLine();
}
function orderBy(a, b) {
    return (a === b) ? 0 : (a > b) ? 1 : -1;
};