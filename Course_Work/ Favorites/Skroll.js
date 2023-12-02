let bttn_left = document.getElementById("bttn_left")
let bttn_right = document.getElementById("bttn_right")
let block_objects = document.getElementsByClassName("BlockCards")
let arr_objects = document.querySelectorAll(".Card");
let screen = document.querySelectorAll(".Screen")
let index = 0;
let curr_card = arr_objects[index];

set_Height();
screen[0].innerHTML = index + 1;

window.addEventListener('resize', ()=>{
    setTimeout(set_Height, 500);
});

function set_Height(){
    if(window.innerWidth <= 768){
        block_objects[0].style.height = Number(340 + 130 + curr_card.lastElementChild.clientHeight) + "px";
    } else{
        if(curr_card.lastElementChild.clientHeight > 470) {
            block_objects[0].style.height = curr_card.lastElementChild.clientHeight + "px";
        } else{
            block_objects[0].style.height = "470px"
        }
    }
}

function all_right(item){
    if(item !== curr_card) {
        item.style.right = "-100%";
    }
}

function all_left(item){
    if(item !== curr_card){
        item.style.right = "100%";
    }
}

bttn_right.addEventListener('click', () => {
    index++;
    arr_objects.forEach(all_right);

    if (index > arr_objects.length - 1){
        index = 0;
    }

    curr_card.style.opacity = "0";
    curr_card.style.right ="200%";
    curr_card.style.width = "0";
    curr_card.style.height = "0";

    curr_card = arr_objects[index];

    curr_card.style.right = "0"
    curr_card.style.opacity = "1";
    curr_card.style.width = "100%";
    curr_card.style.height = "max-content";
    screen[0].innerHTML = index + 1;
    setTimeout(set_Height, 500);
});

bttn_left.addEventListener('click', () => {
    index--;
    arr_objects.forEach(all_left);
    if (index < 0){
        index = arr_objects.length-1;
    }

    curr_card.style.opacity = "0";
    curr_card.style.right ="-100%";
    curr_card.style.width = "0";
    curr_card.style.height = "0";

    curr_card = arr_objects[index];

    curr_card.style.opacity = "1";
    curr_card.style.width = "100%";
    curr_card.style.right = "0"
    curr_card.style.height = "max-content";
    screen[0].innerHTML = index + 1;
    setTimeout(set_Height, 500);
});