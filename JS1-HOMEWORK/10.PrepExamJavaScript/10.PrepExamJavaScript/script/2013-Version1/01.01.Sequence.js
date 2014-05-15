function Solve(args) {
    var sequence = [];

    for (var i = 1; i < args.length; i++) {
        sequence.push(args[i] - 0);
    }

    var count = 0;
    for ( i = 0; i < sequence.length-1; i++) {
        if (sequence[i] < sequence[i + 1]) {
            count++;
        }
    }
    return count;
}

//that part not for bgcoder
function handleSolveIO() {
    //var args = ["7","1","2","-3","4","4","0","1"];
  v//ar args = ["6", "1", "3", "-5", "8", "7", "-6"];
   // var args = ["9", "1", "8", "8", "7", "6", "5", "7", "7", "6"];

    console.log(Solve(args));

}
handleSolveIO();