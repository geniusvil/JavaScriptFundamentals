function Solve(args) {
    var variables = [];
    var result = 0;

    for (var i = 0; i < args.length; i++) {
        var input = args[i].trim();
        var currentLine = input.substr(0, input.length - 1);
        var indexBracket = currentLine.indexOf('[');
        var numbersAsString = currentLine.substr(indexBracket + 1);
        var numbers = numbersAsString.split(' ').join('').split(',').filter(function (element) {
            if (element !== '') {
                return element;
            }
        });
        var countNumbers = numbers.length;
        for (var j = 0; j < countNumbers; j++) {
            var currentNumber = parseFloat(numbers[0]);
            if (!currentNumber && currentNumber.toString() !=="0") {
                currentNumber = variables[numbers[0]];
                if (typeof (currentNumber) !== "number") {
                    for (var q = 0; q < currentNumber.length; q++) {
                        numbers.push(currentNumber[q]);
                    }
                } else {
                    numbers.push(currentNumber);
                }
            } else {
                numbers.push(currentNumber);
            }
            numbers.shift();
        }

        numbers = numbers.filter(function (element) {
            if (typeof (element) === "number") {
                return element;
            }
        });

        var commandLine = currentLine.substring(0, indexBracket).split(' ').filter(function (element) {
            if (element !== '') {
                return element;
            }
        });
        if (i !== args.length - 1) {
            if (commandLine[0] === "def") {
                var key = commandLine[1];
                var command = commandLine[2];
            }
            else {
                 key = commandLine[0];
                 command = commandLine[1];
            }
           
            if (!command) {
                variables[key] = numbers;
                continue;
            }
        } else {
            if (commandLine.length === 1) {
                command = commandLine[0];
            } else {
                command = commandLine[1];
            }
        }

        countNumbers = numbers.length;
        if (command === "min") {
            var min = Number.MAX_VALUE;
            for (var n = 0; n < countNumbers; n++) {
                currentNumber = numbers[n];

                if (min > currentNumber) {
                    min = currentNumber;
                }
            }
            value = min;
        } else if (command === "max") {
            var max = Number.MIN_VALUE;
            for (n = 0; n < countNumbers; n++) {
                currentNumber = numbers[n];
                if (max < currentNumber) {
                    max = currentNumber;
                }
            }
            value = max;
        } else if (command === "avg" || command === "sum") {
            var sum = 0;
            for (n = 0; n < numbers.length; n++) {
                currentNumber = numbers[n];
                sum += currentNumber;
            }
            if (command === "avg") {
                value = (sum / countNumbers) | 0;
            } else {
                value = sum;
            }
        }
        if (i !== args.length - 1) {
            variables[key] = value;
        } else {
            result = value;
        }
    }

    return result;
}

//that part not for bgcoder
function handleSolveIO() {
    //var args = [
    //    "def func sum[   5, 3, 7, 2, 6, 3]",
    //    "def func2 [5, 3, 7, 2, 6, 3]",
    //    "def func3 min[func2]",
    //    "def func4 max[5, 3, 7, 2, 6, 3]",
    //    "def func5 avg[5, 3, 7, 2, 6, 3]",
    //    "def func6 sum[func2, func3, func4 ]",
    //    "sum[func6, func4]"
    //];

    //var args = [
    //"def func sum[1, 2, 3, -6]",
    // "def newList [func, 10, 1]",
    // "def newFunc sum[func, 100, newList]",
    // "[newFunc]"];

    //def maxy max[100]
    //def summary [0]
    //combo [maxy, maxy,maxy,maxy, 5,6]
    //summary sum[combo, maxy, -18000]
    //def pe6o avg[summary,maxy]
    //sum[7, pe6o]


    console.log(Solve(args));
};
handleSolveIO();