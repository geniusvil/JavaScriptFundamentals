function solve(args) {
    var symbols = [
        "f",
        "bIN",
        "oBJEC",
        "mNTRAVL",
        "lPVKNQ",
        "pNWE",
        "hT"
    ];

    var input = args[0];
    var signs = "";
    var digits = [];
    for (var i = 0; i < input.length; i++) {
        var currentChar = input[i];
        signs += currentChar;
        var digit = symbols.indexOf(signs);
        if (digit >= 0) {
            digits.push(digit);
            signs = "";
        }
    }
    var result = 0;
    var powerOf7 = 1;
    for (i = digits.length - 1; i >= 0; i--) {
        result += powerOf7 * digits[i];
        powerOf7 *= 7;
    }

    return result;
};

//that part not for BgCoder
function handleSolveIO() {
    var args = ["lPVKNQ"];
    //var args = ["pNWEoBJECbINf"];
    // var args = ["bINoBJECpNWEhT"];
    //var args = ["hTmNTRAVLoBJEClPVKNQfffoBJECpNWE"];

    console.log(solve(args));
};
handleSolveIO();