function Solve(args) {
    var day = args[0];
    var month = args[1] - 1;
    var year = args[2];

    var today = new Date(year, month, day);
   // console.log(today);
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
   // console.log(tomorrow);
    return tomorrow.getDate() + "." + (tomorrow.getMonth() + parseInt(1)) + "." + tomorrow.getFullYear();
}

//not for BGCODER
function handleSolveIO() {
    var args = [1,11,2012];
   // var args = [30,9,2011];
    //var args = [28, 2, 2003];
   //var args = [31, 12, 2012];

    console.log(Solve(args));
}
handleSolveIO();