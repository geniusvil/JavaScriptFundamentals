function Solve(args) {
    var numbers = [];
    for (var i = 0; i < args.length-1; i++) {
        numbers.push(parseInt(args[i]));

    }
    var position = parseInt(args[args.length - 1]);
    var currentIndex = 2;
    var nextNumber = 0;

    while (currentIndex < position-1) {
        nextNumber = numbers[currentIndex] + numbers[currentIndex - 1] + numbers[currentIndex - 2];
        numbers.push(nextNumber);
        currentIndex++;

    }

    return nextNumber;
}


function handleSolveIO() {
   //var args =[1,1,1,4] ;
   var args = [2,3,4, 10];


    console.log(Solve(args));
}

handleSolveIO();