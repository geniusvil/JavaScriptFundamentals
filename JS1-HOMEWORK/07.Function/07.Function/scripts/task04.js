function execute() {
    countDivs();

    function countDivs() {
        var count = document.getElementsByTagName("div").length;
        jsConsole.writeLine("The number of divs in the page is " + count);
    }

}