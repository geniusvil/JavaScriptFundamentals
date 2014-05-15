function solve(args) {
    var cages = [];

    for (var i = 0; i < args.length - 1; i++) {
        cages.push(args[i] - 0);
    }

   // var countNextCages = 0;
    var index = 0;
    var round = 1;
    

    while (round < cages.length) {
        var countCages = 0;
        for ( i = 0; i < round; i++) {
            countCages += cages[i];
  
        }

        var sumNextCages = 0;
        var productNextCages = 1;
      
        if (countCages + round <= cages.length) {
            for (var j = round; j < countCages + round; j++) {
                var currentCage = cages[j];
                sumNextCages += currentCage;
                productNextCages *= currentCage;
            }
            var newCages = sumNextCages.toString() + productNextCages.toString();
            //remove used cages
            cages.splice(0, countCages + round );

            //add digits of sum and product without 0 and 1
            for (var m = newCages.length - 1; m >= 0; m--) {
                var currentDigit = newCages[m] - 0;
                if (currentDigit !== 0 && currentDigit !== 1) {
                    cages.unshift(currentDigit);
                }
            }

        }
        else {
            break;
        }
        round++;
    }

    var result = cages.join(' ');
    return result;
}

//that part not for BgCoder
function handleSolveIO() {
    var args = [3, 2, 5, 5, 4, 8, 4, 9, 5, 6, 3, 4, "END"];
    var args = [ 2, 2, 5, "END"]; // 7
    
    var args =[ "2",
    "1",
    "3",
    "3",
    "4",
    "5",
    "7",
    "4",
    "6",
    "3",
    "2",
    "END"]; //3 2 3 2 4 2

    console.log(solve(args));
}
handleSolveIO()