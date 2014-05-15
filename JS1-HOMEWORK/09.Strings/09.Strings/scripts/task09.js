// не си върши ролята 
String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

function execute() {
    var text = jsConsole.read("#text").trim().split(" "),
        i,
        current;
    //"Please contact us by phone (+359 222 222 222) or by email at exa_mple@abv.bg or at baj.ivan@yahoo.co.uk. This is not email: test@test. This also: @telerik.com.  Neither this: a@a.b."

    for (i = 0; i < text.length; i++) {
        current = text[i].trim();
        if (current.length > 0 && current[current.length - 1] === '.') {
            //  text[i] = current.replaceAt(current.Length - 1, "");
            text[i] = current.substring(0, current.length - 1);
        }
    }

    var hasIdentifier = false;
    var hasHostAndDomain = false;
    var result = [];

    for (i = 0; i < text.length; i++) {


        var indexAt = text[i].indexOf("@");

        if (indexAt > 5) {
            hasIdentifier = true;

            if (!isWord(text[i])) {
                continue;
            }

            var indexDot = text[i].indexOf(".", indexAt + 1);

            if (indexDot > indexAt + 1) {
                hasHostAndDomain = true;
            }
        }


        if (hasIdentifier & hasHostAndDomain) {
            if ((text[i].substring(indexDot, text[i].length - indexDot - 1)).length > 1) {
               result.push(text[i]);
            }
        }

        hasIdentifier = false;
        hasHostAndDomain = false;
    }
   jsConsole.writeLine(result.join(", "));
}

function isWord(currentWord) {
    var isWordCharacter = true;

    var possibleChars = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM@.-_";

    for (var i = 0; i < currentWord.length; i++) {

        var currentChar = currentWord[i];
        var indexOfCurrentChar = possibleChars.indexOf(currentChar);
        if (indexOfCurrentChar < 0) {
            // if (possibleChars.contains(currentChar) === false) {
            // хвърля грешка че е не се съдържа в possibleChars
            isWordCharacter = false;
            break;
        }
    }

    return isWordCharacter;
}