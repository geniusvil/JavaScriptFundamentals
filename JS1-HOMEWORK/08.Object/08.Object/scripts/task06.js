//umotah se s tazi zada`a ???/
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.toString = function () {
        var person =this.firstName + "  " + this.lastName + "  " + this.age + '\n\r';
        return person;
    }
}

function execute() {
    var inputProperty = jsConsole.read("#INproperty");

    var students = [
       new Person("Mark","Stone",32),
       new Person("Jacob","Been",35),
       new Person("Mario","Chirst",30), 
       new Person("Tony","Highfield",32),
       new Person("Tim","Smith",32), 
       new Person("Albert","Jonson",30),
       new Person("Harvy","Camble",35), 
    ];

    groupedStudents = group(students, inputProperty);
    printResult(groupedStudents);

};
function group(arrPersons, key) {
    if (arrPersons.length === 0) {
        return undefined;
    }
    var answer = {};
    //with the arrPersons[0] we are choosing only the name of the prop to form the groups
    for (var prop in arrPersons[0]) {
        if (prop === key) {
            for (var i = 0; i < arrPersons.length; i++) {
                if (!answer[arrPersons[i][key]]) {
                    answer[arrPersons[i][key]] = [];
                }
                answer[arrPersons[i][key]].push(arrPersons[i]);
            }
        }
    }
    return answer;
}


function printResult(result) {
    for (var i in result) {
        jsConsole.writeLine(result[i]);
    }
}