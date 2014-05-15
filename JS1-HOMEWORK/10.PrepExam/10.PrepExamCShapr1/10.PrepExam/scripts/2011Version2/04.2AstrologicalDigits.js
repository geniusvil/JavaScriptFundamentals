function Solve(args) {
    var number = args[0] -0;

    if (number < 0) {
        number = -number;
    }

    var numberString = number.toString();
    var indexDot = numberString.indexOf(".");
    
    if (indexDot > 0) {
        numberString = removeDotFromFloatNumber(numberString);
    }

    var sum = 0;

    while (true) {


        for (var i = 0; i < numberString.length; i++) {
            var currentNumber = parseInt(numberString[i]);
            sum += currentNumber;
        }
        if (sum <= 9) {
            break;
        }
        numberString = sum.toString();
        sum = 0;
    }

    function removeDotFromFloatNumber(number) {
        var numberString = number.toString();
        var indexDot = numberString.indexOf(".");
        var result = "";

        for (var i = 0; i < numberString.length; i++) {
            var currentChar = numberString[i];
            // защо currentChar !=="." неработеше????????????????????????
            if (i !== indexDot) {
                result += currentChar;
            }
        }

        return result;
    }

    return sum;
}


function handleSolveIO() {
    //var args = [8];
   var args = [-1337.0];
  // var args = [1234567.8900];


    console.log(Solve(args));
}

handleSolveIO();