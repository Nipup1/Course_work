let obj1 = document.getElementById("Card1");
let obj2 = document.getElementById("Card2");
let obj3 = document.getElementById("Card3");

obj1.style.opacity = 1;
obj2.style.opacity = 0;
obj3.style.opacity = 0;

let bttn_left = document.getElementById("bttn_left")
let bttn_right = document.getElementById("bttn_right")

bttn_right.addEventListener('click', () => {
    let opacity_1 = obj1.style.opacity;
    let opacity_2 = obj2.style.opacity;
    let opacity_3 = obj3.style.opacity;


    if(opacity_1 !== "0"){
        obj1.style.width = "0";
        obj1.style.opacity = "0";
        obj2.style.width = "100%";
        obj2.style.opacity = "1";
    } else if(opacity_2 !== "0"){
        obj2.style.width = "0px";
        obj2.style.opacity = "0";
        obj3.style.width = "100%";
        obj3.style.opacity = "1";
    }
});

bttn_left.addEventListener('click', () => {
    let opacity_1 = obj1.style.opacity;
    let opacity_2 = obj2.style.opacity;
    let opacity_3 = obj3.style.opacity;


    if(opacity_3 !== "0"){
        obj3.style.width = "0";
        obj3.style.opacity = "0";
        obj2.style.width = "100%";
        obj2.style.opacity = "1";
    } else if(opacity_2 !== "0"){
        obj2.style.width = "0px";
        obj2.style.opacity = "0";
        obj1.style.width = "100%";
        obj1.style.opacity = "1";
    }
});