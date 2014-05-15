function Solve(args) {

    var length = parseInt(args[0]);
    var numbers = [];
    for (var i = 1; i < length; i++) {
        numbers.push(parseInt(args[i]));
    }


    var result = numbers[0];


    for (var i = 1; i < length; i++) {
        result = result ^ numbers[i];
    }

    return result;
}