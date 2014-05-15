function solve(args) {
    var variables = [];

    for (var i = 0; i < args.length; i++) {

        var currentCommand = args[i].trim();
        if (currentCommand[0] === "(") {
            currentCommand = currentCommand.substr(1);//.shift();
        }
        if (currentCommand[currentCommand.length - 1] === ")") {
            currentCommand = currentCommand.substring(0, currentCommand.length - 1);//.pop();
        }

        var indexOpenBracket = currentCommand.indexOf("(");
        var expression = currentCommand.split(' ').filter(function (element) { if (element !== "") return element; })
        if (i !== args.length - 1) {
            var key = expression[1];

            if (indexOpenBracket < 0) {

                var value = parseInt(expression[2]);// - 0;

                if (!value && value.toString() !== "0") {
                    value = variables[expression[2]];
                }
            }
            else {
                var indexClosedBracket = currentCommand.indexOf(")");
                if (indexClosedBracket < 0) {
                    indexClosedBracket = currentCommand.length;
                }
                var subCommand = currentCommand.trim().substring(indexOpenBracket + 1, indexClosedBracket).split(' ').filter(function (element) { if (element !== "") return element; });

                value = executeMathComand(subCommand);
                if (typeof (value) !== "number") {
                    value += (i + 1).toString();
                    break;
                }
            }

            variables[key] = value;
        }
        else {
            value = executeMathComand(expression);
        }
    }

    function executeMathComand(subCommand) {
        var mathCommand = subCommand[0];
        //  if (mathCommand !== "def") {


        var value = parseInt(subCommand[1]);
        if (!value && value.toString() !== "0") {
            value = variables[subCommand[1]];
        }
            for (var j = 2; j < subCommand.length; j++) {
                var currentVariable = parseInt(subCommand[j]);

                if (!currentVariable && currentVariable.toString() !== "0") {
                    currentVariable = variables[subCommand[j]];
                }

                if (mathCommand === "+") {

                    value += currentVariable;
                }
                else if (mathCommand === "-") {

                    value -= currentVariable;
                }
                else if (mathCommand === "*") {

                    value *= currentVariable;
                }
                else if (mathCommand === "/") {
                    if (currentVariable === 0) {
                        value = "Division by zero! At Line:";
                        break;
                    }
                    value = (parseInt(value / currentVariable));
                }

            }
      
        return value;
    }

    return value;
}

//that part not for bgcoder
function handleSolveIO() {
    //var args = [
    //" (def func 10)",
    //"(def newFunc (+  func 2))",
    //"(def sumFunc (+ func func newFunc 0 0 0))",
    //"(* sumFunc 2)"];

    //var args = [
    //"(def func (+ 5 2))",
    //"(def func2 (/  func 5 2 1 0))",
    //"(def func3 (/ func 2))",
    //"(+ func3 func)"]

    //var args = ["(def     go6o    (/ -7 1 1 1 1) )",
    //"(def asd (/ 0 5))",
    //"(def func2 asd  )",
    //"(           +        4          2      func2)"];


    var args = ["(def joros 30)",
    "(def newFunc (-  101 10))",
    "(def tryFunc 500)",
    "(def tryFunc2 (+ 500 tryFunc )",
    "(def tryFunc1 (+ 500 tryFunc2 )",
    "(/ newFunc  )"];
    console.log(solve(args));

}
handleSolveIO();