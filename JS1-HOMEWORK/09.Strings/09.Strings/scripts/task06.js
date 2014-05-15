function execute() {
    var text = jsConsole.read("#inputText");
    // <html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>

    text = removeAllTags(text);

    jsConsole.writeLine(text);
}

function removeAllTags(text) {
    return text.replace(/<.+?>/ig, '');
}

function removeAdditionalWhiteSpaces(text) {
    return text.replace(/\s{2,}/ig, ' ');
}