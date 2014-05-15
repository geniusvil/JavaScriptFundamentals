function Solve(args) {
    var input = args[0].toString();
    var sum = 0;
   var countDigits = 0;
    for (var i = 1,len = input.length; i <len ; i+=2) {
        var currentChar = input[i];
        var digit = parseInt(currentChar);
        if (digit >= 0 && digit <= 9) {
            sum += digit;
            countDigits++;
        }

    }
    var result = countDigits + " "+ sum;



    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [123];
   // var args = [10000];
   // var args = [987654];
   // var args = [5005005];
   // var args = [200000020];


    console.log(Solve(args));
}
handleSolveIO();