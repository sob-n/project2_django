document.querySelector("textarea#comment").addEventListener("keypress",function(e){
    e.stopPropagation();
    let account_info = document.querySelector(".right a").innerHTML
    if (account_info == "login"){
        document.querySelector("textarea#comment").value=null
        alert("로그인이 필요한 기능입니다.")
        window.location.href = '/account/login';
        return false
    }
})