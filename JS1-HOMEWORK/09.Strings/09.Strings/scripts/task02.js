
function execute() {
    var inputSequence = jsConsole.read("#expression"),
        isOpenBracket = false,
         countOpenBracket = 0,
         openBrac = '(',
          closedBrac = ')', i;

    if (inputSequence[0] === closedBrac) {
        jsConsole.writeLine("Invalid Expression.");
        return;
    }
    else {
        for (i = 0; i < inputSequence.length; i++) {

            if (inputSequence[i] === openBrac) {
                isOpenBracket = true;
                countOpenBracket++;
            }
            else if (inputSequence[i] === closedBrac && isOpenBracket === true) {
                countOpenBracket--;
                if (countOpenBracket <= 0) {
                    isOpenBracket = false;
                }
            }
        }
    }

    if (isOpenBracket === true || countOpenBracket !== 0) {
        jsConsole.writeLine("Invalid Expression.");
    }
    else {
        jsConsole.writeLine("Expression is correct!");
    }

};