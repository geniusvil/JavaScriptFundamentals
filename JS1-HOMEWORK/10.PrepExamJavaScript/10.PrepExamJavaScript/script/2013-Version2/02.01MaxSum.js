function solve(args) {
    var numbers = [];

    for (var i = 1; i < args.length; i++) {
        numbers.push(args[i] - 0);
    }

    var maxSum = numbers[0]; // why is not working with maxSum=Number.Max_Value;????????????????????

    for (var i = 0; i < numbers.length-1; i++) {
        var currentNumber = numbers[i];
        var currentSum = currentNumber;
        if (maxSum < currentSum) {
            maxSum = currentSum;
        }
        for (var j = i+1; j < numbers.length; j++) {
            var nextNumber = numbers[j];
            currentSum += nextNumber;
            if (maxSum < currentSum) {
                maxSum = currentSum;
            }
        }
    }

    


    return maxSum;
}

//that part not for bgcoder
function handleSolveIO() {

    var args = ["8", "1", "6", "-9", "4", "4", "-2", "10", "-1"];
    //var args =['6',"1","3","-5","8","7","-6"];
 //var  args = ["9", "-9", "-8", "-8", "-7", "-6", "-5", "-1", "-7", "-6"];




    console.log(solve(args));

}
handleSolveIO();