var answers1 = ["A", "C", "B"];
var answers2 = ["A", "A", "B"];
var answers3 = ["B", "A", "D"];
    tot = answers1.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore(list) {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === list[i]) score += 1;
    return score;
}
function returnScore(number) {
    if (number == 1) {
        var list = answers1;
    }
    if (number == 2) {
        var list = answers2;
    }
    if (number == 3) {
        var list = answers3;
    }
    
    var value=getScore(list);
    document.getElementById("myresults").innerHTML =
    "Your score is " + value + "/" + tot;
   
    if (number == 1) {
        var cell = window.getElementById("val1");
       
        cell.innerHTML = value;
       
    }
}