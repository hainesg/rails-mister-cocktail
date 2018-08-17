import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Change your life.", "Have a cocktail."],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };
