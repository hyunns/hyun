(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // loading
    gsap.to('.loading', {y: '-100%', delay: 4})

    $('body').mousemove(function(e) {
        gsap.to('#cursor', { duration: 0.4 , x: e.clientX, y: e.clientY, ease: Power3.easeOut });
    });

    //header
    gsap.fromTo('header .logo', {y: '-100%', autoAlpha: 0}, {y: '-50%', autoAlpha:1, duration: 0.5, delay: 4.5})
    gsap.fromTo('header .txt_wrap *', {y: '-100%', autoAlpha: 0,}, {y: 0, autoAlpha: 1, duration: 0.5, stagger:0.2, delay: 5})

    // spin    
    let spin = gsap.timeline({ scrollTrigger: { trigger: '.port_slider', start: 'top', scrub: 1, pin: true}})
    spin.to('.spin', {rotation: -160, duration: 1})

    // portfolio
    const portSlider = new Swiper('.port_slider', { direction: 'vertical', slidesPerView: 1, mousewheel: true, });

    let port = gsap.timeline();
    port.fromTo('.swiper-slide .detail_page', {y: '40px', autoAlpha: 0}, {y: 0, autoAlpha:1, duration: 1,}, 4)
    port.to('.swiper-slide .line_grow', { width: '100%', duration: 1.2, }, '-=1')
    port.fromTo('.swiper-slide .txt_wrap *', {y: '40px', autoAlpha: 0,}, {duration:1, y: 0, autoAlpha:1, stagger:0.15}, 4)

    // let port1 = gsap.timeline();
    // port1.fromTo('.port01 .detail_page', {y: '20px', autoAlpha: 0}, {y: 0, autoAlpha:1, duration: 1,})
    // port1.to('.port01 .line_grow', {width:'100%', left: 0, duration: 1},'-=1')
    // port1.fromTo('.port01 .txt_wrap *', {y: '50px', autoAlpha: 0,},{duration:1, y: 0, autoAlpha:1, stagger:0.15})
})();