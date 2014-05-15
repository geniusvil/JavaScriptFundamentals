function Solve(args) {
    var n= parseFloat(args[0]);
    var m = parseFloat(args[1]);
    var p =parseFloat(args[2]);

    var squareN = n *n;
    var productMP = m * p;
    var productNumberWithP = 128.523123123 * p;

    var up = squareN + (1 / productMP) +1337;
    var down = n - productNumberWithP;

   
    var mMod180 = m % 180;
    var sinM = Math.sin(parseInt(mMod180));
   

    var result = (up / down) + sinM;
  

    return result.toFixed(6);
}


function handleSolveIO() {
    //var args = [1, 2, 3];
    //var args = [0.1234, 1.2345, 2.3456];
    var args = ["0.123456", "1.234567", "2.345678"];

    console.log(Solve(args));
}

handleSolveIO();