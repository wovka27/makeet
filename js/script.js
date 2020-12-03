let   n              = 0,
      like           = document.querySelector('#like'),
      nMembers       = document.querySelector('#members'),
      language       = document.querySelector('#language-accordion'),
      currency       = document.querySelector('#currency-accordion'),
      checkMain      = document.querySelector('#checkMain'),
      clickMain      = document.querySelector('#clickMain'),
      currencyItem   = document.querySelectorAll('[id^="currencyItem"]'),
      productBtn     = document.querySelectorAll('.s-shop-i-product__btn')
//----------------------------------------------------------------------------------------------------------------
funcEvent(like,'click', () => {
   if (n = 1) { nMembers.textContent = '2000' + n++ + ' Members'; }
});
funcEvent(language,'click', () => {
   tglCls('language-accordion','active');
   tglCls('l-main','active');
});
funcEvent(currency,'click', () => {
      tglCls('currency-accordion','active'); 
      tglCls('c-main','active')
});

funcEvent(clickMain,'click', () => {
   rmvCls('l-main','active');
   rmvCls('language-accordion','active');
   if (clickMain.textContent =='Русский' || language.textContent =='English' ) {
      clickMain.textContent ='English';
      language.textContent ='Русский';
   } else {
      clickMain.textContent ='Русский';
      language.textContent ='English';
   }
});

funcEvent(checkMain,'click', () => {
   rmvCls('c-main','active');
   rmvCls('currency-accordion','active');
   if (checkMain.textContent =='RUB' || currency.textContent =='USD' ) {
      checkMain.textContent ='USD';
      currency.textContent ='RUB';
      currencyItem.textContent = '₽';
      [].forEach.call(currencyItem, () => {
         for (let item of currencyItem) {item.textContent = '₽';}
      })
   } else {
      checkMain.textContent ='RUB';
      currency.textContent ='USD';
      currencyItem.textContent = '$';
      [].forEach.call(currencyItem, () => {
         for (let item of currencyItem) {item.textContent = '$';}
      })
   }
});

// MEDIA----------------------------------------------------------------------------------------------------------------
const w = window.innerWidth,
      h = window.innerHeight,
      f = document.querySelectorAll('[class*="s-footer-article"]'),
      h2 = document.querySelectorAll('[id*="s-h2"]'),
      cp = document.querySelectorAll('[class*="s-footer-article__c-p"]'),
      ip = document.querySelectorAll('[class*="s-footer-article__i-p"]'),
      twit = document.querySelectorAll('[id*="twitText"]'),
      product = document.querySelectorAll('[id*="productItem"]'),
      productPic = document.querySelectorAll('[id*="pic"]'),
      fArtcle = document.querySelectorAll('[id*="fArtcleCntnr"]'),
      index = 0;
      

if (w<=1128) {
   [].forEach.call(h2, (el)=> {
      funcEvent(el,'click',() => {
         if(el === h2[0]) {
            fArtcle[0].classList.toggle('hide1');
         }
         if(el === h2[1]) {
            fArtcle[1].classList.toggle('hide2');
         }
         if(el === h2[2]) {
            fArtcle[2].classList.toggle('hide2');
         }
         if(el === h2[3]) {
            fArtcle[3].classList.toggle('hide1');
         }
      });
   });
}
// S-HEADER FIXED ---------------------------------------------------------------
window.onscroll = function headerFixed() {
   let   sHeader  = document.querySelector('.s-header'),
         header   = document.querySelector('#h');
   if (this.pageYOffset > 43 && w > 882) {
      sHeader.classList.add('fixed');
      header.style.marginTop = '108px';
   } else {
      sHeader.classList.remove('fixed')
      header.style.marginTop = '';
   }
}
//-------------------------------------------------------------------------------
function funcEvent(variable, event, handler) {variable.addEventListener(event, handler);}
let burger = document.querySelector('#burger')
funcEvent(burger, 'click', () => {
   tglCls('burger', 'active');
   tglCls('menu','active')
})

let scl = document.querySelectorAll('section li[id*="#"]');
for (scl of scl) {
   if (scl) {
      funcEvent(scl,'click', e => {
         e.preventDefault();
         rmvCls('menu','active');
         rmvCls('burger', 'active');
         sclId = e.currentTarget.getAttribute('id');
         document.querySelector(sclId).scrollIntoView({
            behavior: 'smooth', block: 'start'
         })
      })
   }
};

document.querySelectorAll('[id*="orderImg"]').forEach(el => {
   funcEvent(el,'mouseover', e => {
      
      
   })
})

;
// ГЛАВНЫЙ СЛАЙДЕР ----------------------------------------------------------------------------------------------------------

let   pos               = 0;
const slidesToShow      = 1,
      slidesToScroll    = 1,
      btnPrev           = document.querySelector('#btnLeft'),
      btnNext           = document.querySelector('#btnRight'),
      track             = document.querySelector('#imgTrack'),
      container         = document.querySelector('#container'),
      carousel          = document.querySelector('.s-carousel')
      items             = document.querySelectorAll('#imgSlide'),
      iWidth            = container.clientWidth / slidesToShow,
      movePos           = slidesToScroll * iWidth,
      iCount            = items.length,
      setPos            = () => {track.style.transform = `translateX(${pos}px)`;},
      aSlide            = () => SlideCode(),
      interval          = setInterval(aSlide,  2500),                                     // АВТО-ПЕРЕКЛЮЧЕНИЕ СЛАЙДА
      nextSlide         = () => {
         SlideCode();
         clearInterval(interval);},
      prevSlide         = () => {
         const iLeft = Math.abs(pos) / iWidth;
         pos += posCondition(iLeft) ;
         setPos();
         clearInterval(interval);}
      SlideCode         = () => {                                                         // ОБЩИЙ КОД ДЛЯ aSlide И nextSlide
         const iLeft = iCount - (Math.abs(pos) + slidesToShow * iWidth) / iWidth;
         pos -= posCondition(iLeft) ;
         setPos();}


items.forEach(e => {e.style.minWidth = `${iWidth}px`;});
funcEvent(btnNext,'click',nextSlide);
funcEvent(btnPrev,'click', prevSlide);
posCondition = v => {return v >= slidesToScroll ? movePos : v * iWidth;}                // v = ПЕРЕМЕННАЯ.
funcEvent(container,'mouseover', () => {
   btnNext.classList.add('show')
   btnPrev.classList.add('show')
})

funcEvent(container,'mouseout', () => {
   btnNext.classList.remove('show')
   btnPrev.classList.remove('show')
})


function funcEvent(variable, event, handler) {variable.addEventListener(event, handler);}
//---------------------------------------------------------------------------------------------------------------------------


;

let sIndex = 1;
showSlides(sIndex);
const plusSlide= () => {showSlides(sIndex += 1);}
         interv = setInterval(plusSlide, 2500)
         currentSlide = (n) => {
         showSlides(sIndex = n);
         clearInterval(interv)
      }

function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName('s-shop-banner-container-i');
   let dots = document.getElementsByClassName("s-shop-banner-c-circle__check");
   if (n > slides.length) {sIndex = 1}
   if (n < 1) {sIndex = slides.length}
   for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
   for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" dot", "");}
   slides[sIndex - 1].style.display = "block";
   dots[sIndex - 1].className += " dot";
};
const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();
scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
const updateDashoffset = () => {
    const height =document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() *pathLength/height)
    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};
window.addEventListener('scroll', () => {
    updateDashoffset();
    if(getTop() > offset) {scrollUp.classList.add('scroll-up--active')} 
    else {scrollUp.classList.remove('scroll-up--active')}
})
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
});
window.onload = function preloader() {
   document.querySelector('.preloader').classList.add('off');
   document.body.classList.add('off');
}
//========================================================================================
function addCls(id,cls) {document.getElementById(id).classList.add(cls);}
function tglCls(id,cls) {document.getElementById(id).classList.toggle(cls);}
function rmvCls(id,cls) {document.getElementById(id).classList.remove(cls);}
function cntCls(id,cls) {document.getElementById(id).classList.contains(cls);}
//========================================================================================

