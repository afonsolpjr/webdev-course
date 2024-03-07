let ask_delete_dialog = document.getElementById("ask-delete");
document.querySelector("#btn-delete").addEventListener("click",()=>{
    document.getElementById("ask-delete").showModal();
})

document.getElementById("cancel-delete").addEventListener("click",()=>{
    ask_delete_dialog.close();
})