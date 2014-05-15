function Solve(args) {
    var px1 = args[0]-0;
    var py1 = args[1]-0;
                    
    var px2 = args[2]-0;
    var py2 = args[3]-0;

    var minX = Math.min(px1, px2);
    var maxX = Math.max(px1, px2);

    var minY = Math.min(py1, py2);
    var maxY = Math.max(py1, py2);


    var x = args[4]-0;
    var y = args[5]-0;
                   
    var d = args[6]-0;

    x = x + d;

    var damage = 0;

    if (x < minX - 1 || x > maxX || y < minY - 1 || y > maxY + 1)
    {
        damage = 0;
    }
    else if ((x >= minX && x <= maxX) && ((y == minY - 1) || (y == maxY + 1)))
    {
        damage = 50;
    }
    else if (x === minX - 1 && (y >= minY && y <= maxY))
    {
        damage = 75;
    }
    else if ((x === maxX || x > maxX - 1) && ((y === minY && y < minY + 1) || (y > maxY && y === maxY)))
    {
        damage = 150;
    }
    else if ((x >= minX && x <= maxX - 1) && (y === minY || y === maxY))
    {
        damage = 225;
    }
    else if ((x >= minX && x <= maxX - 1) && (y >= minY + 1 && y <= maxY - 1))
    {
        damage = 275;
    }

    return damage +"%";
}

function handleSolveIO() {
   var args = [2, 5, 6, 3, -6, 3, 9];
    //var args = [2, 5, 6, 3, -6, 5, 7];
    //var args = [6, 5, 2, 3, 0, 1, -3];
    

    console.log(Solve(args));
}

handleSolveIO();