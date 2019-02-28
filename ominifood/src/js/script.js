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
    if (window.scrollY > (featureSection.offsetTop - 100)) {
        let wp1El = document.getElementsByClassName('js--wp-1')[0];
        wp1El.classList.add('animated', 'fadeIn');
    }

    if (window.scrollY > (stepsSection.offsetTop - 100)) {
        let wp2El = document.getElementsByClassName('js--wp-2')[0];
        wp2El.classList.add('animated', 'fadeInUp');
    }

    if (window.scrollY > (citiesSection.offsetTop - 100)) {
        let wp3El = document.getElementsByClassName('js--wp-3')[0];
        wp3El.classList.add('animated', 'fadeIn');
    }

    if (window.scrollY > (plansSection.offsetTop - 100)) {
        let wp4El = document.getElementsByClassName('js--wp-4')[0];
        wp4El.classList.add('animated', 'pulse');
    }
}

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
