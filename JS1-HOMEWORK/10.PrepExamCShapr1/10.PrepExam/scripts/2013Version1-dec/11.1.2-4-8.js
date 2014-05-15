function Solve(args) {
    var a = parseInt(args[0]);
    var b = parseInt(args[1]);
    var c = parseInt(args[2]);
    var r = 0;
    
    if (b === 2) {
        r = a % c;
    }
    else if (b === 4) {
        r = a + c;
    } else if (b === 8) {
        r = a * c;
    }

    var result = "";
    if (r % 4 === 0) {
        result = (r / 4).toString();
    }
    else {
        result = (r%4).toString();
    }
    result += '\n' + r.toString();
    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [10,2,6];
   // var args = [6,4,3];
    console.log(Solve(args));
}
handleSolveIO();