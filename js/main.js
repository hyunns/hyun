(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // loading
    gsap.to('.loading', {y: '-100%', delay: 4})

    $('body').mousemove(function(e) {
        gsap.to('#cursor', { duration: 0.4 , x: e.clientX, y: e.clientY, ease: Power3.easeOut });
    });

    $('body a').mousemove(function () {
        gsap.to('.cursor_circle', 0.4, {
            width: 50,
            height: 50,
            'background-color': 'rgb(110, 68, 174, 0.6)',
            border: 'none',
        })
    })
    $('body a').mouseleave(function () {
        gsap.to('.cursor_circle', 0.4, {
            width: 30,
            height: 30,
            'background-color': 'transparent',
            border: '1px solid rgb(110, 68, 174)',
        })
    })

    //header
    gsap.fromTo('header .logo', {y: '-100%', autoAlpha: 0}, {y: '-50%', autoAlpha:1, duration: 0.5, delay: 4.5})
    gsap.fromTo('header .txt_wrap *', {y: '-100%', autoAlpha: 0,}, {y: 0, autoAlpha: 1, duration: 0.5, stagger:0.2, delay: 5})

    // spin    
    let spin = gsap.timeline({ scrollTrigger: { trigger: '.port_slider', start: 'top', scrub: 1, pin: true}})
    spin.to('.spin', {rotation: -120, duration: 1})

    // portfolio
    const portSlider = new Swiper('.port_slider', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        on: {
            slideChange: function() {
                let i = this.realIndex;
                if (i === 0 || i === 1 || i === 2) {
                    fnPort();
                    return false;
                }
            }
        }
    });

    // 슬라이드 활성화 시 효과
    // let port = gsap.timeline();
    // port.fromTo('.swiper-slide-active .detail_page', {y: '40px', autoAlpha: 0}, {y: 0, autoAlpha:1, duration: 1,}, 4)
    // port.to('.swiper-slide-active .line_grow', { width: '100%', duration: 1.2, }, '-=1')
    // port.fromTo('.swiper-slide-active .txt_wrap *', {y: '40px', autoAlpha: 0,}, {duration:1, y: 0, autoAlpha:1, stagger:0.15}, 4)

    function fnPort() {
        let port = gsap.timeline();
        port.fromTo('.swiper-slide .line_grow',{width: 0}, { width: '100%', duration: 1})
        port.fromTo('.swiper-slide .txt_wrap *', { autoAlpha: 0, y: '100%'}, {duration:1,autoAlpha:1, y: 0, stagger: 0.15},'-=1')
        port.fromTo('.swiper-slide .img_wrap', {y: 20, autoAlpha: 0}, {y: 0, autoAlpha:1, duration: 0.8,}, 1.5)
    }
})();