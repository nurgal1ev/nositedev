// text animation
new Textify({
    el: '.header__logo',
    animation: {
    stagger: 0.05,
    duration: 0.7,
    ease: 'expo.inOut',
    animateProps: {"y":"-100%","opacity":0,"skewX":-45}
    }
},gsap)

new Textify({
    el: '.main__title',
    animation: {
    stagger: 0.025,
    duration: 0.4,
    ease: 'expo.inOut',
    animateProps: {"opacity":0,"scale":0}
    }
},gsap)

new Textify({
    el: '.main__subtitle',
    animation: {
    stagger: 0.025,
    duration: 0.6,
    ease: 'expo.inOut',
    animateProps: {"opacity":0,"scale":0}
    }
},gsap)

new Textify({
    el: '.main__suptext',
    animation: {
    stagger: 0.025,
    duration: 0.4,
    ease: 'expo.inOut',
    animateProps: {"opacity":0,"scale":0}
    }
},gsap)

new Textify({
    el: '.main__subtext',
    animation: {
    stagger: 0.025,
    duration: 0.4,
    ease: 'expo.inOut',
    animateProps: {"opacity":0,"scale":0}
    }
},gsap)

new Textify({
    el: '.main__info',
    animation: {
    stagger: 0.025,
    duration: 0.4,
    ease: 'expo.inOut',
    animateProps: {"opacity":0,"scale":0}
    }
},gsap)