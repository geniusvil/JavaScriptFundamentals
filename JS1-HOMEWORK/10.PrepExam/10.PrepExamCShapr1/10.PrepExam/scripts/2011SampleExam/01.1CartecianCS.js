function Solve(args) {
    var x = parseFloat(args[0]),
		y = args[1] - 0,
		result = 0;

    if (x > 0 && y > 0) {
        result = 1;
    }
    else if (x < 0 && y > 0) {
        result = 2;
    }
    else if (x < 0 && y < 0) {
        result = 3;
    }
    else if (x > 0 && y < 0) {
        result = 4;
    }
    else if (x === 0 && y === 0) {
        result = 0;
    }
    else if (((x === 0) && (y > 0)) || ((x === 0) && (y < 0))) {
        result = 5;
    }
    else if (((x > 0) && (y === 0)) || ((x < 0) && (y === 0))) {
        result = 6;
    }
    //console.log(result);
    return result;
}

function readingInpit() {
    //var args = [1,2];
    //var args = [-3, -4];
   // var args = [-3000, 9000];
    //var args = [12345, -9876543];
    var args = [1337, 0];


    console.log(Solve(args));
}

readingInpit();