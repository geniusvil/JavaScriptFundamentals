function Solve(args) {
    var input = args[0].toString(2);

    if (input.length < 16) {
        var tempCharArray = input.split("");

        while (tempCharArray.length < 16) {
            tempCharArray.unshift("0");
        }
        input = tempCharArray.join("");
    }
    else if (input.length > 16) {
        input = input.substr(input.length - 16, 16);
    }

    var result = "";

    for (var i = 0, len = input.length; i < len; i++) {
        var currentchar = input[i];
        if (currentchar === "0") {
            result += "###";
        } else {
            result += ".#.";
        }
        if (i !== len - 1) {
            result += ".";
        }
    }
    result += '\n';

    for (var i = 0, len = input.length; i < len; i++) {
         currentchar = input[i];
        if (currentchar === "0") {
            result += "#.#";
        } else {
            result += "##.";
        }
        if (i !== len - 1) {
            result += ".";
        }
    }
    result += '\n';

    for (var i = 0, len = input.length; i < len; i++) {
         currentchar = input[i];
        if (currentchar === "0") {
            result += "#.#";
        } else {
            result += ".#.";
        }
        if (i !== len - 1) {
            result += ".";
        }
    }
    result += '\n';

    for (var i = 0, len = input.length; i < len; i++) {
        currentchar = input[i];
        
            result += "###";
       
        if (i !== len - 1) {
            result += ".";
        }
    }
    result += '\n';

    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [1];
    //var args = [1234];
   // var args = [65535];

    console.log(Solve(args));
}
handleSolveIO();