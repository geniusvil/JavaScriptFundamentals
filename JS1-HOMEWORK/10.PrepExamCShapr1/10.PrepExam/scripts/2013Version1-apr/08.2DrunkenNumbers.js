function Solve(args) {
    var mitkoBeers = 0;
    var vladkoBeers = 0;
    for (var i = 1; i < args.length; i++) {
        var a = args[i].toString();
        
        var currentNumber = (Math.abs(parseInt(args[i]))).toString();
        var indexMiddle = currentNumber.length / 2 | 0;


        //mitko's beers
      
        for (var m = 0; m < indexMiddle; m++) {
            var currentMitkoBeer = currentNumber[m];
            mitkoBeers += parseInt(currentMitkoBeer);
        }

        //vladko's beers
       
        for (var v = indexMiddle; v < currentNumber.length; v++) {
            var currentVladkoBeer = currentNumber[v];
            vladkoBeers += parseInt(currentVladkoBeer);
        }
      
        if (currentNumber.length % 2 !== 0) {
            mitkoBeers += parseInt(currentNumber[indexMiddle]);
        }

    }

    if (mitkoBeers > vladkoBeers) {
        result = "M " + (mitkoBeers - vladkoBeers);
    }
    else if (mitkoBeers < vladkoBeers) {
        result = "V " + (vladkoBeers - mitkoBeers);
    }
    else {
        result = "No " + (mitkoBeers + vladkoBeers);
    }
    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [2, 1234, 123];
    //var args = [1, 235797122];
   // var args = [3, 505, 7891, 9178];


    console.log(Solve(args));
}
handleSolveIO();