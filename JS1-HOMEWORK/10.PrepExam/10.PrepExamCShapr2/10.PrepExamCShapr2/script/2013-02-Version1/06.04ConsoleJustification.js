function solve(args) {
    var numberChars = args[1] - 0;
    var inputText = [];

    for (var i = 2; i < args.length; i++) {
        inputText.push(args[i].trim());
    }

    var words = [];
    for (var i = 0; i < inputText.length; i++) {
        var currentText = inputText[i].split(" ");

        for (var j = 0; j < currentText.length; j++) {
            if (currentText[j] !== "") {
                words.push(currentText[j]);
            }
        }
    }

    var line = "";
    var result = "";

    for (i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var lenghtLine = line.length || 0;
        var lengthWord = currentWord.length;
        if (lenghtLine + lengthWord <= numberChars) {// && i+1 !== words.length ) {
            line += currentWord;
        }
        if (line.length < numberChars && (i !== words.length - 1 && line.length + words[i + 1].length <= numberChars)) {
            line += " ";
        }
        if (i !== words.length - 1 && line.length + words[i + 1].length <= numberChars) {
            continue;
        }
        else if (line.length !== numberChars && (i !== words.length - 1 && line.length + words[i + 1].length > numberChars) || (i === words.length - 1 && line.length < numberChars)) {

            line = line.trim();
            var indexWhitespace = line.indexOf(" ");
            if (indexWhitespace > 0) {
                var wordsInLine = line.split(" ");
                if (wordsInLine.length > 1) {
                    var sumChars = 0;
                    for (var k = 0; k < wordsInLine.length; k++) {
                        sumChars += wordsInLine[k].length;
                    }
                    var countWhitespaces = numberChars - sumChars;

                    for (var j = 0; j < wordsInLine.length; j++) {
                        if (j !== wordsInLine.length - 1) {
                            wordsInLine[j] = wordsInLine[j] + " ";
                            countWhitespaces--;
                        } else {
                            j = -1;
                        }
                        if (countWhitespaces === 0) {
                            break;
                        }
                    }

                    line = wordsInLine.join("");
                }
            }
            else {
                result += line + '\r';
                line = "";
            }
        }

        if (line.length === numberChars) {
            result += line + '\r';
            line = "";
        }
    }


    return result;
}

//that part not for BgCoder
function handleSolveIO() {
    // var args = [5, 20, "We happy few        we band", "of brothers for he who sheds", "his blood", "with", "me shall be my brother"];
    // var args = [10, 18, "Beer beer beer Im going for ", "   a", "beer", "Beer beer beer Im gonna", "drink some beer", "I love drinkiiiiiiiiing ", "beer", "lovely", "lovely ", "beer     "];
    var args = [29, 68, "I dont give a damn",
                        "How its supposed to be  That might work for you  It dont work for                                                              ",
                        "me    You write your truth   And Ill write mine                                                                                ",
                        " One mans ceilings   Another mans sky high    Flying like an aeroplane  Cry like the lonely whistle of a long black            ",
                        "train  Dance in the pouring rain  Spit in the eye of a hurricane  Who said life                                                ",
                        "has got to be so cruel                                                                                                         ",
                        " Loves the only                                                                                                                ",
                        "rule                                                                                                                           ",
                        " Its written in the stars                                                                                                      ",
                        "Where I fit in  Its going                                                                                                      ",
                        "to hurt sometimes   You got to lose to win    Youve got your sins   And I                                                      ",
                        "got mine  Sell                                                                                                                 ",
                        "your secrets kiss them                                                                                                         ",
                        "all goodbye    Flying like an aeroplane  Alive like a lonely note from John Coltrane                                           ",
                        "  From httpwwwelyricsnet   Run like                                                                                            ",
                        "its a getaway  Say those things that you shouldnt say  Think about                                                             ",
                        "it wouldnt that be cool  If loves the only rule    Might be a wrecking ball  Or just a wake up call  Dont                      ",
                        "matter                                                                                                                         ",
                        "where the pieces fall    Oooooh Oooooh Oooooh    Im gonna fly like an aeroplane  Cry like the whistle of a long black          ",
                        "train  Dance in the pouring rain                                                                                               ",
                        "Im alive like a lonely note from John                                                                                          ",
                        "Coltrane  Run like its a getaway  Say those things that you shouldnnt say    Where love loves                                  ",
                        "the only rule                                                                                                                  ",
                        "Yes love                                                                                                                       ",
                        "loves the only rule  Ah love loves the only                                                                                    ",
                        "rule                                                                                                                           ",
                        " Love                                                                                                                          ",
                        "only rule  Loves the                                                                                                           ",
                        "only rule    Oooooh Oooooh  Oooooh"]
    console.log(solve(args));
};
handleSolveIO();