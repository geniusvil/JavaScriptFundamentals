function solve(args) {
    var input = args[0].split(' ');

    var maxLength = 0;
    for (var i = 0; i < input.length; i++) {
        if (maxLength < input[i].length) {
            maxLength = input[i].length;
        }
    }

    var extractLetters = "";
    for (i = 0; i < maxLength; i++) {

        for (var j = 0; j < input.length; j++) {
            var currentWord = input[j];
            var currentLength = currentWord.length;

            if (currentLength - 1 - i >= 0) {
                extractLetters += currentWord[currentLength - 1 - i];
            }
        }
    }

    var extractLettersSeparate = extractLetters.split("");
    var alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (i = 0, len = extractLettersSeparate.length; i < len ; i++) {
        var currentLetter = extractLettersSeparate[i];
        var newIndex = alphabet.indexOf(currentLetter.toLowerCase());
        newIndex = (newIndex % len) + i;
        if (newIndex >= len) {
            newIndex = newIndex % len;
        }
        extractLettersSeparate.splice(i, 1);
        extractLettersSeparate.splice(newIndex, 0, currentLetter);
    }

    var result = extractLettersSeparate.join("");
    return result;
}

//that part not for BgCoder
function handleSolveIO() {
    //var args = ["Fun exam right"];
    //var args = ["Telerik Academy"];
     var args = ["Hi exam"];

    console.log(solve(args));
}
handleSolveIO();