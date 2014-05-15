function Solve(args) {
    var input = args[0].toString();
    var evenSum = 0;
    var oddSum = 0;

    for (var i = 0, len = input.length; i < len; i++) {
        var currentDigit = parseInt(input[i]);
        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        }
        else {
            oddSum += currentDigit;
        }
    }

    var result = "";

    if (evenSum > oddSum) {
        result += "apples " + evenSum;
    }
    else if (evenSum < oddSum) {
        result += "orange " + oddSum;
    } else {
        result += "both " + oddSum;

    }


    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [5872];
   // var args = [112];

    console.log(Solve(args));
}
handleSolveIO();