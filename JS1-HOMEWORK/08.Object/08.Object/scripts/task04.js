function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
};

function Course(name, hours) {
    this.name = name;
    this.hours = hours;
};

var teacher = new Person("Mark", "Stone");
var banker = new Person("Tony", "Highfield");

var JS = new Course("JavaScript", 2);
var CSharp = new Course("CSharp", 5);


function execute() {

    var isExistProp = hasProperty(teacher, "name");
    printResult("Teacher", isExistProp);

    isExistProp = hasProperty(banker, "lname");
    printResult("Banker", isExistProp);
   
    isExistProp = hasProperty(JS, "hours");
    printResult("JS", isExistProp);

    isExistProp = hasProperty(JS, "name");
    printResult("CSharp", isExistProp);

    isExistProp = hasProperty(teacher, "hours");
    printResult("teacher", isExistProp);
};

function hasProperty(object, property) {

    if (object[property])
    {
        return true;
    }
    else {
        return false;
    }

};

function printResult(object, isExistProp)
{
    if (isExistProp) {
        jsConsole.writeLine(object+" has such property");
    }
    else {
        jsConsole.writeLine(object + " DOES NOT have such property");
    }
}
