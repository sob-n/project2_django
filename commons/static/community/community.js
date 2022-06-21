document.querySelector(".new_btn").addEventListener("click",function(){
    let account_info = document.querySelector(".right a").innerHTML
    if (account_info == "login"){
        alert("로그인이 필요한 기능입니다.")
        window.location.href = '/account/login';
        return false
    }else{
    document.querySelector("#edit").setAttribute("class","display")
    }
})

let more_btn=document.querySelectorAll("p.more")
let tg_div=document.querySelectorAll("div.undisplay")
for (let i=0;i<more_btn.length;i++){
let more_btn_this = more_btn[i]
let tg_div_this = tg_div[i]
let id = tg_div_this.parentNode.getAttribute("id")
more_btn_this.addEventListener("click",function(f){
    f.stopPropagation();
    tg_div_this.setAttribute("class","display")
    })
//tg_div[i].childNodes[1].addEventListener("click",function(){
//
//}) >> 편집버튼
tg_div[i].childNodes[3].addEventListener("click",function(e){
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")){
        window.location.href = '/community/detail/delete/'+id
    }else{
    return false
}},false)}