function solve(args) {
    var input = args[0];
    
    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerLetters = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var lettersInput = []
    
    
    for (var i = 0; i < input.length; i++) {
        var currentChar = input[i];
        if (lowerLetters.indexOf(currentChar) >= 0) {
            i++;
            var nextChar = input[i];
            currentChar = currentChar + nextChar;
        }
       
        lettersInput.push(currentChar);
    }

   // lettersInput.reverse();
    var powerOf168 = 1;
    var result = 0;

        for ( i =lettersInput. length - 1; i >= 0; i--) {
        var currentChars = lettersInput[i];
        var firstLetter = currentChars[0];
        var secondLetter = "";

        var valueChars = 0;
        if (currentChars.length === 2) {
            
            var valueFirstLetter = lowerLetters.indexOf(firstLetter);

             secondLetter = currentChars[1];
            var valueSecondLetter = upperLetters.indexOf(secondLetter);

             valueChars = 26 * valueFirstLetter + valueSecondLetter;
        }
        else {
            var valueFirstLetter = upperLetters.indexOf(firstLetter);
            valueChars = valueFirstLetter;
        }

        result += valueChars * powerOf168;
        powerOf168 *= 168;

    }

    return result;
}

//that part not for BgCoder
function handleSolveIO() {
    //var args = ["U"];
   // var args = ["bM"];
    var args = ["BaG"];
    //var args = ["CfI"];

    console.log(solve(args));
}
handleSolveIO();