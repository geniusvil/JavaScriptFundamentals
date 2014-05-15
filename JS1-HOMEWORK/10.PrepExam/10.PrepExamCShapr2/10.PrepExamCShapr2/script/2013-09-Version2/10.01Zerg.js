function solve(args) {
    var input = args[0];
    var symbols = ["Rawr",
                    "Rrrr",
                    "Hsst",
                    "Ssst",
                    "Grrr",
                    "Rarr",
                    "Mrrr",
                    "Psst",
                    "Uaah",
                    "Uaha",
                    "Zzzz",
                    "Bauu",
                    "Djav",
                    "Myau",
                    "Gruh"];

    var digits = [];

    for (var i = 0; i < input.length; i += 4) {
        var currentSymbols = input[i] + input[i + 1] + input[i + 2] + input[i + 3];
        var digit = symbols.indexOf(currentSymbols);
        digits.push(digit);
    }

    var powerOf15 = 1;
    var result = 0;

    for (var i = digits.length - 1; i >= 0; i--) {
        result += powerOf15 * digits[i];
        powerOf15 *= 15;
    }
    return result;
   
}

//that part not for BgCoder
function handleSolveIO() {
    var args = ["Rarr"];
    //var args = ["HsstSsstSsst"];
    //var args = ["GruhMyauDjav"];


    console.log(solve(args));
}
handleSolveIO();