function Solve(args) {
    var input = args;

    var binaryNum = ConvertArrayOfIntToBinary(input);

    var pillar = 1;

    var resultSum = 0;
    var resultIndex = -1;


    while (pillar < 7) {
        var sumLeft = 0;
        var sumRight = 0;

        for (var i = 0; i < pillar; i++) {
            for (var m = 0; m < binaryNum.length; m++) {
                var currentBinaryNumber = binaryNum[m];
                if (currentBinaryNumber[i] === "1") {
                    sumLeft += 1;
                }
            }
        }

        for (var j = pillar+1; j < 8; j++) {
            for ( m = 0; m < binaryNum.length; m++) {
                 currentBinaryNumber = binaryNum[m];
                if (currentBinaryNumber[j] === "1") {
                    sumRight += 1;
                }
            }
        }

        if (sumLeft === sumRight) {
            resultSum=sumLeft;
            resultIndex = pillar;
            break;
        }

        pillar++;
    }

    var result = "";
    if (resultIndex === -1) {
        result = "No";
    }
    else {
        result+= (7 - resultIndex).toString() +'\n';
        result +=resultSum;

    }

    function ConvertArrayOfIntToBinary(input) {
        var binaryNum = [];
        for (var i = 0; i < input.length; i++) {
            var currentNumber = parseInt(input[i]);
            var currentBinaryNumber = currentNumber.toString(2);
            if (currentBinaryNumber.length < 8) {
                currentBinaryNumber = padLeft(currentBinaryNumber, 8, "0");
            }
            binaryNum.push(currentBinaryNumber);
        }
        return binaryNum;
    }

    function padLeft(str, count, sign) {
        var result = "";
        for (var i = 0; i < count - str.length; i++) {
            result += sign;
        }
        result += str;
        return result;
    }

    return result;
}


function handleSolveIO() {
    var args = [0, 64, 0, 8, 0, 12, 224, 0];
    //var args = [3,0,0,0,0,0,0,0];


   console.log( Solve(args));
}

handleSolveIO();