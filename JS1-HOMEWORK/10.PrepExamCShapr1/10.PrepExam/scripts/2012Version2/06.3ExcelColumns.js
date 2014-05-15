function Solve(args) {

    var codeA = "A".charCodeAt(0);
    var result = 0;
    var power26 = 1;
    for (var i = 0; i < args.length - 2; i++) {
        power26 *= 26;
    }
    
    //var power26 = calculatePowerOf26(args.length - 2);

    for (var i = 1; i<args.length;i++) {
        var currentChar = args[i];
        var codeCurrentChar = currentChar.charCodeAt(0) - codeA + 1;
        result += codeCurrentChar * power26;
        power26 = power26 / 26;
    }

    return result;
}
function calculatePowerOf26(power){
    var result = 1;
    for (var i = 0; i < power; i++) {
        result *= 26;
    }
    return result;
}
//not for BGCODER
function handleSolveIO() {
    //var args = [1, "Z"];
    var args = [2, "A","A"];
    //var args = [4, "C","E","C","A"];
    //var args = [4,"B","E","A","R"];
    console.log(Solve(args));
}
handleSolveIO();