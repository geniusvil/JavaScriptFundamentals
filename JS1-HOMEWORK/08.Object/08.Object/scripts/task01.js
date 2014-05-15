function calculateDistance(firstPoint, secondPoint) {
    return (Math.sqrt((secondPoint.x - firstPoint.x) * (secondPoint.x - firstPoint.x) +
                    (secondPoint.y - firstPoint.y) * (secondPoint.y - firstPoint.y)));

}
function checkForTriangle(distanceAB, distanceCB, distanceAC) {
    if (distanceAB + distanceCB > distanceAC &&
        distanceAB + distanceAC > distanceCB &&
        distanceCB + distanceAC > distanceAB) {

        jsConsole.writeLine("The points form a triangle");
        //cannot print why????
        //jsConsole.writeline("Points A(" + pointA.x + "," + pointA.y + ")" + " B(" + pointB.x + "," + pointB.y + ")" + " and C(" + pointC.x + "," + pointC.y + ") form a triangle.");
        jsConsole.writeLine();
    }
    else {

        jsConsole.writeLine("The points CANNOT form a triangle");
        //cannot print why????
        //jsConsole.writeLine("Points A(" + pointA.x + "," + pointA.y + ")" + " B(" + pointB.x + "," + pointB.y + ")" + " and C(" + pointC.x + "," + pointC.y + ") CANNOT form a triangle.");
        jsConsole.writeLine();
    }
}

function executeCalculateDistance() {

    var pointA = new Point(),
   pointB = new Point(),
   pointC = new Point();

    getPoints();

    var distanceAB = 0,
           distanceAC = 0,
           distanceCB = 0;

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    function getPoints() {

        pointA.x = jsConsole.readFloat("#xA");
        pointA.y = jsConsole.readFloat("#yA");

        pointB.x = jsConsole.readFloat("#xB");
        pointB.y = jsConsole.readFloat("#yB");

        pointC.x = jsConsole.readFloat("#xC");
        pointC.y = jsConsole.readFloat("#yC");

    }


    distanceAB = calculateDistance(pointA, pointB);
    distanceAC = calculateDistance(pointA, pointC);
    distanceCB = calculateDistance(pointC, pointB);


    jsConsole.writeLine("Distance between A and B is " + distanceAB);
    jsConsole.writeLine("Distance between A and C is " + distanceAC);
    jsConsole.writeLine("Distance between C and B is " + distanceCB);
    jsConsole.writeLine();
}


function executeCheckForTriangle() {

    var pointA = new Point(),
  pointB = new Point(),
  pointC = new Point();

    getPoints();

    var distanceAB = 0,
           distanceAC = 0,
           distanceCB = 0;

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    function getPoints() {

        pointA.x = jsConsole.readFloat("#xA");
        pointA.y = jsConsole.readFloat("#yA");

        pointB.x = jsConsole.readFloat("#xB");
        pointB.y = jsConsole.readFloat("#yB");

        pointC.x = jsConsole.readFloat("#xC");
        pointC.y = jsConsole.readFloat("#yC");

    }

    distanceAB = calculateDistance(pointA, pointB);
    distanceAC = calculateDistance(pointA, pointC);
    distanceCB = calculateDistance(pointC, pointB);

    checkForTriangle(distanceAB, distanceCB, distanceAC);

}