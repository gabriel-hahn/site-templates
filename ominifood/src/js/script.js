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

// Verify window scroll and controls if it needs to show sticky bar or not.
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
