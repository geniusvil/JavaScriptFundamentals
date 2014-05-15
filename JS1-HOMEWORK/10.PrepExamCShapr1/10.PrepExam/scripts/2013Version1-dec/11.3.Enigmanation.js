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
                    else if (currentExpression[index] === "%") {
                        currentSum %= parseInt(currentExpression[index + 1]);
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
    var sum = parseInt(expressionResult[index]);
    index = 1;
    while (index < expressionResult.length) {
        if (expressionResult[index] === "+") {
            sum += parseInt(expressionResult[index + 1]);
        }
        else if (expressionResult[index] === "-") {
            sum -= parseInt(expressionResult[index + 1]);
        }
        else if (expressionResult[index] === "*") {
            sum *= parseInt(expressionResult[index + 1]);
        }
        else if (expressionResult[index] === "%") {
            sum %= parseInt(expressionResult[index + 1]);
        }
        index += 2;
    }
    var result = sum.toFixed(3);

    return result;
}

//not for BGCODER
function handleSolveIO() {
  //  var args = ["(1+9)%6-(7%2)*8="];
    //var args = ["(6%5)*9+(8*3%7)*7%2*(5%3+4*1)="];
   var args = ["1*2*3*4*5*6*7*8*9%1-9="];

    console.log(Solve(args));
}
handleSolveIO();