function Solve(args) {
    var input = args[0].toString().split("");
    var bulls = parseInt(args[1]);
    var cows = parseInt(args[2]);

   
    var result = "";


    for (var i = 1111; i <= 9999; i++) {
        var currentNumber = i.toString().split("");
        var count0currentNumber = (currentNumber.filter(function (it) { return it === "0"; })).length;
        if (count0currentNumber !== 0) {
            continue;
        }
        var currentBulls = 0;
        var currentCows = 0;

        //checking for bulls
        for (var j = 0; j < 4; j++) {
            if (input[j] === currentNumber[j]) {
                currentBulls++;
            }
        }

        var count1input = (input.filter(function (it) { return it === "1"; })).length;
        if (count1input !== 0) {
            var count1currentNumber = (currentNumber.filter(function (it) { return it === "1"; })).length;
            if (count1currentNumber !== 0) {
                currentCows++;
            }
        }

        var count2input = (input.filter(function (it) { return it === "2"; })).length;
        if (count2input !== 0) {
            var count2currentNumber = (currentNumber.filter(function (it) { return it === "2"; })).length;
            if (count2currentNumber !== 0) {
                currentCows++;
            }
        }

        var count3input = (input.filter(function (it) { return it === "3"; })).length;
        if (count3input !== 0) {
            var count3currentNumber = (currentNumber.filter(function (it) { return it === "3"; })).length;
            if (count3currentNumber !== 0) {
                currentCows++;
            }
        }

        var count4input = (input.filter(function (it) { return it === "4"; })).length;
        if (count4input !== 0) {
            var count4currentNumber = (currentNumber.filter(function (it) { return it === "4"; })).length;
            if (count4currentNumber !== 0) {
                currentCows++;
            }
        }

        var count5input = (input.filter(function (it) { return it === "5"; })).length;
        if (count5input !== 0) {
            var count5currentNumber = (currentNumber.filter(function (it) { return it === "5"; })).length;
            if (count5currentNumber !== 0) {
                currentCows++;
            }
        }

        var count6input = (input.filter(function (it) { return it === "6"; })).length;
        if (count6input !== 0) {
            var count6currentNumber = (currentNumber.filter(function (it) { return it === "6"; })).length;
            if (count6currentNumber !== 0) {
                currentCows++;
            }
        }

        var count7input = (input.filter(function (it) { return it === "7"; })).length;
        if (count7input !== 0) {
            var count7currentNumber = (currentNumber.filter(function (it) { return it === "7"; })).length;
            if (count7currentNumber !== 0) {
                currentCows++;
            }
        }

        var count8input = (input.filter(function (it) { return it === "8"; })).length;
        if (count8input !== 0) {
            var count8currentNumber = (currentNumber.filter(function (it) { return it === "8"; })).length;
            if (count8currentNumber !== 0) {
                currentCows++;
            }
        }

        var count9input = (input.filter(function (it) { return it === "9"; })).length;
        if (count9input !== 0) {
            var count9currentNumber = (currentNumber.filter(function (it) { return it === "9"; })).length;
            if (count9currentNumber !== 0) {
                currentCows++;
            }
        }


        //if (count1input !== 0 && count1currentNumber !== 0) {
        //    currentCows++
        //}
        //if (count2input !== 0 && count2currentNumber !== 0) {
        //    currentCows++
        //}
        //if (count3input !== 0 && count3currentNumber !== 0) {
        //    currentCows++
        //}
        //if (count4input !== 0 && count4currentNumber !== 0) {
        //    currentCows++
        //}
        //if (count5input !== 0 && count5currentNumber !== 0) {
        //    currentCows++
        //}
        //if (count6input !== 0 && count6currentNumber !== 0) {
        //    currentCows++
        //}
        //if (count7input !== 0 && count7currentNumber !== 0) {
        //    currentCows++
        //}
        //if (count8input !== 0 && count8currentNumber !== 0) {
        //    currentCows++
        //}
        //if (count9input !== 0 && count9currentNumber !== 0) {
        //    currentCows++
        //}
        currentCows = currentCows - currentBulls;
        if (currentBulls === bulls && currentCows === cows) {
            result += i + " ";
        }

    }
    
    if (result === "") {
        result = "No";
    }

    return result.trim();
}

//not for BGCODER
function handleSolveIO() {
   // var args = [2228,2,1];
    var args = [1234,3,0];
    //var args = [1234, 3, 1];

    console.log(Solve(args));
}
handleSolveIO();