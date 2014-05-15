function execute() {
    var text = jsConsole.read("#text").trim();
    // "deleveled - something that goes out of level evitative – a grammatical case indicating fear or aversion Malayalam – a language of South India redivider – someone or something that redivides (tied for longest 'real' palindrome that is not a proper noun and that appears in english dictionaries) releveler – (american spelling) someone or something that levels again (tied for longest 'real' palindrome that is not a proper noun and that appears in english dictionaries). rotavator – a type of machine for breaking up soil (trademark) aibohphobia – a joke word meaning 'fear of palindromes' , deliberately constructed so as to be one (various other words have been contrived along these lines, such as ailihphilia, a love of palindromes, elihphile, a lover of palindromes, etc.) detartrated – past tense of “to detartrate”, a chemical term meaning to remove tartrates; alternatively an adjective indicating that tartrates have indeed been removed (this is the longest english palindrome in the guinness book of records, though it is not listed in dictionaries; it is, however, encountered in some discussions of concord grape juice [1]) kinnikinnik – variant (or common misspelling) of kinnikinnick, a native american smoking mixture"

    text = text.replace(".", " ").
                replace("!", " ").
                replace("?", " ").
                replace(",", " ").
                replace(";", " ").
                replace(":", " ").
                replace('"', " ").
                replace("'", " ").
                replace("{", " ").
                replace("}", " ").
                replace("[", " ").
                replace("]", " ").
                replace("-", " ").
                replace("*", " ").
                replace("&", " ").
                replace("/", " ").
    replace("\\", " ");



    var wordsArray = text.split(" ");

    for (var i = 0; i < wordsArray.length; i++) {

        var word = wordsArray[i].toLowerCase();

        if (word.length > 1) {

            var isPalindrom = isPalidromicWord(word);

            if (isPalindrom === true) {
                jsConsole.writeLine(word);
            }
            else {
                continue;
            }
        }
    }

};

function isPalidromicWord(word) {

    for (var i = 0; i < word.length / 2; i++) {

        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }

    return true;
}