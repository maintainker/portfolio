
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
    if(nav > 0){
        Cl[0].classList.add("on");
    }else{
        Cl[0].classList.remove("on");
    }
}