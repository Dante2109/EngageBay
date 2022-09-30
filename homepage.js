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
    }else{
        return
    }
})
window.addEventListener("scroll", function(){
    let header=document.querySelector("#navbar");
    header.classList.toggle("sticky", window.scrollY > 0)
})


let sliders=document.querySelectorAll(".sliders");
let upsliders=document.querySelectorAll(".upslider");
let appearOptions={
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
appearOptions)


upsliders.forEach(upslider =>{
    appearOnScroll.observe(upslider)
})

sliders.forEach(slider =>{
    appearOnScroll.observe(slider)
})