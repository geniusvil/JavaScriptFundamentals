function Solve(args) {
    var coin5 = 0.05 * (parseInt(args[0]));
    var coin10 = 0.10 * (parseInt(args[1]));
    var coin20 = 0.20 * (parseInt(args[2]));
    var coin50 = 0.50 * (parseInt(args[3]));
    var coin100 = 1.00 * (parseInt(args[4]));

    var customer = (parseFloat(args[5]));
    var price = (parseFloat(args[6]));

    var result = "";
    var moneyMachine = coin5 + coin10 + coin20 + coin50 + coin100;

    if (customer >= price && moneyMachine > customer - price) {
        var moneyLeft = moneyMachine -( customer - price);
        result = "Yes " + moneyLeft.toPrecision(3);
    }
    else if (customer < price) {
        var moreMoney = price - customer;
        result = "More " + moreMoney.toFixed(2);
    }
    else if (customer >= price && moneyMachine < customer - price) {
        var insufficiantMoney = customer - price - moneyMachine;
        result = "No " + insufficiantMoney.toFixed(2);
    }

   

    return result;
}

//not for BGCODER
function handleSolveIO() {
   // var args = [4, 5, 4, 2, 1,3.00,1.90];
   // var args = [4, 5, 4, 2, 1, 3.00, 4.00];
    var args = [4, 5, 4, 2, 1, 10.00, 2.00];

    console.log(Solve(args));
}
handleSolveIO();

