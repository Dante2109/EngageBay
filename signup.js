let LSdata=JSON.parse(localStorage.getItem("data")) || [];

let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(form.password.value=="" || form.website.value=="" || form.email.value=="" || form.name.value==""){
        alert("Please fill all the details!")
    }else{
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