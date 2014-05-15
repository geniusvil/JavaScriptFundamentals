function solve(args) {
    var number = parseInt(args[0]);

    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerLetters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //var countLettersInAlphabet = 26;
    //var countLettersKaspichanArphabet = 256;
    var result = [];

    if (number < 26) {
        result.push(upperLetters[number]);
    }
    else {
        while (number > 0)
        {
            var tempResult ="";
            var remainder = number % 256;
            if (remainder < 26)
            {
                tempResult+=(upperLetters[remainder]);
            }
            else
            {
                var privateOfRemainder = remainder / 26 |0;
                tempResult+=(lowerLetters[privateOfRemainder]);

                var restOfRemainder = remainder % 26;
                tempResult+=(upperLetters[restOfRemainder]);
                       
            }
            result.push(tempResult);
            number = number / 256 | 0;
        }

    }
    if (result.length > 1) {
        result.reverse();


    }
    var answer = result.join("");
    return answer;
}

//that part not for BgCoder
function handleSolveIO() {
     //var args = [26];
     //var args = [30];
     //var args = [280];
   // var args = [1000];
   // var args = [8888];
   // var args = [10000];
 //  var args = [100000];
    //var args = [4294967296];
    var args = [1099511627777];
     console.log(solve(args));
}
handleSolveIO();