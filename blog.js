let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    if(form.name.value=="" || form.email.value==""){
        event.preventDefault()
        alert("Please fill all the details!")
    }else{
        return
    }
})
