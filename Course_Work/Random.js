let mark = document.getElementsByClassName('Mark');

function random(){
    return String(Math.fround( Math.random() * (5.00 - 4.00) + 4.00)).substring(0, 4);
}

for (i in mark){
    mark[i].innerHTML = random();
}