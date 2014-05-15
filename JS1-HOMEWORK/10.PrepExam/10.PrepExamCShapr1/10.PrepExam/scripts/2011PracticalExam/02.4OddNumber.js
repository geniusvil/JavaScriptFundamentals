function Solve(args) {
   
  
   
    var numbers = [];
    for (var i = 1; i < args.length; i++) {
        numbers.push(parseInt(args[i]));
    }

    var result = numbers[0];


    for (var i = 1; i < numbers.length; i++) {
        result = result ^ numbers[i];
    }

    return result;
}

function handleSolveIO() {
    //var args = [1,2];
    //var args = [3, 2, -1, 2];
    //var args = [9, -1, 0, 1,2,3,2,1,0,-1];
    var args = [13, -1, 7, 7, -9223372, 7, -9223372,-3,7,0,-1,7,0,-3];

    console.log(Solve(args));
}

handleSolveIO();