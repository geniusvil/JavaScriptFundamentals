function Solve(args) {
    var matrix = createMatrix(args);


    var countMaxLength = 0;
    var maxLengthHor = searchMaxLenghtHorizont(matrix);
    var maxLengthVer = searchMaxLenghtVertical(matrix);
    // колони  в търсена на маь вер дължина


    var maxLength = Math.max(maxLengthVer, maxLengthHor);


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
                            else {
                                j = m - 1;
                                break;
                            }
                            if (currentLengthHor >= maxLengthHor) {
                                maxLengthHor = currentLengthHor;
                            }
                          

                        }
                    }

                    if (currentLengthHor >= maxLengthHor) {
                        maxLengthHor = currentLengthHor;
                    }

                }


            }
        }


        return maxLengthHor;
    }

    function searchMaxLenghtVertical(matrix) {
        var maxLengthVer = 0;
        var column = 0;
        while (column < 8) {


            for (i = 0; i < matrix.length; i++) {
                var currentRow = matrix[i];
                var currentElement = currentRow[column];

                if (currentElement === "1") {
                    var currentLengthVer = 1;

                    if (i !== currentRow.length - 1) {
                        for (var j = i + 1; j < matrix.length; j++) {
                            var nextRow = matrix[j];
                            var nextElement = nextRow[column];

                            if (currentElement === nextElement) {
                                currentLengthVer++;
                            }
                            else {
                                i = j - 1;
                                break;
                            }
                            if (currentLengthVer >= maxLengthVer) {
                                maxLengthVer = currentLengthVer;
                            }
                            

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

    function countMaxLenghtLinesHorizont(matrix, maxLength) {
        var countMaxLength = 0;
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
                                if (currentLengthHor === maxLength) {
                                    countMaxLength++;
                                }
                            }
                            else {
                               
                                j = m;
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
                    var currentLengthVer = 1;

                    if (i !== currentRow.length - 1)
                        for (var j = i + 1; j < matrix.length; j++) {
                            var nextRow = matrix[j];
                            var nextElement = nextRow[column];

                            if (currentElement === nextElement) {
                                currentLengthVer++;
                                if (currentLengthVer === maxLength) {
                                    countMaxLength++;

                                }
                            } else {
                                
                                i = j ;
                                break;
                            }
                            
                        }
                    else {
                        if (currentLengthVer == maxLength) {
                            countMaxLength++;
                        }
                    }
                }
            }
            column++;
        }

        return countMaxLength;
    }

 

    function createMatrix(args) {
        var matrix = [];

        for (var i = 0; i < 8; i++) {
            var binaryNumber = (args[i]-0).toString(2);
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

    var result = maxLength + "\n" + countMaxLength;

    return result;
}

function handleSolveIO() {
    var args = [8, 72, 8, 8, 16, 28, 240, 0];
   //var args = [246, 247, 248, 249, 250, 251, 252, 253];

   console.log( Solve(args));
}

handleSolveIO();