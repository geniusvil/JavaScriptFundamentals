function Solve(args) {
    var sequence = [args[0], args[1]];
    var lines = parseInt(args[2]);

    var length = lines * 2 - 1;

    var letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var codeA = "A".charCodeAt(0);

    for (var i = 0; i < length - 2; i++) {

        var first = (sequence[sequence.length - 2]).charCodeAt(0) - codeA + 1;
        var second = (sequence[sequence.length - 1]).charCodeAt(0) - codeA + 1;
        var third = first + second;

        third = third % 26;
        sequence.push(letters[third]);

    }
    // console.log(sequence);
    var result = "";
    if (lines === 1) {
        result = sequence[0];
    }
    else if (lines === 2) {
        result = sequence[0] + '\n' + sequence[1];
    }
    else {
        result = result + sequence[0] + '\n' + sequence[1] + sequence[2] + '\n';
        var line = 3;
        for (var i = 3; i < sequence.length - 1; i += 2) {
            var lengthWhitespaces = line - 2;

            result += sequence[i]
            for (var j = 0; j < lengthWhitespaces; j++) {
                result = result + " ";
            }
           
            result += sequence[i + 1] + '\n';
            line++;
        }
    }
    return result.trim();
}



//not for BGCODER
function handleSolveIO() {
    var args = ["C","B",8];
    //var args = ["A", "Q", 1];

    console.log(Solve(args));
}
handleSolveIO();