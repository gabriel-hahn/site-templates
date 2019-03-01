let featureSection = document.getElementsByClassName('js--section-features')[0];
let stepsSection = document.getElementsByClassName('js--section-steps')[0];
let citiesSection = document.getElementsByClassName('js--section-cities')[0];
let plansSection = document.getElementsByClassName('js--section-plans')[0];
let stickyBar = document.getElementsByClassName('js--sticky')[0];
let btnScrollPlans = document.getElementsByClassName('js--scroll-to-plans')[0];
let btnScrollFeatures = document.getElementsByClassName('js--scroll-to-start')[0];
let btnScrollFoodDelivery = document.getElementById('food-delivery');
let btnScrollHowItWorks = document.getElementById('how-it-works');
let btnScrollCities = document.getElementById('our-cities');
let btnScrollSignUp = document.getElementById('sign-up');
let btnNavIcon = document.getElementsByClassName('js--nav-icon')[0];

let lastScrollHeight = 0;

// Verify window scroll and controls if it needs to show sticky bar or not. It controls animations as well.
window.onscroll = function () {
    const currentScrollHeight = window.scrollY;
    const scrollDown = currentScrollHeight > lastScrollHeight;
    lastScrollHeight = currentScrollHeight;

    if (window.scrollY > (featureSection.scrollHeight + 55)) {
        stickyBar.classList.add('sticky');
    }
    else if (!scrollDown) {
        stickyBar.classList.remove('sticky');
    }

    /* Animations */
    if (window.scrollY > (featureSection.offsetTop - 120)) {
        let wp1El = document.getElementsByClassName('js--wp-1')[0];
        wp1El.classList.add('animated', 'fadeIn');
    }

    if (window.scrollY > (stepsSection.offsetTop - 120)) {
        let wp2El = document.getElementsByClassName('js--wp-2')[0];
        wp2El.classList.add('animated', 'fadeInUp');
    }

    if (window.scrollY > (citiesSection.offsetTop - 120)) {
        let wp3El = document.getElementsByClassName('js--wp-3')[0];
        wp3El.classList.add('animated', 'fadeIn');
    }

    if (window.scrollY > (plansSection.offsetTop - 120)) {
        let wp4El = document.getElementsByClassName('js--wp-4')[0];
        wp4El.classList.add('animated', 'pulse');
    }
}

btnNavIcon.addEventListener('click', (e) => {
    let mainNavEl = $('.js--main-nav');
    let iconElF = document.getElementsByClassName('js--nav-icon')[0];
    let iconEl = iconElF.children[0];

    mainNavEl.slideToggle(200);
    if (iconEl.classList.contains('fa-align-justify') && iconEl.classList.contains('fas')) {
        iconEl.classList.add('far');
        iconEl.classList.add('fa-times-circle');
        iconEl.classList.remove('fa-align-justify');
        iconEl.classList.remove('fas');
    }
    else {
        iconEl.classList.remove('far');
        iconEl.classList.remove('fa-times-circle');
        iconEl.classList.add('fa-align-justify');
        iconEl.classList.add('fas');
    }
});

btnScrollPlans.addEventListener('click', function (e) {
    window.scroll({
        behavior: 'smooth',
        top: (plansSection.offsetTop - 55)
    });
});

btnScrollSignUp.addEventListener('click', function (e) {
    window.scroll({
        behavior: 'smooth',
        top: (plansSection.offsetTop - 55)
    });
});

btnScrollFeatures.addEventListener('click', function (e) {
    window.scroll({
        behavior: 'smooth',
        top: (featureSection.offsetTop - 55)
    });
});

btnScrollFoodDelivery.addEventListener('click', function (e) {
    window.scroll({
        behavior: 'smooth',
        top: (featureSection.offsetTop - 55)
    });
});

btnScrollHowItWorks.addEventListener('click', function (e) {
    window.scroll({
        behavior: 'smooth',
        top: (stepsSection.offsetTop - 55)
    });
});

btnScrollCities.addEventListener('click', function (e) {
    window.scroll({
        behavior: 'smooth',
        top: (citiesSection.offsetTop - 55)
    });
});
