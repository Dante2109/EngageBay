let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    if(form.name.value=="" || form.email.value==""){
        event.preventDefault()
    }else{
        return
    }
})
