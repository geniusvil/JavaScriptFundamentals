function Solve(args) {
    var matrix = creatMatrix(args);

   
    var countMaxLength = 0;
    var maxLengthHor = searchMaxLenghtHorizont(matrix);
    var maxLengthVer = searchMaxLenghtVertical(matrix);
    // колони  в търсена на маь вер дължина
    

    var maxLength = Math.max(maxLengthVer, maxLengthHor);

    // counting maxLength lines in horizontal direction
    //var countHor = countMaxLenghtLinesHorizont(matrix, maxLength);

    // counting maxLength lines in vertical direction
    //var countVer = countMaxLenghtLinesVertical(matrix, maxLength);
    
    if (maxLength === maxLengthHor) {
        var countHor = countMaxLenghtLinesHorizont(matrix, maxLength);
        countMaxLength += countHor;
    }
    if (maxLength === maxLengthVer) {
        var countVer = countMaxLenghtLinesVertical(matrix, maxLength);
        countMaxLength += countVer;
    }


    if (maxLength === 1) {
        countMaxLength *= 2;
    }

    console.log(maxLength);
    console.log(countMaxLength);
}

function searchMaxLenghtHorizont(matrix) {
    
    var maxLengthHor = 0;

    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length ; j++) {
            var currentElement = currentRow[j];
            if (currentElement === "1") {
                var currentLengthHor = 1;
                if (j !== currentRow.length - 1) {
                    for (var m = j + 1; m < currentRow.length; m++) {

                        var nextElement = currentRow[m];
                        if (currentElement === nextElement) {
                            currentLengthHor++;
                        }
                       
                            if (currentLengthHor >= maxLengthHor) {
                                maxLengthHor = currentLengthHor;
                            }
                            j = m - 1;
                            break;
                     
                    }
                }
                //else {
                //    if (currentLengthHor >= maxLengthHor) {
                //        maxLengthHor = currentLengthHor;

                //    }
                //}
            }


        }
    }
    return maxLengthHor;
}

function countMaxLenghtLinesHorizont(matrix, maxLength) {
    var countMaxLength = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length ; j++) {
           var  currentElement = currentRow[j];
            if (currentElement === "1") {
               var  currentLengthHor = 1;
                if (j !== currentRow.length - 1) {
                    for (var m = j + 1; m < currentRow.length; m++) {

                        var nextElement = currentRow[m];
                        if (currentElement === nextElement) {
                            currentLengthHor++;
                        }
                        else {
                            if (currentLengthHor === maxLength) {
                                countMaxLength++;
                            }
                            j = m - 1;
                            break;
                        }
                    }
                }
                else {
                    if (currentLengthHor === maxLength) {
                        countMaxLength++;

                    }
                }
            }


        }
    }
    return countMaxLength;
}

function countMaxLenghtLinesVertical(matrix, maxLength) {
    var column = 0;
    var countMaxLength = 0;
    while (column < 8) {
        for (var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            var currentElement = currentRow[column];

            if (currentElement === "1") {
               var  currentLengthVer = 1;

                if (i !== currentRow.length - 1) {
                    for (var j = i + 1; j < matrix.length; j++) {
                       var  nextRow = matrix[j];
                       var  nextElement = nextRow[column];

                        if (currentElement === nextElement) {
                            currentLengthVer++;
                        }
                        else {
                            if (currentLengthVer === maxLength) {
                                countMaxLength++;
                               
                            }
                            i = j - 1;
                            break;
                        }
                    }
                }
                else {
                    if (currentLengthVer >= maxLength) {
                        countMaxLength++;
                    }
                }
            }
        }
        column++;
    }

    return countMaxLength;
}

function searchMaxLenghtVertical(matrix) {
    var maxLengthVer = 0;
    var column = 0;
    while (column < 8) {


        for (i = 0; i < matrix.length; i++) {
           var  currentRow = matrix[i];
           var  currentElement = currentRow[column];

            if (currentElement === "1") {
                var currentLengthVer = 1;

                if (i !== currentRow.length - 1) {
                    for (var j = i + 1; j < matrix.length; j++) {
                        var nextRow = matrix[j];
                        var nextElement = nextRow[column];

                        if (currentElement === nextElement) {
                            currentLengthVer++;
                        }
                       
                            if (currentLengthVer >= maxLengthVer) {
                                maxLengthVer = currentLengthVer;
                            }
                            i = j - 1;
                            break;
                       
                    }
                }
                else {
                    if (currentLengthVer >= maxLengthVer) {
                        maxLengthVer = currentLengthVer;

                    }
                }
            }
        }
        column++;
    }

    return maxLengthVer;
}

function creatMatrix(args) {
    var matrix = [];

    for (var i = 0; i < 8; i++) {
        var binaryNumber = args[i].toString(2);
        if (binaryNumber.length < 8) {
            binaryNumber = padLeft(binaryNumber, 8, "0");
        }
        matrix.push(binaryNumber);
    }

    return matrix;
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

function handleSolveIO() {
   // var args = [8, 72, 8, 8, 16, 28, 240, 0];
  var args = [246, 247, 248, 249, 250, 251, 252, 253];

    Solve(args);
}

handleSolveIO();