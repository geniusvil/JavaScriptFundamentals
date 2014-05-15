function Solve(args) {


    var scores = [];
    for (var i = 1; i < args.length; i++) {
        scores.push(parseInt(args[i]));
    }
    //console.log(scores);

    scores.sort(orderBy);
    // console.log(scores);

    var result = buildArrayOfNumbersAndTheirCounts(scores);
    //console.log(result);

    var indexMaxScore = FindElementWithMaxAqurancy(result);
    //console.log(indexMaxScore);

    function orderBy(a, b) {
        return (a === b) ? 0 : (a > b) ? 1 : -1;
    };

    function buildArrayOfNumbersAndTheirCounts(scores) {
        var result = [];

        for (var i = 0; i < scores.length; i++) {
            var count = 1;

            for (var j = i + 1; j < scores.length; j++) {
                if (scores[i] === scores[j]) {
                    count++;
                } else {
                    result[scores[i]] = count;
                    i = j - 1;
                    break;
                }
            }
            if (i === scores.length - 1 && scores[i] !== scores[i - 1]) {
                result[scores[i]] = 1;
            }
        }
        return result;
    }

    function FindElementWithMaxAqurancy(result) {

        var maxScore = 0;
        var indexMaxScore = 0;

        for (var i = 0; i < result.length; i++) {
            if (result[i] !== undefined) {
                if (result[i] > maxScore) {
                    maxScore = result[i];
                    indexMaxScore = i;
                }

            }
        }

        return indexMaxScore;
    }



    return indexMaxScore;
}

function handleSolveIO() {
     var args = [5,1, 2, 3, 1, 2];
    //var args = [4, 1, 3, 3, 7];
    //var args = [1, 6];

    console.log(Solve(args));
};

handleSolveIO();