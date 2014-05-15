function Solve(args) {
    var sequence = [parseInt(args[0]), parseInt(args[1]), parseInt(args[2])];
    var rows = args[3];
    var result = "";
    var index = 0;
    for (var i = 1; i <= rows; i++) {
        var currentResult = "";

        for (var j = 0; j < i; j++) {
            if (index < sequence.length) {
                currentResult += sequence[index] + " ";
            }
            else {
                var len = sequence.length;

                for (var j = 0 ; j < i; j++) {
                    var first = sequence[sequence.length - 3];
                    var second = sequence[sequence.length - 2];
                    var third =sequence[ sequence.length - 1];
                    var fourth = first + second + third;

                    sequence.push(fourth);
                    currentResult += sequence[index] + " ";
                    index++;
                }
              
                index--;
            }

            index++;
        }
        result += currentResult.concat('\n');
    }
    return result.trim();
}

//not for BGCODER
function handleSolveIO() {
   var args = [1,2,3,3];
   // var args = [1, -1, 1, 4];

    console.log(Solve(args));
}
handleSolveIO();