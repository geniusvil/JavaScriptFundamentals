function Solve(args) {
    var a = parseInt(args[0]);
    var b = parseInt(args[1]);
    var c = parseInt(args[2]);
    var d = parseInt(args[3]);

    var productAD = a * d;
    var productBC = b * c;

    var numberDown = b * d;

    var numberUp = productAD + productBC;

    var result = "";
    if (numberUp > numberDown) {

        result += (numberUp / numberDown | 0).toString() + '\n';
            }
    else {
        var tempResult = numberUp / numberDown;
        result += tempResult.toFixed(20) + '\n';
    }
    result += numberUp + '/' + numberDown;
    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [2,4,2,3];
    //var args = [1,5,2,8];
    console.log(Solve(args));
}
handleSolveIO();