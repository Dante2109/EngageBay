let LSdata=JSON.parse(localStorage.getItem("data")) || [];

let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let stat=true
    if(form.password.value=="" || form.website.value=="" || form.email.value=="" || form.name.value==""){
        alert("Please fill all the details!")
    }else if(
        LSdata.forEach(el => {
            if(el.email==form.email.value){    
            stat=false;
            alert("A User with the this username already exists please use a different username!")
            }
        })
    ){
    }else if(stat){
            let newObj={
            name:form.name.value,
            email:form.email.value,
            website:form.website.value,
            password:form.password.value
        }
        LSdata.push(newObj);
        localStorage.setItem("data",JSON.stringify(LSdata));
        alert("Signup successful!")
    }
})

let togglePassword = document.querySelector('#togglePassword');
  let password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});