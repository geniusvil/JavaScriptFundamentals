function solve(args) {
    var words = [];

    var maxLength = 0;

    for (var i = 1; i < args.length; i++) {
        var currentWord = args[i];
        currentLength = currentWord.length;
        words.push(args[i]);
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }


    //reorder
   // var reorderWords = [];
    for ( i = 0, len  = words.length; i < len; i++) {
         currentWord = words[i];
       
        var newIndex = currentLength % (len+1);
        words.splice(newIndex, 0, currentWord);

        if (newIndex > i) {
            words.splice(i, 1);//remove cuttentWord 
        }
        else {
            words.splice(i+1, 1);//remove cuttentWord 
        }
    }

    //print
    var result = "";
    for (i = 0; i < maxLength; i++) {
        for (var j = 0,len = words.length; j < len; j++) {
            currentWord = words[j];
            currentLength = currentWord.length;
            if (i < currentLength) {
                result += currentWord[i];
            }
        }
    }
  
   

    return result;
}

//that part not for BgCoder
function handleSolveIO() {
  
    //var args = [3, "hi", "academy", "exam"];
   //var args = [2, "you", "win"];
  //var args = [1, "hi"];
  var args = [4, "nakov", "wrote", "this", "problem"];

    console.log(solve(args));
}
handleSolveIO()