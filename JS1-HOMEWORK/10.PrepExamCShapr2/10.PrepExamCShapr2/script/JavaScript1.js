function solve(args) {
    var numberOfRows = args[0];
    // var firstRow = args[1];
    var rows = [];

    for (var i = 1; i < args.length; i++) {
        var element = args[i].split(', ');
        var currontRow = [];
        for (var j = 0; j < element.length; j++) {
            currontRow.push(parseInt(element[j]));
        }

        rows.push(currontRow);
    
    }
    var step = 0;
    var maxSpecialNumber = 0;
    var specialNumber = 0;

    for (i = 0; i < rows[0].length; i++) {
        var row = 0;

        var visitedRows = creatEmptyArray(args);

        var currentElement = rows[row][i];
        visitedRows[row][i] = 1;
        step = 1;
        if (currentElement < 0) {
            specialNumber = step + Math.abs(currentElement);
        } else {
            row++;
            if (row >= numberOfRows) {
                row = 0;
            }

            while (visitedRows[row][currentElement] !== 1) {
                currentElement = rows[row][currentElement];
                step++;
                if (currentElement < 0) {
                    specialNumber = step + Math.abs(currentElement);
                    break;
                } else {
                    visitedRows[row][currentElement] = 1;

                    row++;
                    if (row >= numberOfRows) {
                        row = 0;
                    }
                }
            }
        }
        if (maxSpecialNumber < specialNumber) {
            maxSpecialNumber = specialNumber;
        }
    }

    function creatEmptyArray(args) {
        var visitedRows = [];
        for (var j = 1; j < args.length; j++) {
            visitedRows.push(new Array(args[j].length));
        }
        return visitedRows;
    }

    return maxSpecialNumber;
}

//that part not for BgCoder
function handleSolveIO() {
    //var args = [4, "-1, 0, -3, -2, 0, -2", "-1, 3, 1, 0, 2, 0", "-9, 1, 1, -7", "1, -5, -3, -1, 3, -2, 2, 1, 1"];
    var args = [6, "5, -4, 8, -5, 0", "1, -2, -1, 1, 0, -1, -1, -2, 1", "3, -5", "4, -9, -4, 4, 0, 7", "1, -2, -8, 4, -8, 7, -5, -4, -4", "4, -1, 0, -3, 2, 4, -4, 1"];
    //var args = [2, [0, -3, 0, 3], [-3, 3, 0, 2, 0]];
    //var args = [2, [0, -3, 0, 3], [0, 3, 0, 2, 0]];
    console.log(solve(args));
};
handleSolveIO();