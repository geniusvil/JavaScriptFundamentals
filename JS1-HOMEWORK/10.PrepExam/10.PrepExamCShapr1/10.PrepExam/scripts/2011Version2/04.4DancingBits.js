function Solve(args) {
    var k = args[0]-0;
    var n = args[1]-0;

   // var sequence = createSequenceOfBits(args, n);// var proba = "";
    var sequence = "";
    for (var m = 2; m < n + 2; m++) {
        // proba += args[m];
        sequence += (args[m]-0).toString(2);
    }

    var groups = 0;

    for (var i = 0; i < sequence.length; i++) {
        var count = 1;
        var currentBit = sequence[i];

        if (i === sequence.length - 1) {
            if (count === k) {
                groups++;
            }
        }
        for (var j = i + 1; j < sequence.length; j++) {
            var nextBit = sequence[j];
            if (sequence[i] === sequence[j]) {
                count++;
                // вариант е тук да правя проверката ако count ===k и j+1 !=j
            }
            else {
                i = j - 1;
                if (count === k) {
                    if (sequence[j - 1] !== sequence[j] || j === sequence.length - 1) {
                        groups++;
                    }
                }
                break;
            }


        }
    }

    //function createSequenceOfBits(args, n) {
    //    var sequence = "";
    //    for (var m = 2; m < n + 2; m++) {
    //        // proba += args[m];
    //        sequence += args[m].toString(2);
    //    }
    //    // console.log(sequence);
    //    // console.log(proba);
    //    return sequence;
    //}

    return groups;
}



function handleSolveIO() {
    var args =["3","4","5","6","14","143"] ;
   // var args = [1, 4, 2, 10, 42, 170];

    console.log(Solve(args));
}

handleSolveIO();