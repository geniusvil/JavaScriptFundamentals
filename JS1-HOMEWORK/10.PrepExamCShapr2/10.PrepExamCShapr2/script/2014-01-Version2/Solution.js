function Solve(params) {
    var N = parseInt(params[0]);
    var answer = 0;
    var previousMax = Number.MAX_VALUE;
    for (var i = 1; i < params.length; i++) {
        var a = +params[i];
        if (+params[i] < previousMax) {
            answer++;
        }
        previousMax = +params[i];
    }
    return answer;
}

//function Solve(params) {
//	var N = parseInt(params[0]);
//	var count = 1;
//	var current = parseInt(params[1]);
//	for (var i = 2; i <= N; i++) {
//		var next = parseInt(params[i]);
//		if (next < current) {
//			count++;
//		}
//		current = next;
//	}
//	return count;
//}
function handleSolveIO() {
    var params = ["7","1","2","-3","4","4","0","1"];
    // var params = ["6", "1", "3", "-5", "8", "7", "-6"];
   // var params = ["9", "1", "8", "8", "7", "6", "5", "7", "7", "6"];

    console.log(Solve(params));

}
handleSolveIO();