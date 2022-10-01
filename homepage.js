let b1 = document.querySelector("#b1");
let i1 = document.querySelector("#i1")
b1.addEventListener("click",function(event){
    if(i1.value==""){
        event.preventDefault()
    }else{
        return
    }

})

let ff = document.querySelector("#footer-2>form");

ff.addEventListener("submit",function(event){
    if(ff.name.value=="" || ff.URLs.value=="" || ff.Username.value=="" || ff.password==""){
        event.preventDefault();
        alert("Please fill all the details!")
    }else{
        return
    }
})

let section1=document.querySelector("#header")
let header=document.querySelector(".Navbar")
let section1options={
    rootMargin:"-200px 0px 0px 0px"
}

let section1observer= new IntersectionObserver(function(entries,section1observer){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            header.classList.add("sticky");
        }else{
            header.classList.remove("sticky")
        }
    })
},
section1options)
section1observer.observe(section1)
// window.addEventListener("scroll", function(){

// ;
//     header.classList.toggle("sticky", window.scrollY > 0)
// })


let sliders=document.querySelectorAll(".sliders");
let upsliders=document.querySelectorAll(".upslider");
let Upslider=document.querySelectorAll(".Upslider")
let Options={
    threshold:0,
    rootMargin: " 0px 0px -100px 0px"
};

let appearOnScroll= new IntersectionObserver
(function(entries,appearOnScroll)
{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }else{
            entry.target.classList.add("appear");
        }
    })
},
Options)

sliders.forEach(slider =>{
    appearOnScroll.observe(slider)
})


let apOptions={
    threshold:1,
    rootMargin: " 0px 0px 100px 0px"
};

let apOnScroll= new IntersectionObserver
(function(entries,apOnScroll)
{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }else{
            entry.target.classList.add("appear");
        }
    })
},
apOptions)


upsliders.forEach(upslider =>{
    apOnScroll.observe(upslider)
})

let UpOptions={
    threshold:1,
    rootMargin: " 0px 0px 100px 0px"
};

let UpOnScroll= new IntersectionObserver
(function(entries,UpOnScroll)
{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }else{
            entry.target.classList.add("appear");
        }
    })
},
UpOptions)

Upslider.forEach(upslider =>{
    UpOnScroll.observe(upslider)
})


document.addEventListener("click", e =>{
    let isDropdownbutton=e.target.matches(".data-dropdown-button");
    if(!isDropdownbutton && e.target.closest(".data-dropdown")!=null) return

    let currentdropdown;
    if(isDropdownbutton){
        currentdropdown= e.target.closest(".data-dropdown");
        currentdropdown.classList.toggle("active");        
    }

    document.querySelectorAll(".data-dropdown.active").forEach(dropdown => {
        if(dropdown===currentdropdown) return
        dropdown.classList.remove("active")
    })
})