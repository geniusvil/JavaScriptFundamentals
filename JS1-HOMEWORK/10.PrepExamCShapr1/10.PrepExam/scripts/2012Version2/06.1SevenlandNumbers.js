function Solve(args) {
    var input = args[0].toString();
    var inputNumber = parseInt(input);
    var result = 0;
    
    if (input.length === 1) {
        if (inputNumber === 6) {
            result = 10;
        }
        else {
            result = inputNumber + 1;
        }
    }
    else if (input.length === 2) {
        if (inputNumber === 66) {
            result = 100;
        }
        else if (input[1] === "6" && input[0] !== "6") {
            result = (parseInt(input[0]) + 1) * 10;
        }
        else if (input[1] !== "6") {
            result = inputNumber + 1;
        }
    }
    else if (input.length === 3) {
        if (inputNumber === 666) {
            result = 1000;
        }
        else if (input[2] === "6" && input[1] === "6" && input[0] !== "6") {
            result = (parseInt(input[0]) +1) * 100 ;
        }
        else if (input[2] === "6" && input[1] !== "6" ) {
            result = (parseInt(input[0])) * 100 + (parseInt(input[1])+1) * 10;
        }
        else if (input[2] !== "6") {
            result = inputNumber + 1;
        }
    }
    return result;
}

//not for BGCODER
function handleSolveIO() {
    //var args = [5];
   // var args = [56];
    //var args = [166];
    //var args = [200];
    //var args = [566];
    var args = [565];

    console.log(Solve(args));
}
handleSolveIO();