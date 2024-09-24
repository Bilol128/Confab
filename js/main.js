const li_drop__navbar = document.querySelector(".li-drop__navbar")
const navbar_dropList__content = document.querySelector(".navbar-dropList__content")
const navbar_burger__button = document.querySelector(".navbar-burger__button")
const navbar_list = document.querySelector(".navbar-list")
const body = document.querySelector("body")
const live_player__card = document.querySelectorAll(".live-player__card")
const navbar = document.querySelector(".navbar")
const burger_drop__p = document.querySelector(".burger-drop__p")
const burger_drop__block = document.querySelector(".burger-drop__block")
const burger_menu = document.querySelector(".burger-menu")

burger_drop__p.addEventListener('click' , function(){
    burger_drop__block.classList.toggle('burger_drop__blockActive')
    burger_drop__p.classList.toggle('burger__p__active')
})

new Swiper ('.events-sldier' ,{
    slidesPerView:2.75,
    spaceBetween:40,
    navigation: {
        nextEl: '.events-arrow__cardPrev',
        prevEl: '.events-arrow__cardNext',
      },
      breakpoints: {
       1600: {
          slidesPerView: 2.75,
          spaceBetween:40,
        },
        1500: {
            spaceBetween:30,
        },
        1350: {
            slidesPerView: 2.75,
        },
        1200: {
            slidesPerView: 2.25,
        },
        820: {
            slidesPerView: 2.25,
            spaceBetween:20,
        },
        570: {
            slidesPerView: 1.7, 
         },
        420: {
            slidesPerView: 1.3,
        },
        60: {
            slidesPerView: 1,
            spaceBetween:20,
        },
      }
   })


















window.addEventListener('scroll' , function(){
    if(window.scrollY > 100){
        navbar.classList.add('navbar-scrol')
    }
    else{
        navbar.classList.remove('navbar-scrol')
    }
     })





live_player__card[1].addEventListener('click' , function(){
    live_player__card[0].classList.remove('live_player__cardActive')
})

live_player__card[0].addEventListener('click' , function(){
    live_player__card[1].classList.remove('live_player__cardActive')
})

live_player__card.forEach(live_player__cardelement => {
    live_player__cardelement.addEventListener('click' , function(){
        live_player__cardelement.classList.toggle('live_player__cardActive')
    })
});






navbar_burger__button.addEventListener('click' , function(){
    burger_menu.classList.toggle('burger-menu__active')
    body.classList.toggle('body__lock')
    navbar_burger__button.classList.toggle('navbar_burger__buttonActive')
})


li_drop__navbar.addEventListener('mouseover' , function(){
    navbar_dropList__content.classList.add('navbar_dropList__contentActive')
    li_drop__navbar.classList.add('li_drop__navbarActive')
})
if(body.clientWidth <= 700){
    li_drop__navbar.addEventListener('click' , function(){
        navbar_dropList__content.classList.toggle('navbar_dropList__contentActive')
        li_drop__navbar.classList.toggle('li_drop__navbarActive')
    })
    li_
}
else{
    li_drop__navbar.addEventListener('mouseover' , function(){
        navbar_dropList__content.classList.add('navbar_dropList__contentActive')
        li_drop__navbar.classList.add('li_drop__navbarActive')
    })
    li_drop__navbar.addEventListener('mouseout' , function(){
        navbar_dropList__content.classList.remove('navbar_dropList__contentActive')
        li_drop__navbar.classList.remove('li_drop__navbarActive')
    })
    navbar_dropList__content.addEventListener('mouseover' , function(){
        navbar_dropList__content.classList.add('navbar_dropList__contentActive')
        li_drop__navbar.classList.add('li_drop__navbarActive')
    })
    navbar_dropList__content.addEventListener('mouseout' , function(){
        navbar_dropList__content.classList.remove('navbar_dropList__contentActive')
        li_drop__navbar.classList.remove('li_drop__navbarActive')
    })
}
