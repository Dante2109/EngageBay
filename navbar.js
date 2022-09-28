window.addEventListener("scroll", function(){
    console.log("hello")
    let header=document.querySelector("#navbar");
    header.classList.toggle("sticky", window.scrollY > 0)
})