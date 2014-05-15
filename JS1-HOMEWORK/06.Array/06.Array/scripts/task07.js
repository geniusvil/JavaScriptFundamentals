function findIndex() {
    var inputSequence = jsConsole.read("#inputSequence").split(" "),
        inputNumber = jsConsole.readInteger("#inputNumber"),
        indexResult = -1;
    i = 0;
    var arrayNumbers = sortArray(inputSequence);
    jsConsole.writeLine("Sorted array: " + arrayNumbers.join(" "));


    for (i = 0; i < arrayNumbers.length; i++) {

        if (inputNumber === arrayNumbers[i]) {
            indexResult = i;
            break;
        }
    }

    jsConsole.writeLine("Ordinary search: " + indexResult);
}

function findIndexBinaryWay() {
    var inputSequence = jsConsole.read("#inputSequence").split(" "),
        inputNumber = jsConsole.readInteger("#inputNumber"),
        indexResult = -1,
        arrayNumbers = new Array(),
        minIndex = 0,
        maxIndex = inputSequence.length - 1;

    arrayNumbers = sortArray(inputSequence);
    jsConsole.writeLine("Sorted array: " + arrayNumbers.join(" "));

    if (isNaN(inputNumber)) {
        alert("You have NOT entered a number!");
        location.reload();
    }



    while (minIndex <= maxIndex) {
        var middleIndex = minIndex + (maxIndex - minIndex) / 2;
        middleIndex = Math.floor(middleIndex);
        if (arrayNumbers[middleIndex] > inputNumber) {
            maxIndex = middleIndex - 1;
        }
        else if (arrayNumbers[middleIndex] < inputNumber) {
            minIndex = middleIndex + 1;
        }
        else {
            indexResult = middleIndex;
            break;
        }
    }

    jsConsole.writeLine("Binary search: " + indexResult);
}


function sortArray(inputSequence) {
    var arrayNum = new Array(),
        i;

    for (i = 0; i < inputSequence.length; i++) {
        arrayNum.push(parseInt(inputSequence[i]));

    }

    for (i = 0; i < arrayNum.length; i++) {
        var currMin = i;

        for (var j = i + 1; j < arrayNum.length; j++) {
            if (arrayNum[currMin] > arrayNum[j]) {
                currMin = j;
            }
        }

        var helper = arrayNum[i];
        arrayNum[i] = arrayNum[currMin];
        arrayNum[currMin] = helper;
    }

    return arrayNum;
}