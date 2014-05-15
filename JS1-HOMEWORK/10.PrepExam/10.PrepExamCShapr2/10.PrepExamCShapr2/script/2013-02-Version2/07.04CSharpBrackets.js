function solve(args) {
    var symbols = args[1];
    var text = [];
    var word = '';

    for (var i = 2; i < args.length; i++) {
        var currentArgument = args[i];
        for (var j = 0; j < currentArgument.length; j++) {
            var element = currentArgument[j];
            if (element === '{') {
                if (word !== " ") {
                    text.push(word);
                    word = "";
                }
                text.push(element);
                
            }
            else if (element === '}' ) {
                if (word !== " ") {
                    text.push(word);
                    word = "";
                }
               
                text.push(element);
            }
            else {
                word += element;
            }
            if (j === currentArgument.length - 1 && word !== " ") {
                text.push(word);
                word = '';
            }
        }
    }

    //currentLine.split(/\s+/).filter(function nonEmpty(element) {
    //if (element !== ' ') {
    //    return element;
    //}

    text = text.filter(function (element) { if (element !== '') { return element.trim(); } })

    var result = "";
    var count = 0;
    for (i = 0; i < text.length; i++) {
       
        currentLine = text[i];
        if (currentLine === '{') {
            result += addSpaces(count, symbols);
            count++;
            result += '{' + '\n';
        }
        else if (currentLine === '}') {
            count--;
            result += addSpaces(count, symbols);
            result += '}' + '\n';
        }
        else {

            var wordsInLine = currentLine.split(/\s+/).filter(function nonEmpty(element) { if (element !== '') { return element.trim(); }}) 
            if (count > 0) {
                result += addSpaces(count, symbols);
            }

            
            result +=wordsInLine.join(" ")+ '\n';
        }

    }
    function addSpaces(count, symbols) {
        var result = '';
        for (var s = 0; s < count; s++) {
            result += symbols;
        }
        return result;
    }
    
    return result;
}

//that part not for BgCoder
function handleSolveIO() {
   
   var args = ["3", ">>", "{a{", "}", "}"];
   // var args = ["5", "....", "using System;    namespace Stars", "{class Program{", "static    string[] separators ", '= new string[] { " " };}', "}"]
    console.log(solve(args));
}
handleSolveIO();