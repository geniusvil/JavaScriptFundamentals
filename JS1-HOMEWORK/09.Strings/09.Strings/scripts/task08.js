function execute() {
    var text = jsConsole.read("#sequence");
    //var text = "<p>Please visit <a href='http://academy.telerik. com'>our site</a> to choose a training course. Also visit <a href='www.devbg.org'>our forum</a> to discuss the courses<a href='http://academy.telerik. com'>abc</a>.</p>"

    text = text.replace(/<a href=/g, "[URL=");

    while (true) {
        var tempIndexClose = text.indexOf("</a>");
        if (tempIndexClose < 0) {
            break;
        }
        text = text.replace("</a>", "[/URL]");
    }

    var result = text.split("");
    var tempIndex = -1;
    while (true) {


        tempIndex = text.indexOf("[URL=", tempIndex + 1);
        if (tempIndex === -1) {
            break;
        }
        indexOfEndBracket = text.indexOf(">", tempIndex + 1);
        result[indexOfEndBracket] = ']';

    }

    jsConsole.writeLine(result.join(""));
    console.log(result.join(""));
}