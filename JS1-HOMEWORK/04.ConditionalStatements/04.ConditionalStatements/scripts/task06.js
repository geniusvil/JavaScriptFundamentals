function SortThreeNumbers() {

    var a = jsConsole.readFloat("#inputFirstNumber");
    var b = jsConsole.readFloat("#inputSecondNumber");
    var c = jsConsole.readFloat("#inputThirdNumber");

    var d = Math.sqrt(b * b - 4 * a * c);


    var x;
    var x1;
    var x2;

    if (d == 0) {
        if (a != 0) {
            if (b != 0) {
                x1 = x2 = -b / (2 * a);
                jsConsole.writeLine("X1,2 = " + x1);
            }
            else {
                x1 = x2 = Math.sqrt(-c / a);
                jsConsole.writeLine("X1,2 = " + x1);
            }
        }
        else {
            jsConsole.writeLine("There is no solution!");
        }
    }
    else {
        if (d > 0) {
            if (a != 0) {
                x1 = (-b - d) / (2 * a);
                x2 = (-b + d) / (2 * a);
                jsConsole.writeLine("X1 = " + x1 + ", " + "X2 = " + x2);
            }
            else {
                if (b != 0) {
                    x = -c / b;
                    jsConsole.writeLine("X = " + x);
                }
                else {
                    jsConsole.writeLine("There is no solution!");
                }
            }
        }
        else {
            jsConsole.writeLine("There is no solution!");
        }
    }
}