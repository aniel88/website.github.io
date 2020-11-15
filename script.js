var i=1;
var images=[];
var time=8000;
const menuShow=document.querySelector('.menu-mobile');

const menuBtn=document.querySelector('.hamburger-icon');
let menuOpen=false;
console.log("DA");
menuBtn.addEventListener("click", function(event){
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen=true;
        menuShow.style.display="block";
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen=false;
        menuShow.style.display="none";
    }
});
images[1]='1.jpg';
images[2]='2.jpg';
images[3]='3.jpg';
images[4]='4.jpg';
images[5]='5.jpg';
images[6]='6.jpg';
images[7]='7.jpg';
var change=document.getElementsByClassName("photoShower");

var text=document.getElementById("productName");

function setImage(){
    if(i<images.length){
        text.style.opacity="0";
        change[0].style.background="url("+images[i]+")";
       change[0].style.maxWidth="1920px"; change[0].style.backgroundSize="cover";
        if(i==1){
           // text.innerHTML="NIKE AIR FORCE 1 DUCKBOOT";
            text.style.opacity="1";
        }
        
        if(i==2){
            text.style.opacity="1";
           // text.innerHTML="NIKE AIR JORDAN 1 RETRO";
        }
        if(i==3){
            text.style.opacity="1";
            //text.innerHTML="NEW BALANCE X-90";
        }
        i++;
        
        console.log(images.length);
    }
    else{
        i=1;
    }
    setTimeout("setImage()",time);
}
window.onload=setImage;







































