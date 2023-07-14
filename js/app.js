function animations() {
  gsap.to('.stripe', {
    scaleY: 1,
    stagger: 0.3,
    ease: 'power3.out'
  });
  
  gsap.to('.loading span', {
    duration: 1,
    opacity: 1,
    stagger: 0.1,
    delay: 1,
    ease: 'power3.out'
  });
  
  gsap.to('.stripe', {
    scaleY: 0,
    stagger: 0.3,
    delay: 5,
    ease: 'power3.out'
  });
  
  gsap.to('.loading span', {
    duration: 1,
    opacity: 0,
    stagger: 0.1,
    delay: 5,
    ease: 'power3.out'
  });

  gsap.to('.image-wrapper', {
    y: 0,
    stagger: 0.3,
    delay: 7,
    ease: 'power3.out'
  });

  gsap.to('.title', {
    y: 0,
    stagger: 0.3,
    delay: 7.5,
    ease: 'power3.out'
  });

  gsap.to('.text', {
    y: 0,
    stagger: 0.3,
    delay: 8,
    ease: 'power3.out'
  });

  gsap.to('.form__item', {
    y: 0,
    stagger: 0.3,
    delay: 8.5,
    ease: 'power3.out'
  });

  gsap.to('.social-media a', {
    y: 0,
    stagger: 0.3,
    delay: 9,
    ease: 'power3.out'
  });
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