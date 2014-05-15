function Solve(args) {
    var games = parseInt(args[0]);

    var firstPlayer = [args[1].toString(), args[2].toString(), args[3].toString()];
    var firstPlayerScore = 0;
    var firstPlayerGamesResult = 0;
    var firstPlayerGamesWon = 0;

    var secondPlayer = [args[4].toString(), args[5].toString(), args[6].toString()];
    var secondPlayerScore = 0;
    var secondPlayerGamesResult = 0;
    var secondPlayerGamesWon = 0;

    var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"];
    var points = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13];

    var result = "";
    var isGameOver = false;

    for (var i = 0; i < games; i++) {
        var firstPlayerCountX = 0;
        var secondPlayerCountX = 0;

        var indexFirstPlayerFirstCard = cards.indexOf(firstPlayer[0]);
        var indexFirstPlayerSecondCard = cards.indexOf(firstPlayer[1]);
        var indexFirstPlayerThirdCard = cards.indexOf(firstPlayer[2]);
        firstPlayerScore = points[indexFirstPlayerFirstCard] + points[indexFirstPlayerSecondCard] + points[indexFirstPlayerThirdCard];

        var firstPlayerCountZ = (firstPlayer.filter(function (it) { return it === "Z"; })).length;
        if (firstPlayerCountZ !== 0) {
            firstPlayerGamesResult = firstPlayerGamesResult * 2 * firstPlayerCountZ;
        }
        var firstPlayerCountY = (firstPlayer.filter(function (it) { return it === "Y"; })).length;
        if (firstPlayerCountY !== 0) {
            firstPlayerGamesResult = firstPlayerGamesResult - firstPlayerCountY * 200;
        }
        if (firstPlayer.indexOf("X") !== -1) { firstPlayerCountX++; }

        var indexSecondPlayerFirstCard = cards.indexOf(secondPlayer[0]);
        var indexSecondPlayerSecondCard = cards.indexOf(secondPlayer[1]);
        var indexSecondPlayerThirdCard = cards.indexOf(secondPlayer[2]);
        secondPlayerScore = points[indexSecondPlayerFirstCard] + points[indexSecondPlayerSecondCard] + points[indexSecondPlayerThirdCard];

        var secondPlayerCountZ = (secondPlayer.filter(function (it) { return it === "Z"; })).length;
        if (secondPlayerCountZ !== 0) {
            secondPlayerGamesResult = secondPlayerGamesResult * 2 * secondPlayerCountZ;
        }
        var secondPlayercountY = (secondPlayer.filter(function (it) { return it === "Y"; })).length;
        if (secondPlayercountY !== 0) {
            secondPlayerGamesResult = secondPlayerGamesResult - secondPlayercountY * 200;
        }
        if (secondPlayer.indexOf("X") !== -1) { secondPlayerCountX++; }


        if (firstPlayerCountX > 0 && secondPlayerCountX > 0) {
            firstPlayerGamesResult += 50;
            secondPlayerGamesResult += 50;
        }

        if (firstPlayerCountX > 0 && secondPlayerCountX === 0) {
            result += "X card drawn! Player one wins the match!";
            isGameOver = true;
            break;
        }
        else if (firstPlayerCountX === 0 && secondPlayerCountX > 0) {
            result += "X card drawn! Player two wins the match!";
            isGameOver = true;
            break;
        }
        else {
            if (firstPlayerScore > secondPlayerScore) {
                firstPlayerGamesResult += firstPlayerScore;
                firstPlayerGamesWon++;
            }
            else if (firstPlayerScore < secondPlayerScore) {
                secondPlayerGamesResult += secondPlayerScore;
                secondPlayerGamesWon++;
            }

            firstPlayerScore = 0;
            secondPlayerScore = 0;
        }

    }
    if (!isGameOver) {
        if (firstPlayerGamesResult > secondPlayerGamesResult) {
            result += "First player wins!" + '\n' + "Score: " + firstPlayerGamesResult + '\n' + "Games won: " + firstPlayerGamesWon;

        }
        else if (firstPlayerGamesResult < secondPlayerGamesResult) {
            result += "Second player wins!" + '\n' + "Score: " + secondPlayerGamesResult + '\n' + "Games won: " + secondPlayerGamesWon;

        }
        else if (firstPlayerGamesResult === secondPlayerGamesResult) {
            result += "It's a tie!" + '\n' + "Score: " + secondPlayerGamesResult;
        }
    }


    return result;
}

//not for BGCODER
function handleSolveIO() {
    //var args = [2, 2, 2, 2, "A", "A", 5];
    var args = [1, 10, 10, 10, "K", "Q", "J"];

    //var args = [1, "K", "Q", "J", 10, "X", 10];

    //var args = [2, "A", "A", "A", "A", "A", "A"];


    console.log(Solve(args));
}
handleSolveIO();