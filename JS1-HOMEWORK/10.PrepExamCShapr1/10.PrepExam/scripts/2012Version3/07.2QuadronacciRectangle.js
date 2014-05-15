function Solve(args) {
    var sequence = [parseInt(args[0]), parseInt(args[1]), parseInt(args[2]), parseInt(args[3])];
    var rows = parseInt(args[4]);
    var cols = parseInt(args[5]);

    var numberElements = rows * cols;

    for (var i = 4; i < numberElements; i++) {
        var first = sequence[sequence.length - 4];
        var second = sequence[sequence.length - 3];
        var third = sequence[sequence.length - 2];
        var fourth = sequence[sequence.length - 1];
        var fifth = first + second + third + fourth;

        sequence.push(fifth);

    }
    var result = "";
    var index = 0;
    for (var row = 0; row < rows; row++) {
        var currentRow = "";
        for (var col = 0; col < cols; col++) {
            currentRow += sequence[index] + " ";
            index++;
        }
        result += currentRow.trim() + '\n';
    }

    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [1, 2, 3, 4, 2, 8];
   // var args = [5,-5,1,2,3,4];



    console.log(Solve(args));
}
handleSolveIO();