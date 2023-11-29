let block_text = document.querySelectorAll('.CardSubText')

let mass = create_mass();

function create_mass(){
    let mass = [];
    for(let i of block_text){
        mass.push(i.innerHTML);
    }
    return mass
}

function cut_if_bol(item){
    if( item.clientHeight > 150){
        let str = "";
        for(let j of item.innerHTML.split(" ")){
            str += j + " ";
            item.innerHTML = str;
            if(item.clientHeight > 150){
                let str_split = str.split(" ");
                str = str_split.slice(0, str_split.length - 3).join(" ")
                str += "..."
                item.innerHTML = str;
                break;
            }
        }
    }
}

function cut_if_men(item, index){
    if(item.clientHeight < 150){
        let str = "";
        for(let j of mass[index].split(" ")){
            str += j + " ";
            item.innerHTML = str;
            if(item.clientHeight > 150){
                let str_split = str.split(" ");
                str = str_split.join(" ")
                str += "..."
                item.innerHTML = str;
                break;
            }
        }
    }
}

window.addEventListener('resize', ()=>{
    block_text.forEach(cut_if_men);
    block_text.forEach(cut_if_bol);
});

block_text.forEach(cut_if_bol)