const x=document.querySelectorAll("#poza");
const boxx=document.querySelectorAll(".discount_box");
x[0].addEventListener("mouseover",function(event){
    boxx[0].style.transform="scale(1.2)";
    boxx[0].style.transition="all 0.3s";
    x[0].src="vapormax2.jpg";
})
x[0].addEventListener("mouseleave",function(event){
    boxx[0].style.transform="scale(1)";
    boxx[0].style.transition="all 0.3s";
    x[0].src="vapormax1.jpg";
})

x[1].addEventListener("mouseover",function(event){
    boxx[1].style.transform="scale(1.2)";
    boxx[1].style.transition="all 0.3s";
    x[1].src="nikeaf2.jpg";
})
x[1].addEventListener("mouseleave",function(event){
    boxx[1].style.transform="scale(1)";
    boxx[1].style.transition="all 0.3s";
    x[1].src="nikeaf1.jpg";
})

x[2].addEventListener("mouseover",function(event){
    x[2].src="jordan_2.jpg";
})
x[2].addEventListener("mouseleave",function(event){
    x[2].src="jortdan_1.jpg";
})

x[3].addEventListener("mouseover",function(event){
    x[3].src="vans_oldskool_12jpg.jpg";
})
x[3].addEventListener("mouseleave",function(event){
    x[3].src="vans_oldskool_1.jpg";
})

x[4].addEventListener("mouseover",function(event){
    x[4].src="vans_pantera_2.jpg";
})
x[4].addEventListener("mouseleave",function(event){
    x[4].src="vans_pantera_1.jpg";
})


x[5].addEventListener("mouseover",function(event){
    x[5].src="jordan_proto_2.jpg";
})
x[5].addEventListener("mouseleave",function(event){
    x[5].src="jordan_proto_1.jpg";
})

x[6].addEventListener("mouseover",function(event){
    boxx[2].style.transform="scale(1.2)";
    boxx[2].style.transition="all 0.3s";
    x[6].src="12retro_2.jpg";
})
x[6].addEventListener("mouseleave",function(event){
    boxx[2].style.transform="scale(1)";
    boxx[2].style.transition="all 0.3s";
    x[6].src="12retro_1.jpg";
})

x[7].addEventListener("mouseover",function(event){
    x[7].src="puma_2.jpg";
})
x[7].addEventListener("mouseleave",function(event){
    x[7].src="puma.jpg";
})

x[8].addEventListener("mouseover",function(event){
    x[8].src="vans_2.jpg";
})
x[8].addEventListener("mouseleave",function(event){
    x[8].src="vans_1.jpg";
})

x[9].addEventListener("mouseover",function(event){
    x[9].src="vans_slap_2.jpg";
})
x[9].addEventListener("mouseleave",function(event){
    x[9].src="nike_Slap_1.jpg";
})

