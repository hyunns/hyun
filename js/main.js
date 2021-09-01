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
    
    // contents
    let content = gsap.timeline({ scrollTrigger: { trigger: ".contents", start: "top top", end: "+=3000", scrub: 1, pin: true,} });
    content.to('.contents ul', {duration: 1.2, y: '-33.33%',delay: 1})
    .to('.contents ul', {duration: 1.2, y: '-66.66%',delay: 1})

    gsap.set('.spin01', {'fill': 'rgb(255, 255, 255, 0.8)'})

    let circle = gsap.timeline({ scrollTrigger: { trigger: ".contents", start: "top top", end: "+=3000", scrub: 1, } });
    circle.to('.spin', {rotation: -50, duration: 1.2, delay: 1})
    .to('.spin01', {'fill': 'rgb(255, 255, 255, 0.2)'},'-=1')
    .to('.spin02', {'fill': 'rgb(255, 255, 255, 0.8)'},'-=1')
    .to('.spin03', {'fill': 'rgb(255, 255, 255, 0.2)'},'-=1')
    .to('.spin', {rotation: -165, duration: 1.2, delay: 1})
    .to('.spin02', {'fill': 'rgb(255, 255, 255, 0.2)'},'-=1')
    .to('.spin03', {'fill': 'rgb(255, 255, 255, 0.8)'},'-=1')

    let txt1 = gsap.timeline({ scrollTrigger: { trigger :'.contents .port01', start: "top top", end: "+=1000", scrub: 1}});
    txt1.fromTo('.port01 .line_grow', {width:0}, {width:'100%', duration: 1, delay:1})
    txt1.fromTo('.port01 .txt_wrap *', { autoAlpha: 0, y: '100%'}, {duration:1, autoAlpha:1, y: 0, stagger: 0.2},'-=1')

    let txt2 = gsap.timeline({ scrollTrigger: { trigger :'.contents .port02', start: "top top", end: "+=1000", scrub: 1} });
    txt2.fromTo('.port02 .line_grow', {width:0}, {width:'100%', duration: 1, delay:1})
    txt2.fromTo('.port02 .txt_wrap *', { autoAlpha: 0, y: '100%'}, {duration:1, autoAlpha:1, y: 0, stagger: 0.2},'-=1')
    
    let txt3 = gsap.timeline({ scrollTrigger: { trigger :'.contents .port03', start: "top top", end: "+=2000", scrub: 1} });
    txt3.fromTo('.port03 .line_grow', {width:0}, {width:'100%', duration: 1, delay:1})
    txt3.fromTo('.port03 .txt_wrap *', { autoAlpha: 0, y: '100%'}, {duration:1, autoAlpha:1, y: 0, stagger: 0.2},'-=1')
})();