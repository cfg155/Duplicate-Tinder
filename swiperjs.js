import Swiper from 'swiper'

const swiper = new Swiper('.swiper-container',{
    direction : 'horizontal',
    loop:false,
    breakpoints : {
        1120 : {
            slidesPerView : 4
        },

        720 : {
            slidesPerView : 3
        },

        480 : {
          slidesPerView : 2  
        }
    }
})

