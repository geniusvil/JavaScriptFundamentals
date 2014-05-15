function solve(args) {
    var input = args[0];

    var symbols = ["CHU",
                "TEL",
                "OFT",
                "IVA",
                "EMY",
                "VNB",
                "POQ",
                "ERI",
                "CAD",
                "K-A",
                "IIA",
                "YLO",
                "PLA"];

    var digits = [];

    

    for (var i = 0; i < input.length; i+=3) {
        var currentSymbols = input[i] + input[i + 1] + input[i+2];
        var digit = symbols.indexOf(currentSymbols);
        digits.push(digit);
    }

    var powerOf13 = 1;
    var result = 0;

    for (var i = digits.length - 1; i >= 0; i--) {
        result += powerOf13 * digits[i];
        powerOf13 *= 13;
    }
    return result;
}

//that part not for BgCoder
function handleSolveIO() {
    var args = ["OFT"];
   // var args = ["IVAYLO"];
   // var args = ["TELERIK-ACADEMY"];


    console.log(solve(args));
}
handleSolveIO();