function execute() {
    var text = jsConsole.read("#inputText");
    //if (text === undefined) {
    //    text = "We are <mixcase>living<upcase> yellow submarine</upcase></mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>ANYthing</lowcase> else."
    //}
    var startTagUp = "<upcase>",
       endTagUp = "</upcase>",
       startTagLow = "<lowcase>",
       endTagLow = "</lowcase>",
       startTagMix = "<mixcase>",
       endTagMix = "</mixcase>";



    text = applyTags(text, startTagUp, endTagUp, applyUpCaseTags);
    text = applyTags(text, startTagLow, endTagLow, applyLowCaseTags);
    text = applyTags(text, startTagMix, endTagMix, applyMixCaseTags);
    jsConsole.writeLine(text);
};


function applyTags(text, openTagName, closeTagName, action) {
    var openTagIndexes = [];

    var lastOccurance = text.indexOf(openTagName), nextOpenTagIndex, nextCloseTagIndex, originalBlock, updateBlock;
    if (lastOccurance > -1) {
        openTagIndexes.push(lastOccurance);
    }

    while (openTagIndexes.length > 0) {

        lastOccurance = openTagIndexes[openTagIndexes.length - 1];
        nextOpenTagIndex = text.indexOf(openTagName, lastOccurance + openTagName.length);
        nextCloseTagIndex = text.indexOf(closeTagName, lastOccurance + openTagName.length);

        if (nextCloseTagIndex < nextOpenTagIndex || nextOpenTagIndex === -1) {
            originalBlock = text.substring(lastOccurance, nextCloseTagIndex + closeTagName.length);
            updateBlock = removeAllTags(originalBlock);
            updateBlock = removeAdditionalWhiteSpaces(updateBlock);
            updateBlock = action(updateBlock);


            text = text.replace(originalBlock, updateBlock);
            openTagIndexes.pop();

            if (nextOpenTagIndex !== -1 && openTagIndexes.length === 0) {
                openTagIndexes.push(text.indexOf(openTagName, lastOccurance + openTagName.length));
            }

        }
        else {
            openTagIndexes.push(nextOpenTagIndex);
        }
    }

    text = removeAdditionalWhiteSpaces(text).trim();
    return text;
}

function applyUpCaseTags(text) {
    return text.toUpperCase();
}

function applyLowCaseTags(text) {
    return text.toLowerCase();
}

function applyMixCaseTags(text) {
    var result = '', i, tmpRand;
    for (i = 0; i < text.length; ++i) {
        tmpRand = parseInt(Math.random() * 2);
        if (tmpRand === 0) {
            result += text[i].toUpperCase();
        }
        else {
            result += text[i].toLowerCase();
        }
    }
    return result;
}

function removeAdditionalWhiteSpaces(text) {
    return text.replace(/\s{2,}/ig, ' ');
}

function removeAllTags(text) {
    return text.replace(/<.+?case>/ig, '');
}