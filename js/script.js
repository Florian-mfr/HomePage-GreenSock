const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const medias = document.querySelectorAll('.bulle');
const navbar = document.querySelectorAll('nav');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1')
    .from(navbar, 1, { top: -200, ease: "power2.out"}, 0.3, '-=1');

    TL.play();
})