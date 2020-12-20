const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchaseDiv button');
const sizes = document.querySelector('.sizes');
const description = document.querySelector('.info h3');

//Animation
container.addEventListener('mousemove',(e) => {
    console.log(e.pageX); 
    let xAxis = (window.innerWidth / 2 - e.pageX) / 17;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 17;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});


container.addEventListener('mouseenter', e => {

    card.style.transition = "none";
    title.style.transform = "translateZ(100px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(45deg)";
    sizes.style.transform = "translateZ(75px)";
    description.style.transform = "translateZ(90px)";
    purchase.style.transform = "translateZ(50px)";


});

container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    title.style.transition = "all 0.5s ease";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizes.style.transform = "translateZ(0px)";
    sizes.style.transition = "all 0.5s ease";
    description.style.transform = "translateZ(0px)";
    description.style.transition = "all 0.5s ease";
    purchase.style.transform = "translateZ(0px)";
    purchase.style.transition = "all 0.5s ease";



});