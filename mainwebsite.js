let openMenu = document.querySelector("#menu-open");
let openSubmenu = document.querySelector("#sub");
let openSubmenu_2 = document.querySelector("#sub_2");


openMenu.addEventListener("click", ()=>{
    openMenu.classList.toggle("open");
    changeMenu();
});

function changeMenu(){
    if(openMenu.classList.contains("open")){
        openMenu.classList.replace("bx-menu", "bx-x");
        document.querySelector('#data').style.display = 'inline';
    }else{
        openMenu.classList.replace("bx-x", "bx-menu");
        document.querySelector('#data').style.display = 'none';
    }
}

openSubmenu.addEventListener("click", ()=>{
    openSubmenu.classList.toggle("opensub");
    changeSubmenu();
})

function changeSubmenu(){
    if(openSubmenu.classList.contains("opensub")){
        document.querySelector('#info').style.display = 'inline';
    }else{
        document.querySelector('#info').style.display = 'none';
    }
}

openSubmenu_2.addEventListener("click", ()=>{
    openSubmenu_2.classList.toggle("opensub_2");
    changeSubmenu_2();
})

function changeSubmenu_2(){
    if(openSubmenu_2.classList.contains("opensub_2")){
        document.querySelector('#info_2').style.display = 'inline';
    }else{
        document.querySelector('#info_2').style.display = 'none';
    }
}