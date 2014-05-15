function Solve(args) {
    var hand = [args[0].toString(), args[1].toString(), args[2].toString(), args[3].toString(), args[4].toString()];

    var card2 = (hand.filter(function (it) { return it === "2";  })).length;
    var card3 = (hand.filter(function (it) { return it === "3";  })).length;
    var card4 = (hand.filter(function (it) { return it === "4";  })).length;
    var card5 = (hand.filter(function (it) { return it === "5";  })).length;
    var card6 = (hand.filter(function (it) { return it === "6";  })).length;
    var card7 = (hand.filter(function (it) { return it === "7";  })).length;
    var card8 = (hand.filter(function (it) { return it === "8";  })).length;
    var card9 = (hand.filter(function (it) { return it === "9";  })).length;
    var card10 =( hand.filter(function (it) { return it === "10";})).length;
    var cardJ = (hand.filter(function (it) { return it === "J";  })).length;
    var cardQ = (hand.filter(function (it) { return it === "Q";  })).length;
    var cardK = (hand.filter(function (it) { return it === "K";  })).length;
    var cardA = (hand.filter(function (it) { return it === "A";  })).length;

    var result = "";

    if (card2 === 5 || card3 === 5 || card4 === 5 || card5 === 5 || card6 === 5 || card7 === 5 || card8 === 5 ||
        card9 === 5 || card10 === 5 || cardJ === 5 || cardQ === 5 || cardK === 5 || cardA === 5) {
        result = "Impossible";
    }
    else if (card2 === 4 || card3 === 4 || card4 === 4 || card5 === 4 || card6 === 4 || card7 === 4 || card8 === 4 ||
             card9 === 4 || card10 === 4 || cardJ === 4 || cardQ === 4 || cardK === 4 || cardA === 4) {
        result = "Four of a Kind";
    }
    else {
        var king3 = card2 === 3 || card3 === 3 || card4 === 3 || card5 === 3 || card6 === 3 || card7 === 3 || card8 === 3 ||
            card9 === 3 || card10 === 3 || cardJ === 3 || cardQ === 3 || cardK === 3 || cardA === 3;

        var king2 = 0;
        if (card2 === 2) king2++;
        if (card3 === 2) king2++;
        if (card4 === 2) king2++;
        if (card5 === 2) king2++;
        if (card6 === 2) king2++;
        if (card7 === 2) king2++;
        if (card8 === 2) king2++;
        if (card9 === 2) king2++;
        if (card10 === 2) king2++;
        if (cardJ === 2) king2++;
        if (cardQ === 2) king2++;
        if (cardK === 2) king2++;
        if (cardA === 2) king2++;

        if (king3 && king2 === 1) {
            result = "Full House";

        }
        else if (king3) {
            result = "Three of a Kind";


        }
        else if (king2 === 2) {
            result = "Two Pairs";

        }
        else if (king2 === 1) {
            result = "One Pair";

        }
        else if ((card2 === 1 && card3 === 1 && card4 === 1 && card5 === 1 && card6 === 1) ||
                 (card3 === 1 && card4 === 1 && card5 === 1 && card6 === 1 && card7 === 1) ||
                 (card4 === 1 && card5 === 1 && card6 === 1 && card7 === 1 && card8 === 1) ||
                 (card5 === 1 && card6 === 1 && card7 === 1 && card8 === 1 && card9 === 1) ||
                 (card6 === 1 && card7 === 1 && card8 === 1 && card9 === 1 && card10 === 1) ||
                 (card7 === 1 && card8 === 1 && card9 === 1 && card10 === 1 && cardJ === 1) ||
                 (card8 === 1 && card9 === 1 && card10 === 1 && cardJ === 1 && cardQ === 1) ||
                 (card9 === 1 && card10 === 1 && cardJ === 1 && cardQ === 1 && cardK === 1) ||
                 (card10 === 1 && cardJ === 1 && cardQ === 1 && cardK === 1 && cardA === 1) ||
                 (cardA === 1 && card2 === 1 && card3 === 1 && card4 === 1 && card5 === 1)) {
            result = "Straight";


        }
        else {
            result = "Nothing";
        }

    }
    return result;
}


//not for BGCODER
function handleSolveIO() {
    var args = [2,7,"A","J","K"];
      //var args = [4, 2, "A", 3,5];
    //var args = [8, "J", "J", 8, 8];


    console.log(Solve(args));
}
handleSolveIO();