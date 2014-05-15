function Solve(args) {
    var sum = parseInt(args[0]);


    var numbers = [];
    for (var i = 2; i < args.length; i++) {
        numbers.push(parseInt(args[i]));
    }

    var count = 0;

    return count;
}


function handleSolveIO() {
    //var args = [1, 1, 1];
    var args = [0, 5, -2, -1, 1, 2, 3];
    // var args = [1337,4,12, 23, 34, 45];
    console.log(Solve(args));
}

handleSolveIO();