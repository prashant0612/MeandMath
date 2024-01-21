var answers1 = ["A", "C", "A", "B", "B"];
var answers2 = ["A", "A", "B" , "D", "A"];
var answers3 = ["B", "A", "D" ,"B", "C"];
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
        sessionStorage.setItem('quiz1', value);
       
    }
    if (number == 2) {
        sessionStorage.setItem('quiz2', value);
       
    }
    if (number == 3) {
        sessionStorage.setItem('quiz3', value);
       
    }
}

var cell1 = document.getElementById("val1");
var cell2 = document.getElementById("val2");
var cell3 = document.getElementById("val3");

if (sessionStorage.getItem("quiz1")) {
        
cell1.innerHTML = sessionStorage.getItem('quiz1');
}else {
    cell1.innerHTML = "not attempted";
}

if (sessionStorage.getItem("quiz2")) {
        
cell2.innerHTML = sessionStorage.getItem('quiz2');
}else {
    cell2.innerHTML = "not attempted";
}

if (sessionStorage.getItem("quiz3")) {
        
cell3.innerHTML = sessionStorage.getItem('quiz3');
}else {
    cell3.innerHTML = "not attempted";
}

