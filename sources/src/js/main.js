const calculateScrollbarWidth = function() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';

    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    document.body.removeChild(outer);

    return scrollbarWidth;

};

const setDocumentViewportWith = () => {
    function setVw() {
        let vw = document.documentElement.clientWidth;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }
    setVw();
    window.addEventListener('resize', setVw)
}

const toggleMenu = () => {
    let menu = document.querySelector(".header__menu"),
        burger = document.querySelector(".header__burger"),
        header = document.querySelector(".header");

    burger.addEventListener('click', (e) => {
        burger.classList.toggle('is-active')

        if(burger.classList.contains('is-active')) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = calculateScrollbarWidth()+'px';
            header.style.paddingRight = calculateScrollbarWidth()+'px';

            menu.classList.add('is-active')
        } else {
            document.body.style.overflow = ''
            menu.classList.remove('is-active');
            document.body.style.paddingRight = '';
            header.style.paddingRight = '';
        }
    }, false);

    window.onkeydown = function( event ) {
        if ( event.keyCode === 27 ) {
            document.body.style.overflow = ''
            menu.classList.remove('is-active');
            document.body.style.paddingRight = '';
            header.style.paddingRight = '';
            burger.classList.remove('is-active')
        }
    };
}

const headerFixed = () => {
    let header = document.querySelector('.header');
    let checkFixed = () => {
        window.scrollY > 0 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
    }

    checkFixed();
    window.addEventListener('scroll', () => {
        checkFixed();
    }, false)
}

const heroSlider = () => {
    let indexHeroSlider = document.querySelector('#indexHero');
    if(indexHeroSlider) {
        imagesLoaded(indexHeroSlider, () => {
            let slider = new Swiper(indexHeroSlider, {
                speed: 1000,
                slidesPerView: 'auto',
                loop: true,
                autoHeight: true,
                navigation: {
                    nextEl: '#indexHeroControls .swiper-button-next',
                    prevEl: '#indexHeroControls .swiper-button-prev'
                },
                pagination: {
                    el: '#indexHeroControls .swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },

                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                }
            });
        })
    }
}

const aboutOptionsSlider = () => {
    let optionsSlider = document.querySelector('#aboutOptions'),
        swiper;
    if(optionsSlider) {
        let init = () => {
            if(window.innerWidth < 768) {
                swiper = new Swiper(optionsSlider, {
                    speed: 1000,
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false
                    },
                    breakpoints: {
                        479: {
                            spaceBetween: 34
                        }
                    }
                });
            }
        }

        init()

        window.addEventListener('resize', () => {
            if(window.innerWidth < 768 && !optionsSlider.classList.contains('swiper-initialized')) {
                init()
            }
            if(window.innerWidth >= 768 && optionsSlider.classList.contains('swiper-initialized')) {
                swiper.destroy()
            }
        })
    }
}

const aboutComfortSlider = () => {
    let comfortSlider = document.querySelector('#aboutComfort'),
        swiper;
    if(comfortSlider) {
        let init = () => {
            if(window.innerWidth < 480) {
                swiper = new Swiper(comfortSlider, {
                    speed: 1000,
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false
                    }
                });
            }
        }

        init()

        window.addEventListener('resize', () => {
            if(window.innerWidth < 480 && !comfortSlider.classList.contains('swiper-initialized')) {
                init()
            }
            if(window.innerWidth >= 480 && comfortSlider.classList.contains('swiper-initialized')) {
                swiper.destroy()
                comfortSlider.querySelector('.swiper-pagination').remove()
            }
        })
    }
}


const locationSliders = () => {
    let locationComfortSlider = document.querySelector('#locationComfortSlider');
    if(locationComfortSlider) {
        imagesLoaded(locationComfortSlider, () => {
            let slider = new Swiper(locationComfortSlider, {
                speed: 1000,
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 20,
                autoHeight: true,
                navigation: {
                    nextEl: '#locationComfortControls .swiper-button-next',
                    prevEl: '#locationComfortControls .swiper-button-prev'
                },
                pagination: {
                    el: '#locationComfortControls .swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },

                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            });
        })
    }

    let locationCultureSlider = document.querySelector('#locationCultureSlider');
    if(locationCultureSlider) {
        imagesLoaded(locationCultureSlider, () => {
            let slider = new Swiper(locationCultureSlider, {
                speed: 1000,
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 20,
                autoHeight: true,
                navigation: {
                    nextEl: '#locationCultureControls .swiper-button-next',
                    prevEl: '#locationCultureControls .swiper-button-prev'
                },
                pagination: {
                    el: '#locationCultureControls .swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },

                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            });
        })
    }
}

const floors = () => {
    let floorsSlider = document.querySelector('#floors');
    if(floorsSlider) {
        let slider = new Swiper(floorsSlider, {
            speed: 1000,
            slidesPerView: 5,
            direction: 'vertical',
            loop: true,
            centeredSlides: true,
            slideToClickedSlide: true
        })
    }
}

const filters = () => {
    let sliderFloor = document.getElementById('filterFloor');
    if(sliderFloor) {
        let sliderFloorMin = parseInt(sliderFloor.getAttribute('data-min')),
            sliderFloorMax = parseInt(sliderFloor.getAttribute('data-max'));

        noUiSlider.create(sliderFloor, {
            start: [sliderFloorMin, sliderFloorMax],
            step: 1,
            range: {
                'min': sliderFloorMin,
                'max': sliderFloorMax
            }
        });

        let formatValues = [
            document.getElementById('filterFloorMin'),
            document.getElementById('filterFloorMax')
        ];
        sliderFloor.noUiSlider.on('update', function (values, handle ) {
            let Format = wNumb({
                decimals: 0
            });
            formatValues[handle].innerHTML = Format.from(values[handle]);
        });
    }

    let sliderCost = document.getElementById('filterCost');
    if(sliderCost) {
        let filterCostMin = parseInt(sliderCost.getAttribute('data-min')),
            filterCostMax = parseInt(sliderCost.getAttribute('data-max'));

        noUiSlider.create(sliderCost, {
            start: [filterCostMin, filterCostMax],
            step: 1000,
            range: {
                'min': filterCostMin,
                'max': filterCostMax
            }
        });

        let formatValues = [
            document.getElementById('filterCostMin'),
            document.getElementById('filterCostMax')
        ];
        sliderCost.noUiSlider.on('update', function (values, handle ) {
            let Format = wNumb({
                decimals: 0
            });
            formatValues[handle].innerHTML = Format.from(values[handle]);
        });
    }

    let sliderSquare = document.getElementById('filterSquare');
    if(sliderSquare) {
        let filterSquareMin = parseInt(sliderSquare.getAttribute('data-min')),
            filterSquareMax = parseInt(sliderSquare.getAttribute('data-max'));

        noUiSlider.create(sliderSquare, {
            start: [filterSquareMin, filterSquareMax],
            step: 1,
            range: {
                'min': filterSquareMin,
                'max': filterSquareMax
            }
        });

        let formatValues = [
            document.getElementById('filterSquareMin'),
            document.getElementById('filterSquareMax')
        ];
        sliderSquare.noUiSlider.on('update', function (values, handle ) {
            let Format = wNumb({
                decimals: 0
            });
            formatValues[handle].innerHTML = Format.from(values[handle]);
        });
    }

    let formatForSlider = {
        from: function (formattedValue) {
            return Number(formattedValue);
        },
        to: function(numericValue) {
            return Math.round(numericValue);
        }
    };

    let btnShowResults = document.querySelector('.js-showMore');
    if(btnShowResults) {
        btnShowResults.addEventListener('click', () => {
            let _grid = document.querySelector('.selection__grid'),
                _header = document.querySelector('.header'),
                _paddingTop = window.getComputedStyle(_grid, null).getPropertyValue('padding-top');

            let _top = getElementOffset(_grid).top - _header.clientHeight + parseInt(_paddingTop);

            window.scrollTo({
                top: _top,
                left: 100,
                behavior: 'smooth'
            });
        })
    }

}

function getElementOffset(el) {
    const rect = el.getBoundingClientRect();

    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset,
    };
}

let orderForm = () => {
    let orderModal = document.querySelector(".select-flat__modal");

    if(orderModal) {
        let btnOrder = document.querySelectorAll('.js-order'),
            orderGrid = document.querySelector('.select-flat__grid'),
            info = document.querySelector('.select-flat__info'),
            checkAgreement = document.querySelector('.select-flat__modal-agreement input'),
            btnSubmit = orderModal.querySelector('.js-submit'),
            btnClose = orderModal.querySelector('.js-close');


        btnOrder.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                let _top = info.offsetTop - 20;

                if(window.innerWidth >= 960 && window.innerWidth < 1280) {
                    _top = info.offsetTop + 8;
                    orderModal.style.width = info.clientWidth + 34*2 + 'px';
                    orderModal.style.height = orderGrid.clientHeight - 46 + 'px';
                }
                if(window.innerWidth >= 1280) {
                    _top = info.offsetTop + 8;
                    orderModal.style.width = info.clientWidth + 46 + 70 + 'px';
                    orderModal.style.height = orderGrid.clientHeight - 64 + 'px';
                }
                if(window.innerWidth < 960) {
                    orderModal.style.width = '';
                    orderModal.style.height = '';
                }

                orderModal.style.top = _top + 'px';
                orderModal.classList.add('is-active');

                e.preventDefault();
            }, false)
        });

        checkAgreement.addEventListener('change', () => {
            checkAgreement.checked ? btnSubmit.classList.remove('btn--disabled') : btnSubmit.classList.add('btn--disabled')
        })

        btnClose.addEventListener('click', () => {
            orderModal.classList.remove('is-active', 'is-success')
        })

        btnSubmit.addEventListener('click', () => {
            orderModal.classList.add('is-success')
        })
    }
}

const mortgageSlider = () => {
    let mortgageSlider = document.querySelector('#mortgageSlider'),
        slider = false;

    if(mortgageSlider) {
        let init = () => {
            if(window.innerWidth < 1960 && !mortgageSlider.classList.contains("swiper-initialized")) {
                imagesLoaded(mortgageSlider, () => {
                    slider = new Swiper(mortgageSlider, {
                        speed: 5000,
                        spaceBetween: 50,
                        slidesPerView: 'auto',
                        freeMode: true,
                        loop: true,
                        autoplay: {
                            delay: 0,
                            disableOnInteraction: false
                        },
                        breakpoints: {
                            960: {
                                spaceBetween: 60,
                            },

                            1279: {
                                spaceBetween: 70,
                            }
                        }
                    });
                })
            }

            if(window.innerWidth >= 1960 && mortgageSlider.classList.contains("swiper-initialized")) {
                slider.destroy()
            }
        }

        init();
        window.addEventListener('resize', init)
    }
}

const feedbackForm = () => {
    let form = document.querySelector('.feedback__form'),
        phoneInput = document.querySelectorAll('[name="phone"]');
    if(form) {
        let btnSubmit = form.querySelector('.js-submit'),
            thanks = form.querySelector('.feedback__form-thanks'),
            checkAgreement = form.querySelector('.checkbox input');

        checkAgreement.addEventListener('change', () => {
            checkAgreement.checked ? btnSubmit.classList.remove('btn--disabled') : btnSubmit.classList.add('btn--disabled')
        });
    }
    if(phoneInput) {
        phoneInput.forEach((phone)=>{
            let phoneMask = IMask(phone, {
                mask: '+{7} (000) 000-0000'
            });

        })
    }
}

let _submitForm = (elem) => {
    let form = elem.closest('.feedback__form');
    form.classList.add('is-success');
    setTimeout(()=>{
        form.classList.remove('is-success');
    },3000)
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.classList.remove('preload')
    toggleMenu();
    heroSlider();
    headerFixed();
    aboutOptionsSlider();
    aboutComfortSlider();
    locationSliders();
    setDocumentViewportWith();
    floors();
    filters();
    orderForm();
    mortgageSlider();
    feedbackForm();

    AOS.init({
        duration: 800,
        once: true,
        offset: 20
    })
});
