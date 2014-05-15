function howManyTimesInArray() {
    var inputArray = jsConsole.read("#inputArray").split(" "),
        inputNumber = jsConsole.readInteger("#inputNumber"),
        i,
        count = 0;
    time = "";

    for (i = 0; i < inputArray.length; i++) {
        if (parseInt(inputArray[i]) === inputNumber) {
            count++;
        }
    }

    if (count === 1 || count === 0) {
        time = "time";
    } else {
        time = "times";
    }

    jsConsole.writeLine(inputNumber + " apears in array [" + inputArray.join(", ") + "] - " + count + " " + time + ".");
};