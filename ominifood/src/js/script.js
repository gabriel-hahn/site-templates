let featureSection = document.getElementsByClassName('js--section-features')[0];
let stickyBar = document.getElementsByClassName('js--sticky')[0];
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
