function execute() {

    var people = [
                    { name: "Mark Stone", age: 33 },
                    { name: "Tony Heghfield", age: 29 },
                    { name: "Gregory Smith", age: 36 },
                    { name: "Vermonth Show", age: 36 },
                    { name: "Fritz Gabon", age: 46 }
    ];

    var template = document.getElementById("list-item").innerHTML;
    template = template.trim();

    var pattern = /-{(\w+)}-/g;

    var UL = createUlList(people, template, pattern);
    jsConsole.writeLine(UL);


};

function createListItem(obj, template, pattern) {
    var result = "<li>";

    result += template.replace(pattern, function (match, capture) { return obj[capture]; });

    result += "</li>";
    return result;
}

function createUlList(obj, template, pattern) {
    var strArr = [];
    strArr.push("<ul>");

    for (var i = 0; i < obj.length; i++) {
        var listItem = createListItem(obj[i], template, pattern);
        strArr.push(listItem);
    }

    strArr.push("</ul>");

    return strArr.join('');
}
