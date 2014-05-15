function solve(args) {
    var symbols = ["LON+",
                     "VK-",
                     "*ACAD",
                     "^MIM",
                     "ERIK|",
                     "SEY&",
                     "EMY>>",
                     "/TEL",
                     "<<DON"];

    var input = args[0] - 0;

    var resultSymbols = [];
    var result = "";

    if (input < 8) {
        result = symbols[input];
    }
    else {
        while (input > 0) {
            var remainder = input % 9;
            resultSymbols.unshift(symbols[remainder]);
            input = input / 9 | 0;
        }
        result = resultSymbols.join("");

    }


  
    return result;
}

//that part not for BgCoder
function handleSolveIO() {
    var args = [4];
    //var args = [154];
    //var args = [5451];
    //var args = [891672];


    console.log(solve(args));
}
handleSolveIO()