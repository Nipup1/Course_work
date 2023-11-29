let bttn_open = document.querySelector(".BurgerImg");
let Burger = document.querySelector(".Burger");
let isOpen = false;

bttn_open.addEventListener('click', ()=>{
    if(!isOpen){
        Burger.style.height = "10rem";
        Burger.style.opacity = "1";
        bttn_open.style.transform = "rotate(-180deg)"
        isOpen = true;
    } else{
        Burger.style.opacity = "0";
        Burger.style.height = "0";
        bttn_open.style.transform = "rotate(0deg)"
        isOpen = false;
    }
});