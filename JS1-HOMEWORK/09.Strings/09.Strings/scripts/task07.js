var indexEndProtocol;
endProtocol = "://",
indexSlashEndServer = -1,
slash = "/";

function execute() {
    var inputURL = jsConsole.read("#input");
    printProtocol(inputURL);
    printServer(inputURL);
    printResourse(inputURL);
};

function printProtocol(inputURL) {
    indexEndProtocol = inputURL.indexOf(endProtocol);

    var protokol = inputURL.substring(0, indexEndProtocol);
    jsConsole.writeLine("[protokol] == " + protokol);
};

function printServer(inputURL) {
    var indexStartServer = indexEndProtocol + 3;
    indexSlashEndServer = inputURL.indexOf(slash, indexStartServer); // the end of server

    var server = inputURL.substring(indexStartServer, indexSlashEndServer);
    jsConsole.writeLine("[server]   == " + server);
};

function printResourse(inputURL) {
    var indexStartResourse = indexSlashEndServer;

    var resourse = inputURL.substring(indexStartResourse);
    jsConsole.writeLine("[resourse] == " + resourse);
};