function execute() {
    var text = jsConsole.read("#inputText");
    //if (!inputObject) {    tuk ne]o mi bqga ???????????????????????
    //    text = "When the days are cold, And the cards all fold, And the saints we see, Are all made of gold, When your dreams all fail, And the ones we hail, Are the worst of all, And the blood’s run stale, I wanna hide the truth, I wanna shelter you, But with the beast inside, There’s nowhere we can hide, No matter what we breed, We still are made of greed, This is my kingdom come."
    //}

    var result = text.replace(/ /g, "&nbsp;");
    jsConsole.writeLine(result);
    jsConsole.writeLine("The result can be seen in ExpectElement of the printed text");
}