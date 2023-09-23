let form = document.querySelector('.form')
let openForm = document.querySelector('.header__btn')
let clouseForm = document.querySelector('.form__clouse')


openForm.addEventListener('click', function () {
    form.classList.add('open')
})
clouseForm.addEventListener('click', function () {
    form.classList.remove('open')
})

let bg = document.querySelector('.main-bg')

$(window).width(function () {

    if ($(window).width() < 768) { /*разрешение, ниже которого анимация должна быть отключена*/
        document.onmousemove = e => {
            let x = e.clientX / window.innerWidth;

            bg.style.transform = "translate(-" + x * 50 + "px)"
        };
    }


})



