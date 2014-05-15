function solve(args) {
    var path = args[0];
    var numberPatterns = args[1];
    var patterns = [];

    for (var i = 2; i < args.length; i++) {
        patterns.push(args[i]);
    }

   
    var indexPath = 0;

    var sumOfEveryPattern = [];
    var isEscaped = false;

    for (i = 0; i < patterns.length; i++) {
        var pattern = patterns[i];
        var visitedPath = new Array(path.length);
        visitedPath[0] = 1;
        var sum = path[0] - 0;

        for (var j = 0; j < pattern.length; j++) {
            var step = pattern[j] - 0;
             indexPath+=step;
             if (indexPath >= path.length || visitedPath[indexPath] === 1) {
                 isEscaped = true;
                 break;
             }

             sum += path[indexPath];
             visitedPath[indexPath] = 1;
             if (j === pattern.length - 1) {
                 j = -1;
             }
        }

        sumOfEveryPattern.push(sum);

    }
    
    var result = 0;
    if (sumOfEveryPattern.length === 1) {
        result = sumOfEveryPattern[0];
    }
    else {
        ////Version1
        //var maxSum = Number.MIN_VALUE;
        //for (i = 0; i < sumOfEveryPattern.length; i++) {
        //    if (sumOfEveryPattern[i] > maxSum) {
        //        maxSum = sumOfEveryPattern[i];
        //    }
        //}
        //result = maxSum;

        //version2
        sumOfEveryPattern.sort(orderBy);
        result = sumOfEveryPattern[sumOfEveryPattern.length - 1];
    }

    function orderBy(a, b) {
        return (a === b) ? 0 : (a > b) ? 1 : -1;
    }
    return result.toString();
}

//that part not for BgCoder
function handleSolveIO() {
    var args = [[1, 3, -6, 7, 4, 1, 12],
                [3],
                [1, 2, -3],
                [1, 3, -2],
                [1, -1]];



    console.log(solve(args));
}
handleSolveIO();