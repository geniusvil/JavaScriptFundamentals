function Solve(args) {
    var input = args[0];
    var inputOutOpenBracket = input.replace(/["'()]/g, " ");
    // var inputOutOpenBracket = input.replace(/"/g, " ").replace(/'/g, " ").replace(/\(|\)/g, " ");

    var expression = inputOutOpenBracket.split(" ");
    var expressionResult = [];
    var currentSum = 0
    for (var i = 0; i < expression.length; i++) {
        var currentExpression = expression[i];
        if (currentExpression === "") {
            continue;
        }
        else {
           
            var firstDigit = parseInt(currentExpression[0]);
            if (firstDigit >= "1" && firstDigit <= "9" && currentExpression.length%2!==0) {
               
                currentSum = firstDigit;
                var index = 1;
                while (index < currentExpression.length) {
                    if (currentExpression[index] === "+") {
                        currentSum += parseInt(currentExpression[index + 1]);
                    }
                    else if (currentExpression[index] === "-") {
                        currentSum -= parseInt(currentExpression[index + 1]);
                    }
                    else if (currentExpression[index] === "*") {
                        currentSum *= parseInt(currentExpression[index + 1]);
                    }
                    else if (currentExpression[index] === "/") {
                        currentSum = currentSum / parseInt(currentExpression[index + 1]);
                    }
                    index += 2;
                }
                expressionResult.push(currentSum);
            }
            else {
                for (var j = 0; j < currentExpression.length; j++) {

                    expressionResult.push(currentExpression[j]);
                }
            }

        }


    }

    index = 0;
    var sum = parseFloat(expressionResult[index]);
    index = 1;
    while (index < expressionResult.length) {
        if (expressionResult[index] === "+") {
            sum += parseFloat(expressionResult[index + 1]);
        }
        else if (expressionResult[index] === "-") {
            sum -= parseFloat(expressionResult[index + 1]);
        }
        else if (expressionResult[index] === "*") {
            sum *= parseFloat(expressionResult[index + 1]);
        }
        else if (expressionResult[index] === "/") {
            sum = sum / parseFloat(expressionResult[index + 1]);
        }
        index += 2;
    }
    var result = sum.toFixed(2);

    return result;
}

//not for BGCODER
function handleSolveIO() {
    // var args = ["4+6/5+(4*9-8)/7*2="];
   var args = ["3+(6/5)+(2*3/7)*7/2*(9/4+4*1)="];

    console.log(Solve(args));
}
handleSolveIO();