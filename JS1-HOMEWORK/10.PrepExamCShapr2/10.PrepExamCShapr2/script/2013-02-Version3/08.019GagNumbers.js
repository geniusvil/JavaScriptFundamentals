function solve(args) {
    var input = args[0];

    var digits = ["-!", "**", "!!!", "&&", "&-", "!-", "*!!!", "&*!", "!!**!-"];

    var oneSign = "";
    var signs = [];
    for (var i = 0; i < input.length; i++) {
        var currentChar = input[i];
        oneSign += currentChar;
        var digit = digits.indexOf(oneSign)
        if (digit >= 0) {
            signs.push(digit);
            oneSign = "";
        }
    }

    var powerOf9 = 1;
    var result = 0;
    for (var i = signs.length - 1; i >= 0; i--) {
        result += powerOf9 * signs[i];
        powerOf9 *= 9;
    }

 
    return result;
}

//that part not for BgCoder
function handleSolveIO() {
    var args = ["*!!!"];
   // var args = ["***!!!"];
   // var args = ["!!!**!-"];
   // var args = ["!!**!--!!-"];


    console.log(solve(args));
}
handleSolveIO();