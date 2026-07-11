console.log("Ron Fitness Website Loaded");
function toggleMenu(){

document.getElementById("menu").classList.toggle("show");

}
document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=function(){

document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=this.src;

}

});

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

}

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
window.onload=function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},2000);

}
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = Math.ceil(target / 80);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCounter, 25);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});
