function execute() {

    var students = [
        { firstname: "Mark", lastname: "Stone", age: 32 },
        { firstname: "Jacob", lastname: "Been", age: 35 },
        { firstname: "Mario", lastname: "Chirst", age: 30 },
        { firstname: "Tony", lastname: "Highfield", age: 32 }
    ]


    findYoungest(students);

}
function findYoungest(array) {
    var youngestPosition = -1,
     youngestAge = 150,
     i;

    for (i in array) {
        if (array[i].age < youngestAge) {
            youngestAge = array[i].age;
            youngestPosition = i;
        }
    }

    jsConsole.writeLine("The Youngest Person is: ")
    jsConsole.writeLine(array[youngestPosition].firstname + " " + array[youngestPosition].lastname + " " + array[youngestPosition].age + " ");
}
