function solve(args) {

   
    var maxCountPositions = 0;
   
   var currentPath = args[0].split(", ");//za bgCoder

   // var currentPath = args;


        for (var i = 0, len = currentPath.length ; i < len ; i++) {
          //  var visitedPath = new Array(currentPath.length);
           // visitedPath[i] = 1;

            var currentIndex = i;
            for (var step = 1; step <= currentPath.length; step++) {
                var countVisitedPositions = 1;

                var nextIndex = (currentIndex + step) % len;

                while (true) {
                    var currentPosition = currentPath[currentIndex] - 0;
                    var nextPosition = currentPath[nextIndex] - 0;

                    if (currentPosition < nextPosition) {
                        countVisitedPositions++;
                     //   visitedPath[nextIndex] = 1;
                        currentIndex = nextIndex;
                        nextIndex = (currentIndex + step) % len;

                    }
                    else {
                        currentIndex = i;
                        break;
                    }

                }
                if (countVisitedPositions > maxCountPositions) {
                    maxCountPositions = countVisitedPositions;
                }
            }


        }
  

    return maxCountPositions;
}

//that part not for BgCoder
function handleSolveIO() {
  var args = [1, -2, -3, 4, -5, 6, -7, -8];
 //var args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
    //var args = [1, 1, 1];
  var args = [18, -371, -39, 39, -374, -46, 28, -377, -53, -816, -380, -60, 38, -383, -35, 27, -386, -42, 16, -357, -49, -813, -360, -56, 26, -363, -63, 15, -366, -38, 36, -369, -45, -818, -372, -52, 14, -375, -59, 35, -378, -34, 24, -381, -41, -815, -384, -48, 34, -387, -55, 23, -358, -62, 44, -361, -37, -812, -364, -44, 22, -367, -51, 43, -370, -58, 32, -373, -33, -817, -376, -40, 42, -379, -47, 31, -382, -54, 20, -385, -61, -814, -356, -36, 30, -359, -43, 19, -362, -50, 40, -365, -57, -819, -368, -32];


    console.log(solve(args));
}
handleSolveIO();