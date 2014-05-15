function Solve(args) {
  

    var numbers = [];
    for (var i = 0; i < args.length; i++) {
        numbers.push(parseInt(args[i]));
    }

    numbers.sort(orderBy);

    var product = numbers[0] * numbers[1] * numbers[2];

    var result = 0;
    var number, a;
    var isFound = false;


    for (number = 2; number <= product; number++) {
        var count = 0;
        for (a = 0; a < numbers.length ; a++) {
            var currentNum = numbers[a];
            if (number % numbers[a] === 0) {
                count++;

            }
            if (count === 3) {
                result = number;
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    return result;

    function orderBy(a, b) {
        return (a === b) ? 0 : (a > b) ? 1 : -1;
    }
}
    





function handleSolveIO() {
   // var args =[1, 2, 3, 4, 5] ;
      var args = [30, 42, 70, 35, 90];

    console.log(Solve(args));
}

handleSolveIO();