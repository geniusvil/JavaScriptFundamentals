function Solve(args) {
  

  var sx1 = parseInt(args[0]);
  var sy1 = parseInt(args[1]);
  var sx2 = parseInt(args[2]);
  var sy2 = parseInt(args[3]);

    var minX = Math.min(sx1, sx2);
    var maxX = Math.max(sx1, sx2);
    var minY = Math.min(sy1, sy2);
    var maxY = Math.max(sy1, sy2);

    var shy = parseInt(args[4]);

    var c1x = parseInt(args[5]);
    var c1y = parseInt(args[6]);
    c1y = Math.abs(c1y) + 2 * shy;


    var c2x = parseInt(args[7]);
    var c2y = parseInt(args[8]);
    c2y = Math.abs(c2y) + 2 * shy;

    var c3x = parseInt(args[9]);
    var c3y = parseInt(args[10]);
    c3y = Math.abs(c3y) + 2 * shy;

    var x = [c1x, c2x, c3x];
    var y = [c1y, c2y, c3y];

    var damage = 0;

    for (var i = 0; i < 3; i++) {
        if ((x[i] === minX || x[i] === maxX) && (y[i] === minY || y[i] === maxY)) {
            damage += 25;
        }
        else if ((x[i] === minX || x[i] === maxX) && (minY < y[i] && Y[i] < maxY) ||
                 (y[i] === minY || y[i] === maxY) && (minX < x[i] && x[i] < maxX)) {
            damage += 50;
        }
        else if ((minX < x[i] && x[i] < maxX) && (minY < y[i] && y[i] < maxY)) {
            damage += 100;
        }
    }
    return damage.toString() +"%";
}

function handleSolveIO() {
   var args = [-11, 6, -6, 3, 1, -9, -3, -12, -4, -6, -1];
   // var args = [-6, 6, -11, 3, 1, -9, -4, -11, -1, 2, 2];


    console.log(Solve(args));
}

handleSolveIO();