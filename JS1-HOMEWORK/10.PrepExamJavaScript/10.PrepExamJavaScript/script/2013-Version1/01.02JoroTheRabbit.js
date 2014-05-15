function Solve(args) {
    var infoField = args[0].split(' ');
    var rows = infoField[0] -0;
    var cols = infoField[1] -0;

    var field = [];
    for (var i = 0; i < rows; i++) {
        var currentRow = [];
        for (var j = 0; j < cols; j++) {
            currentRow.push(i * cols + j+1);
        }
        field.push(currentRow);
    }

    var infoStartPosition = args[1].split(' ');
    var posRow = infoStartPosition[0] -0;
    var posCol = infoStartPosition[1] -0;

    var steps = [];
    for (var i = 2; i < args.length; i++) {
        var currentElement = args[i].split(' ');
        var currentStep = [];

        for (var j = 0; j < currentElement.length; j++) {
            var element = currentElement[j] - 0;
            currentStep.push(element);
        }

        steps.push(currentStep);
    }

    var sumNumbers = field[posRow][posCol];
    field[posRow][posCol] = "visited";
    var jumpNumbers = 1;

    var result = "";

    for (var step = 0; step < steps.length; step++) {
        currentStep = steps[step];
        posRow += currentStep[0];
        posCol += currentStep[1];

        if (posRow < 0 || posRow >= rows || posCol < 0 || posCol >= cols) {
            result = "escaped " + sumNumbers;
            break;
        }
        if (field[posRow][posCol] === "visited") {
            result = "caught " + jumpNumbers;
            break;
        }

        sumNumbers += field[posRow][posCol];
        field[posRow][posCol] = "visited";
        jumpNumbers++;

        if (step === steps.length - 1) {
            step = -1;
        }
    }

    return result;
}

//that part not for bgcoder
function handleSolveIO() {
    var args = ["6 7 3", "0 0", "2 2", "-2 2", "3 -1"];

    console.log(Solve(args));

}
handleSolveIO();