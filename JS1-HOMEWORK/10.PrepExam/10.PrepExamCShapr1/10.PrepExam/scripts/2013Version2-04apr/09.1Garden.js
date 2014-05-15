function Solve(args) {
    var seedTomato = parseInt(args[0]);
    var areaTomato = parseInt(args[1]);
    var priceTomato = 0.5;
    var costTomato = priceTomato*seedTomato;

    var seedCucumber = parseInt(args[2]);
    var areaCucumber = parseInt(args[3]);
    var priceCucumber = 0.4;
    var costCucumber = priceCucumber*seedCucumber;

    var seedPotato = parseInt(args[4]);
    var areaPotato = parseInt(args[5]);
    var pricePotato = 0.25;
    var costPotato = pricePotato*seedPotato;

    var seedCarrot = parseInt(args[6]);
    var areaCarrot = parseInt(args[7]);
    var priceCarrot = 0.6;
    var costCarrot = priceCarrot*seedCarrot;

    var seedCabbage = parseInt(args[8]);
    var areaCabbage = parseInt(args[9]);
    var priceCabbage = 0.3;
    var costCabbage = priceCabbage*seedCabbage;

    var seedBean= parseInt(args[10]);
    var priceBean = 0.4;
    var costBean = priceBean * seedBean;

    var allArea = 250;

    var totalCost = costBean + costCabbage + costCarrot + costPotato + costCucumber + costTomato;
    var result = "Total costs: " + totalCost.toFixed(2)+'\n';

    
    var areaBeans = allArea - (areaCabbage + areaCarrot + areaPotato + areaCucumber + areaTomato);

    if (areaBeans > 0) {
        result += "Beans area: " + areaBeans;
    }
    else if (areaBeans === 0) {
        result += "No area for beans";
    }
    else {
        result += "Insufficient area";
    }
    


    return result;
}

//not for BGCODER
function handleSolveIO() {
    var args = [10,20,25,30,42,38,15,23,18,36,70];
   // var args = [30, 39, 50, 60, 15, 77, 18, 36, 28, 39, 65];
    //var args = [0,0,50,0,0,100,200,50,30,100,65];


    console.log(Solve(args));
}
handleSolveIO();