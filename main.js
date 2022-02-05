$(document).ready(function(){
  $('.banner').slick({
    dots:true,
  });

});


let modelProfile = document.querySelector(".modelprofile");
let profile = document.querySelector(".r");
let burger2 = document.querySelector(".header__burger2")
let arrow = document.querySelector(".feedback");
let burger = document.querySelector(".header__burger");
let model = document.querySelector(".backdrop")
let menu = document.querySelector('.model_burger')
burger.addEventListener("click",function(){
  model.classList.add("open");
  menu.classList.add("opens");

  model.addEventListener("click",function(){
    model.classList.remove("open");
    menu.classList.remove("opens");
  })

burger2.addEventListener("click",function(){
  model.classList.add("open");
  menu.classList.add("opens");
})

})
profile.addEventListener("click",function(){
modelProfile.classList.toggle("opens3");
})

window.addEventListener("scroll",function(){
    arrow.classList.add("opened");
});


let tab = document.querySelectorAll(".tab");
tab.forEach((item) => {
  let q = item.dataset.profile;
  let lol = document.querySelector(`.${q}`);


item.addEventListener("click",function(){
  let currentLol = document.querySelector(".model.active");
  let currentTab = document.querySelector(".tab.active");

if (currentLol === item){
return;
}

currentLol.classList.remove("active");
lol.classList.add("active");
  currentTab.classList.remove("active");
item.classList.add("active");

});
});


let input = document.querySelectorAll('.Delivery-input__feedback');
input.forEach((item) => {
  let iteminput = item.querySelector('input');
  let itemlabel = item.querySelector('label');

  iteminput.addEventListener("focusin",function(){
    itemlabel.classList.add("focused");
  })

iteminput.addEventListener("blur",function(){
  if (iteminput.value === '') {
    itemlabel.classList.remove("focused");
  }
})

});


let deliveryinput = document.querySelectorAll('.settings-input-wrapper');
deliveryinput.forEach((item) => {
  let iteminput = item.querySelector('input');
  let itemlabel = item.querySelector('label');

  iteminput.addEventListener("focusin",function(){
    itemlabel.classList.add("focused");
  })

iteminput.addEventListener("blur",function(){
  if (iteminput.value === '') {
    itemlabel.classList.remove("focused");
  }
})

});
