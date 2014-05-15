(function () {
    if (!Array.prototype.remove) {
        Array.prototype.remove = function (element) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === element) {
                    this.splice(i, 1);
                    i--;
                }
            }

            return this;
        };
    }
})();

function execute() {
    var inputSequence = jsConsole.read("#sequence").split(jsConsole.read("#separator")),
        inputElement = jsConsole.read("#element");

    jsConsole.writeLine("Given Array : [ " + inputSequence.join("..") + " ]");

    inputSequence.remove(inputElement);

    jsConsole.writeLine("Modified Array : [ " + inputSequence.join("..") + " ]");
    jsConsole.writeLine();
};