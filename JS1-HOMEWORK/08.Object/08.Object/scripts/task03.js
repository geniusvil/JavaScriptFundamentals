//pri printiraneto na matricata ina edno undifined
function execute() {
    var somePerson = new Person(),
        someVariable = 10,
        someArray = [1, 2, 3, "London"],
        someMatrix = [[1, 2], [2, 3], [3, 4]];

    somePerson.fName = "Mark";
    somePerson.lName = "Stone";

    jsConsole.writeLine("Existing objects: ");
    jsConsole.write("Person: ")
    printObject(somePerson);

    jsConsole.writeLine("Variable: " + someVariable);
    jsConsole.writeLine("Array: [" + someArray.join(", ") + "]");
    jsConsole.writeLine("Matrix :")
    printObject(someMatrix);

    var newPerson = deepCopy(somePerson);
    var newVariable = deepCopy(someVariable);
    var newArray = deepCopy(someArray);
    var newMatrix = deepCopy(someMatrix);

    jsConsole.writeLine();
    jsConsole.writeLine("Copied Objects: ");
    jsConsole.write("Person: ")
    printObject(newPerson);

    jsConsole.writeLine("Variable: " + newVariable);
    jsConsole.writeLine("Array: [" + newArray.join(", ")+"]");
    jsConsole.writeLine("Matrix :")
    printObject(newMatrix);
};

function Person(fname, lname) {
    this.fName = fname;
    this.lName = lname;
};

function deepCopy(element) {
    if (element === null || "Object" !== typeof element) {
        return element;
    }

    if (element instanceof Array) {
        copyElement = new Array();
        for (var i = 0 ; i < element.length ; i++) {
            copyElement[i] = deepCopy(element[i]);
        }
        return copyElement;
    }

    if (element instanceof Object) {
        copyElement = new Object();
        for (var attr in element) {
            if (element.hasOwnProperty(attr)) {
                copyElement[attr] = deepCopy(element[attr]);
            }
        }

        return copyElement;
    }
};

function printObject(object) {

        for (var attr in object) {
            jsConsole.write(object[attr]+" ");
        }
        jsConsole.writeLine();
}