(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // loading screen
    gsap.to('.loading', {y: '-100%', delay: 4})
    
    // mouse effect
    $('body').mousemove(function(e) { gsap.to('#cursor', { duration: 0.4 , x: e.clientX, y: e.clientY, ease: Power3.easeOut }) });

    $('.img_wrap').mousemove(function() {
        gsap.to('#cursor', 0.4, { width: 100, height: 100 })
        gsap.to('#cursor svg', { visibility: 'visible', opacity: 1,})
    })
    $('.img_wrap').mouseleave(function() {
        gsap.to('#cursor svg', { visibility: 'hidden', opacity: 0,})
        gsap.to('#cursor', 0.4, { width: 30, height: 30, })
    })

    //header
    gsap.fromTo('header .logo', {y: '-100%', autoAlpha: 0}, {y: '-50%', autoAlpha:1, duration: 0.5, delay: 1})
    gsap.fromTo('header .txt_wrap *', {y: '-100%', autoAlpha: 0,}, {y: 0, autoAlpha: 1, duration: 0.5, stagger:0.2, delay: 1.2})
    
    // portfolio
    let port = gsap.timeline();
    port.fromTo('.swiper-slide .line_grow',{width: 0}, { width: '100%', duration: 1, delay:0.8,})
    port.fromTo('.swiper-slide .txt_wrap *', { autoAlpha: 0, y: '100%'}, {duration:1, autoAlpha:1, y: 0, stagger: 0.15},'-=1')

    const portSlider = new Swiper('.port_slider', {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1000,
        mousewheel: true,
        on: {
            init: function() {

            },
            slideChange: function() {
                let i = this.realIndex;
                port.delay(1).restart();
                if (i === 0) {
                    gsap.to('.spin', {rotation: 72, duration: 1.2})
                } else if (i === 1) {
                    gsap.to('.spin', {rotation: -50, duration: 1.2})
                } else {
                    gsap.to('.spin', {rotation: -165, duration: 1.2})
                }
            }
        }
    });
})();