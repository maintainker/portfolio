
function about_tab(int){//about tab
    var classname=document.getElementsByClassName("id_card");
    var tab_name=document.getElementsByClassName("tap_menu");
    for(var i=0;i<3;i++){
        classname[i].classList.remove("active");
        tab_name[i].classList.remove("m_active");
    }
    classname[int].classList.add("active");
    tab_name[int].classList.add("m_active");
}
document.addEventListener("scroll",nav_chage);// nav resize
function nav_chage(){
    var nav = window.scrollY || document.documentElement.scrollTop;
    var Cl =document.getElementsByClassName("nav");
    var charic = document.getElementsByClassName("charic");
    if(nav > 0){
        Cl[0].classList.add("on");
        charic[0].classList.add("on");
    }else{
        Cl[0].classList.remove("on");
        charic[0].classList.remove("on");
    }
}
function main_resize(){// main page resize
    var win_ratio = window.innerHeight/window.innerWidth;
    var main = document.getElementsByClassName("main_back");
    if(win_ratio>1066/1600){
        main[0].classList.add("img_long");
    }else{
        main[0].classList.remove("img_long");
    }
}
