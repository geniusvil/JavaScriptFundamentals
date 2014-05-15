function compareCharArrays() {
    var inputFirstTokens = jsConsole.read("#firstArray").trim(),
         inputSecondTokens = jsConsole.read("#secondArray").trim(),

         firstArray = inputFirstTokens.split(" "),
         secondArray = inputSecondTokens.split(" ");

    //var maxLenght;

    if (firstArray.length > secondArray.length) {
        jsConsole.writeLine("[ " + inputSecondTokens + " ]" + " array is earlier, because is shorther.")
       
    }
    else if (firstArray.length < secondArray.length) {
        jsConsole.writeLine("[ " + inputFirstTokens + " ]" + " array is earlier, because is shorther.")
     

    }
    else if (firstArray.length === secondArray.length) {

        var count = 0;
        var i;

        for (i = 0; i < firstArray.length; i++) {
            if (firstArray[i] < secondArray[i]) {
                jsConsole.writeLine("[ " + inputFirstTokens + " ]" + " array is earlier in lexicographically meaning.");
                break;
              

            }
            else if (firstArray[i] > secondArray[i]) {
                jsConsole.writeLine("[ " + inputSecondTokens + " ]" + " array is earlier in lexicographically meaning.");
                break;
               
            }
            else if (firstArray[i] === secondArray[i]) {
                count++;
            }
        }
        if (count === firstArray.length) {
            jsConsole.writeLine("The two arrays are equal.");
        }
    }


}
//w e d t
//a t r m