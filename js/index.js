import { myteam } from "../data/data.js"


$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay : true,
        cssEase: 'linear',
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        initialSlide: 2
    });
  });



//render recipe on th ui
var data = document.querySelector(".slider");
myteam.map(function(teaminfo){
    let teamhtml = `     
    <div class="card">
    <div class="box">
    <img src="${teaminfo.team_image}" alt="">
    <div class="text">${teaminfo.teamates}</div>
    <p>${teaminfo.position}</p>
    </div>
</div>` 
data.insertAdjacentHTML("beforeend",teamhtml)
});
