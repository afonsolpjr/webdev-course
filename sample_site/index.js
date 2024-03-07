var toggle_menu_button = document.querySelector(".menu-toggle");
var menu = document.querySelector(".menu");


function toggle_menu()
{
    if(menu.style.visibility==="hidden")
        menu.style.visibility="visible";
    else
        menu.style.visibility="hidden"
}

toggle_menu_button.addEventListener("click",toggle_menu);