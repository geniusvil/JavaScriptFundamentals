function Solve(args) {
    var a = parseInt(args[0]);
    var b = parseInt(args[1]);
    var c = parseInt(args[2]);
    var r = 0;

    if (b === 3) {
        r = a + c;
    }
    else if (b === 6) {
        r = a * c;
    } else if (b === 9) {
        r = a % c;
    }

    var result = "";
    if (r % 3 === 0) {
        result = (r / 3).toString();
    }
    else {
        result = (r % 3).toString();
    }
    result += '\n' + r.toString();
    return result;
}

//not for BGCODER
function handleSolveIO() {
    //var args = [3,6,4];
     var args = [9,9,5];
    console.log(Solve(args));
}
handleSolveIO();