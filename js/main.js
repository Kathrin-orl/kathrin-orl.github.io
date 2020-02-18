var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        540: {
          slidesPerView: 2,
        }
      }
});


var menuButton = document.querySelector ('.menu-button');
var menu = document.querySelector ('.header');
menuButton.addEventListener ('click', function () {
    menuButton.classList.toggle ('menu-button-active');
    menu.classList.toggle('header-active');
});

var rating = document.querySelector('.rating'),
 ratingItem = document.querySelectorAll('.rating-item');

 rating.onclick = function (e) {
   var target = e.target;
  if (target.classList.contains('rating-item')) {
    document.getElementById('rating-num').innerHTML = target.getAttribute('data-rate');
    removeClass(ratingItem, 'current-active')
    target.classList.add('active','current-active');
    localStorage.setItem('rateNum', target.getAttribute('data-rate'))
  }
 }

 window.onload = function () {
   if(localStorage.getItem('rateNum') === null) {
    document.getElementById('rating-num').innerHTML = 1;
   }
  for(var i = 0, iLen = ratingItem.length; i <iLen; i ++) {
    removeClass(ratingItem[i], 'current-active')
    if(ratingItem[i].getAttribute('data-rate') === localStorage.getItem('rateNum')) {
      ratingItem[i].classList.add('active','current-active');
      if (ratingItem[i].classList.contains('rating-item')){
        removeClass(ratingItem, 'active')
        ratingItem[i].classList.add('active');
        mouseOverActiveClass(ratingItem)
      }
    }
  }
}

 rating.onmouseover = function (e) {
  var target = e.target;
  if (target.classList.contains('rating-item')){
    removeClass(ratingItem, 'active')
    target.classList.add('active');
    mouseOverActiveClass(ratingItem)
  }
 }
 rating.onmouseout = function(){
   addClass(ratingItem, 'active')
   mouseOutActiveClass(ratingItem);
 }

 function removeClass(arr) {
   for(var i = 0, iLen = arr.length; i <iLen; i ++) {
     for(var j = 1; j < arguments.length; j ++) {
       ratingItem[i].classList.remove(arguments[j]);
     }
   }
 }
 function addClass(arr) {
  for(var i = 0, iLen = arr.length; i <iLen; i ++) {
    for(var j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.add(arguments[j]);
    }
  }
}
 function mouseOverActiveClass(arr){
   for(var i = 0, iLen = arr.length; i < iLen; i ++) {
     if(arr[i].classList.contains('active')) {
       break;
     } else {
       arr[i].classList.add('active');
     }
   }
 }  
 function mouseOutActiveClass(arr){
  for(var i = arr.length-1; i >= 1; i--) {
    if(arr[i].classList.contains('current-active')) {
      break;
    } else {
      arr[i].classList.remove('active');
    }
  }
}


if(localStorage.getItem('rateNum') !== undefined) {
  document.getElementById('rating-num').innerHTML = localStorage.getItem('rateNum');
}
