function Solve(args) {
    var input = parseInt(args[0]);
    if (input < 0) {
        input = -input;
    }

    var sum = 0;
    if (input.toString().length === 1) {
        sum = input;
    }
    else {
        var sequence = input.toString().split("");
        sequence.reverse();

        for (var i = 0; i < sequence.length; i++) {
            var currentNumber = parseInt(sequence[i]);
            var position = i + 1;
            if ((i + 1) % 2 !== 0) {

                sum += position * position * currentNumber;
            }
            else {
                sum += position * currentNumber * currentNumber;

            }
        }
    }
   

    var result = "";
    result += sum + '\n';
    var sumAsString = sum.toString();
    var lastDigit = sumAsString[sumAsString.length-1];
    if(lastDigit ==="0"){
        result += input +" has no secret alpha-sequence"
    }
    else {
        var r = sum % 26;
        var letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (var j = 0; j < lastDigit; j++) {
            var index = r + j+1;
            if (index > 26) {
                index = index % 26;
            }
            result += letters[index];

        }
    }
  

    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [3];
    //var args = [22];
    //var args = [424];

    console.log(Solve(args));
}
handleSolveIO();