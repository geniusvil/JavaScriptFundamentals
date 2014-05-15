function IsInCircleOutRec() {

    var inputX = jsConsole.readFloat("#inputX");
    var inputY = jsConsole.readFloat("#inputY");
    var Xc = 1;
    var Yc = 1;
    var radius = 3;
    var XL = -1;
    var YL = 1;
    var width = 6;
    var height = 3;
    var XR = XL + width;
    var YR = YL - height;
    var InCircle = false;
    var InRec = false;

    if (((inputX - Xc) * (inputX - Xc) + (inputY - Yc) * (inputY - Yc)) < radius * radius) {
        InCircle = true;
    }
    else {
        InCircle = false;
    }

    if ((inputX > XL && inputX < XR) && (inputY < YL && inputY > YR)) {
        InRec = true;
    }
    else {
        InRec = false;
    }
    if (InCircle == true && InRec == false) {
        jsConsole.writeLine("Point (" + inputX + "," + inputY + ") is INSIDE of Circle ((1,1), 3) and OUT of Rectangle (top=1, left=-1, width=6, height=2)");
    }
    else if (InRec == true && InCircle == false) {
        jsConsole.writeLine("Point (" + inputX + "," + inputY + ") is OUTSIDE of Circle ((1,1), 3) and INSIDE of Rectangle (top=1, left=-1, width=6, height=2)");
    }
    else if (InCircle == true && InRec == true) {
        jsConsole.writeLine("Point (" + inputX + "," + inputY + ") is INSIDE of Circle ((1,1), 3) and INSIDE of Rectangle (top=1, left=-1, width=6, height=2)");
    }
    else {
        jsConsole.writeLine("Point (" + inputX + "," + inputY + ") is OUTSIDE of Circle ((1,1), 3) and OUTSIDE of Rectangle (top=1, left=-1, width=6, height=2)");
    }
}