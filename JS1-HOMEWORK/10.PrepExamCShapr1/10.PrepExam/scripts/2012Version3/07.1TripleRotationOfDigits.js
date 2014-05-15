function Solve(args) {
    var input = args[0].toString();
    var result="";

    if (input.length === 1) {
        result = input;
    }
    else if (input.length === 2) {
        var charArray = input.split("");
        charArray.reverse();
        var newNumber = parseInt(charArray.join(""));
        result = newNumber.toString();
    }
    else {
        var countRotation = 1;
         charArray = input.split("");

        while (countRotation <= 3) {
            var lastDigit = charArray[charArray.length - 1];
            charArray.pop();
            if (lastDigit !== "0") {
                charArray.unshift(lastDigit);
            }
            countRotation++;
        }
    }

    result = charArray.join("");
    return result;
}

//not for BGCODER
function handleSolveIO() {
   // var args = [51234];
   // var args = [180001];
    //var args = [443];
    var args = [53];

    console.log(Solve(args));
}
handleSolveIO();