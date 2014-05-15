function Solve(args) {

    var n = parseInt(args[0]);

    var result = "";
    var tempResult = []

    for (var i = 10; i >= 0; i--) {
        var sheets = Math.pow(2, i);
        if (n >= sheets) {
            n = n - sheets;
        }
        else {
            //result += "A" + (10 - i);
            //result = result.concat('\n');

            // result = result.concat(("A"+(10-i))+'\n');

            tempResult.push("A" + (10 - i));
        }
    }
    tempResult.reverse();
    result = tempResult.join('\n');
    return result.trim();
}

//not for BGCODER
function handleSolveIO() {
    //var args = [1];
    //var args = [9];
    //var args = [666];
    var args = [1337];

    console.log(Solve(args));
}
handleSolveIO();