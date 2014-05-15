function Solve(args) {
    var sequence = [];

    for (var i = 1; i < args.length; i++) {
        sequence.push(args[i] - 0);
    }

    var count = 0;
    for (i = 0; i < sequence.length; i++) {
        var currentNumber = sequence[i];
        count++;
        if (i !== sequence.length - 1) {
            for (var j = i + 1; j < sequence.length; j++) {
                var nextNumber = sequence[j];
                if (currentNumber <= nextNumber) {
                    currentNumber = nextNumber;

                    continue;
                }
                else {
                    i = j-1;
                    break;
                }
            }
            
        }
        else {
            if (currentNumber > sequence[i - 1]) {
                count--;
            }
        }
        
    }
    return count;
}

//that part not for bgcoder
function handleSolveIO() {
   // var args = ["7","1","2","-3","4","4","0","1"];
  var args = ["6", "1", "3", "-5", "8", "7", "-6"];
   var args = ["9", "1", "8", "8", "7", "6", "5", "7", "7", "6"];

    console.log(Solve(args));

}
handleSolveIO();