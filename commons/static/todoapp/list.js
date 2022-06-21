    let addBtn = document.querySelector('.addBtn');

    addBtn.addEventListener('click',function(){
    let logininfo = addBtn.getAttribute("id")
    if (logininfo == "requiredlogin"){
    alert("로그인이 필요한 기능입니다.")
    return false
    }
    else{
    let inputValue = document.getElementById("myInput").value;
    window.location.href = '/todo/create?todo='+inputValue;
    }
    }, false);

document.querySelector("#myInput").addEventListener("keypress",function(e){
    let logininfo = addBtn.getAttribute("id")
    if (logininfo == "requiredlogin"){
        document.querySelector("#myInput").value=null
        alert("로그인이 필요한 기능입니다.")
        return false
    }
    else{
      if (e.key==="Enter"){
        let inputValue = document.getElementById("myInput").value;
        window.location.href = '/todo/create?todo='+inputValue;
        document.querySelector("#myInput").focus;
      }
    }
    },false)

function todo_count(){
    console.log("todo_count")
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
    if(xhr.readyState === XMLHttpRequest.DONE){
    if(xhr.status===200){
    let res = xhr.response;
    document.getElementById("todo_count").innerText=res.count;
    }else{
    alert("bad Request");
    }
    }
    }
    xhr.open("GET","http://127.0.0.1:8000/api/todos/count")
    xhr.responseType="json";
    xhr.send();
}
todo_count();
console.log("cookie")