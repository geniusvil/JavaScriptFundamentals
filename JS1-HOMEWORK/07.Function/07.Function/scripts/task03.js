function execute() {
    var inputText = jsConsole.read("#inputText"),
        //We are living in a yellow submarine. We don't have anything else In this world.
        caseType = false,
        count = 0,
        word = jsConsole.read("#inputWord");

    if (inputText === undefined) {
        alert('Please enter text.');
        return;
    }

    if (word === undefined) {
        alert('Please enter word.');
        return;
    }

    var tempArray = inputText.split([",", ".", "?", "!", ";", ":", '"', "'", " ", "[", "]", "{", "}"]);

    var text = tempArray.join(" ");

    if (document.getElementById("sensitive").checked === true) {
        caseType = true;
    }
    else if (document.getElementById("insensitive").checked === true) {
        caseType = false;
    }

    count = countWord(text, word, caseType);
    jsConsole.writeLine(count);

}
function countWord(text, word, caseType) {

    var regexToFind, tempText, tempWord;

    if (caseType === false) {
        regexToFind = new RegExp('\\b' + word + '\\b', "gi");
    }
    else {
        regexToFind = new RegExp('\\b' + word + '\\b', "g");
    }
    return text.match(regexToFind).length;


}