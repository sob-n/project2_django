document.querySelector(".go_list").addEventListener("click",function(){
    window.location.href = '/qna'
})


let mod_btn = document.querySelector(".modify")
mod_btn.addEventListener("click",function(){
    let id=mod_btn.getAttribute("id")
    window.location.href = '/qna/forms/'+id
})