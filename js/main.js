(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // loading screen
    gsap.to('.loading', {y: '-100%', delay: 3.8, ease: Power3.easeIn})
    
    // mouse effect
    $('body').mousemove(function(e) { gsap.to('#cursor', { duration: 0.4 , x: e.clientX, y: e.clientY, ease: Power3.easeOut }) });

    $('.img_wrap').mousemove(function() {
        gsap.to('#cursor', 0.4, { width: 100, height: 100 })
        gsap.to('#cursor svg', { visibility: 'visible', opacity: 1,})
    })
    $('.img_wrap').mouseleave(function() {
        gsap.to('#cursor svg', { visibility: 'hidden', opacity: 0,})
        gsap.to('#cursor', 0.4, { width: 60, height: 60, })
    })

    // header
    gsap.fromTo('header .top_header', {y: '-100%', autoAlpha: 0}, {y: '0', autoAlpha:1, duration: 0.8, delay: 4})
    gsap.fromTo('.intro .tit_wrap *', { autoAlpha: 0, }, { autoAlpha: 1, 'letter-spacing':'0.05em', duration: 1},4.5)
    
    // portfolio
    let port = gsap.timeline();
    port.fromTo('.swiper-slide .line_grow',{width: 0}, { width: '100%', duration: 1, delay:0.8,})
    port.to('.swiper-slide .txt_wrap', {duration: 0.5, autoAlpha: 1,'background-color':'#080808'},'-=1')
    port.fromTo('.swiper-slide .txt_wrap *', { autoAlpha: 0, y: '100%'}, {duration:1, autoAlpha:1, y: 0, stagger: 0.15, 'background-color':'#080808'},'-=1')

    const portSlider = new Swiper('.port_slider', {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1000,
        mousewheel: true,
        on: {
            init: function() { },
            slideChange: function() {
                let i = this.realIndex;
                port.delay(1).restart();
                if (i === 0) {
                    gsap.to('.spin', {rotation: 72, duration: 1.2})
                    gsap.to('.spin01', {'fill': 'rgb(255, 255, 255, 0.8)'})
                    gsap.to('.spin02', {'fill': 'rgb(255, 255, 255, 0.2)'})
                    gsap.to('.spin03', {'fill': 'rgb(255, 255, 255, 0.2)'})
                } else if (i === 1) {
                    gsap.to('.spin', {rotation: -50, duration: 1.2})
                    gsap.to('.spin01', {'fill': 'rgb(255, 255, 255, 0.2)'})
                    gsap.to('.spin02', {'fill': 'rgb(255, 255, 255, 0.8)'})
                    gsap.to('.spin03', {'fill': 'rgb(255, 255, 255, 0.2)'})
                } else {
                    gsap.to('.spin', {rotation: -165, duration: 1.2})
                    gsap.to('.spin01', {'fill': 'rgb(255, 255, 255, 0.2)'})
                    gsap.to('.spin02', {'fill': 'rgb(255, 255, 255, 0.2)'})
                    gsap.to('.spin03', {'fill': 'rgb(255, 255, 255, 0.8)'})
                }
            }
        }
    });
})();