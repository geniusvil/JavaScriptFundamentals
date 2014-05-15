function Solve(args) {
    var invertNumber = parseInt(args[0]);
    var inputNumbers = [];

    for (var i = 1; i < args.length; i++) {
        inputNumbers.push(parseInt(args[i]));
    }

    var result = "";

    for (var i = 0; i < inputNumbers.length; i++) {
        var number = parseInt(inputNumbers[i]);
        var numberInBinary = number.toString(2)
        var numberBinaryInvert = convertZeroesToOnesAndOnesToZeroes(numberInBinary);
         invertNumber = parseInt(numberBinaryInvert, 2); // first done

        var numberBinaryReversed = reverseString(numberInBinary);
        var reverseNumber = parseInt(numberBinaryReversed, 2); // second done

        var newNumber = (number ^ invertNumber) & reverseNumber;
        result += newNumber.toString()+'\n';

    }

    function convertZeroesToOnesAndOnesToZeroes(binaryNumber) {
        var result = "";

        for (var i = 0; i < binaryNumber.length; i++) {
             currentChar = binaryNumber[i];
            if (binaryNumber[i] === "1") {
                result += "0";
            }
            else {
                result += "1";
            }
        }

        return result.trim();
    }

    function reverseString(numberInBinary) {
        var result = "";

        for (var i = numberInBinary.length - 1; i >= 0; i--) {
            result += numberInBinary[i];
        }

        return result;
    }

    return result;
}


function handleSolveIO() {
    //var args =[1,2] ;
    var args =  [1, 19,248];

    console.log(Solve(args));
}

handleSolveIO();