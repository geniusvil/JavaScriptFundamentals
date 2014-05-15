function execute() {
    var inputArray = jsConsole.read("#inputArray").split(jsConsole.read("#separator")),
        arrayNum = new Array(),
        i;
  
    for (i = 0; i < inputArray.length; i++) {
        arrayNum.push(parseInt(inputArray[i]));
    }

    var result = findIndex(arrayNum);

    jsConsole.writeLine(result);
}

function findIndex(arrayNum) {
    var result = -1;
    for (var index = 0; index < arrayNum.length - 1; index++) {

        if (arrayNum[index] > arrayNum[index - 1] && arrayNum[index] > arrayNum[index + 1]) {
            result = index;
            break;
        }
    }
    if (result===-1)
    {
        if (arrayNum[arrayNum.length - 1] > arrayNum[arrayNum.length - 2]) {
            result = arrayNum.length - 1;
        }
    }
    return result;
}