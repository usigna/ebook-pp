function animations() {
  let tl = gsap.timeline();

  tl.to('.stripe', {scaleY: 1, stagger: 0.3, ease: 'power3.in'});
  tl.to('.loading span', {duration: 1, opacity: 1, stagger: 0.1, ease: 'power3.in'});
  tl.to('.loading span', {duration: 1, opacity: 0, stagger: 0.1, delay: 2, ease: 'power3.out'});
  tl.to('.stripe', {scaleY: 0, stagger: 0.3, ease: 'power3.out'});
  tl.to('.image-wrapper', {duration: 1, y: 0, ease: 'power3.out'});
  tl.to('.title', {duration: 1, y: 0, ease: 'power3.out'});
  tl.to('.text', {duration: 1, y: 0, ease: 'power3.out'});
  tl.to('.form__item', {duration: 1, y: 0, ease: 'power3.out'});
  tl.to('.social-media a', {duration: 1, y: 0, stagger: 0.3, ease: 'power3.out'});
}

function showAnimations() {
  const mobile = window.matchMedia("screen and (min-width: 1200px)");

  if (mobile.matches) {
      animations();
  }

  mobile.addListener( function(mobile) {
      if (mobile.matches) {
          animations();
      }
  });
};

const init = function() {
  showAnimations();
};

document.addEventListener('DOMContentLoaded', init);