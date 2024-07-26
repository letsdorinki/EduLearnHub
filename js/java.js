burger=document.querySelector(".burger");
navlist=document.querySelector(".navlist");
navbar=document.querySelector(".navbar");
rightnav=document.querySelector(".rightnav");
burger.addEventListener("click",() =>{
    navlist.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
    navbar.classList.toggle('nav-height');

});