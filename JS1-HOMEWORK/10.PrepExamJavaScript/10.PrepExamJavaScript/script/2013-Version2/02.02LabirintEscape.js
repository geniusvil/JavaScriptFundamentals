function solve(args) {
    var measuresField = args[0].split(" ");
    var rows = measuresField[0] - 0;
    var cols = measuresField[1] - 0;

    var posStart = args[1].split(" ");
    var posRow = posStart[0] - 0;
    var posCol = posStart[1] - 0;

    var field = [];
    var element = 1;
    for (var i = 0; i < rows; i++) {
        var currentRow = [];
        for (var j = 0; j < cols; j++) {
            currentRow.push(element);  // or currentRow.push(i*cols+1+j);
            element++; 
        }

        field.push(currentRow);
    }
    field;
    var directions = [];
    for (var i = 2; i < args.length; i++) {
        directions.push(args[i]);
    }

    var outSum = 0;
    var lostNumber = 0;
    var result = "";

    while (true) {
        outSum += field[posRow][posCol];
        lostNumber++;
        field[posRow][posCol] = "visited";

        if (directions[posRow][posCol] === "l") {
            posCol--;
        }
        else if (directions[posRow][posCol] === "r") {
            posCol++;
        }
        else if (directions[posRow][posCol] === "u") {
            posRow--;
        }
        else if (directions[posRow][posCol] === "d") {
            posRow++;
        }
        if ((posRow < 0 || posRow >= rows) || (posCol < 0 || posCol >= cols)) {
            result = "out " + outSum;
            break;
        }
       
        if (field[posRow][posCol] === "visited") {
            result = "lost " + lostNumber;
            break;
        }


    }



    return result;
}

//that part not for bgcoder
function handleSolveIO() {
   // var args = ["3 4", "1 3", "lrrd", "dlll", "rddd"];
   // var args = ["5 8", "0 0", "rrrrrrrd", "rludulrd", "durlddud", "urrrldud", "ulllllll"];
    var args = ["5 8", "0 0", "rrrrrrrd", "rludulrd", "lurlddud", "urrrldud", "ulllllll"];


    console.log(solve(args));

}
handleSolveIO();