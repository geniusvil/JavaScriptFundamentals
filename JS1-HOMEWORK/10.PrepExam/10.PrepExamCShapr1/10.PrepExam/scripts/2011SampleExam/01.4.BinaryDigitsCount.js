function Solve(args) {
    var digit = args[0].toString();

    var numbers = [];
    for (var i = 2; i < args.length; i++) {
        numbers.push(args[i]);
    }

    numbers = numbers.map(Number);
    var result = "";

    for ( i = 0; i < numbers.length; i++) {
        var currentNumber = numbers[i];

        var binaryNumber = currentNumber.toString(2);

        // var currentCount = CountDigit(binaryNumber, digit);

        var currentCount = 0;
        for (var j = 0; j < binaryNumber.length; j++) {
            var currentDigit = binaryNumber[j];
            if (currentDigit === digit) {
                currentCount++;
            }
        }

        //resultCounts.push(currentCount);
        result += currentCount.toString() + '\n';
    }
    // дали ще пропаботи при условие че работим с char
    function CountDigit(binaryNumber, digit) {
        var count = 0;
        for (var i = 0; i < binaryNumber.length; i++) {
            var currentDigit = binaryNumber[i];
            if (currentDigit === digit.toString()) {
                count++;
            }
        }

        return count;
    }

    return result;
}



function handleSolveIO() {
    var args = ["1", "10","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
   // var args = [0, 4, 20, 1337, 2147483648, 4000000000];
    //var args = [0, 6, 1, 4, 16, 64, 256, 1024];

    console.log(Solve(args));
};

handleSolveIO();