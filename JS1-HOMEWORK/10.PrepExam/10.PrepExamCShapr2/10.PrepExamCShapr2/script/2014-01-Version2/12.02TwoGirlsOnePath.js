function solve(args) {
    var path = [];
    var input = args[0].split(' ');

    for (var i = 0; i < input.length; i++) {
        var currentCell = input[i];
        path.push(parseInt(currentCell));
    }

    var pathLength = path.length;
    var indexMolly = 0;
    var flowersMolly = 0;
    var indexDolly = path.length - 1;
    var flowersDolly = 0;

    var result = "";

    while (true) {
        if (path[indexMolly] === 0) {

            result += "Dolly" + '\n';
            flowersDolly += path[indexDolly];
            break;
        }
        else if (path[indexDolly] === 0) {
            result += "Molly" + '\n';
            flowersMolly += path[indexMolly];
            break;
        }
        else if (path[indexMolly] === 0 && path[indexDolly] === 0) {
            result += "Draw" + '\n';
            break;
        }

        if (indexDolly === indexMolly) {
            flowersMolly += parseInt(path[indexMolly] / 2);
            flowersDolly += parseInt(path[flowersDolly] / 2);

            if (path[indexDolly] % 2 === 0) {
                path[indexDolly] = 0;
            }
            else {
                path[indexDolly] = 1;
            }
        }
        else {
            var currentCountFlowersMolly = path[indexMolly]
            flowersMolly += currentCountFlowersMolly;
            path[indexMolly] = 0;

            var currentCountFlowersDolly = path[indexDolly]
            flowersDolly += currentCountFlowersDolly;
            path[indexDolly] = 0;

        }

        indexMolly += currentCountFlowersMolly;
        indexDolly -= currentCountFlowersDolly;

        if (indexMolly >= pathLength) {
            indexMolly = indexMolly % pathLength;
        }

        if (indexDolly < 0) {
            indexDolly = pathLength + (indexDolly % pathLength);
            if (indexDolly === pathLength) {
                indexDolly = 0;
            }
        }
    }
    result += flowersMolly + ' ' + flowersDolly;
 
    return result;
}

//that part not for BgCoder
function handleSolveIO() {
    var args = ["4 17 4 2 7 11 3 2"];



    console.log(solve(args));
}
handleSolveIO()