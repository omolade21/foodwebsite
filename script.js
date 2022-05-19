

//toggler navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
//clse nav when clicking on nav item
document.addEventListener("click", function(e){
    if (e.target.closest(".nav-item")){
        toggleNav();
    }
});


//sticky header
window.addEventListener("scroll", function(){
if(this.pageXOffset > 60){
    this.document.querySelector(".header").classList.add("sticky");

}
else{
    this.document.querySelector(".header").classList.remove("sticky");
 
}
});