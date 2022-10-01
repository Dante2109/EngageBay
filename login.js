let LSdata=JSON.parse(localStorage.getItem("data")) || [];

let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(form.email.value=="" || form.password.value==""){
        alert("Please fill all the details!")
    }else{
        let stat=true
        LSdata.forEach(el => {
            if(form.email.value==el.email && form.password.value==el.password){
                alert("Login Successful!")
                stat=false
                return
            }
        });
        if(stat){
            alert("Invalid Username or password!")
        }
    }
})

let togglePassword = document.querySelector('#togglePassword');
  let password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});