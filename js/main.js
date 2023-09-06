gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        effects: true,
    })

    gsap.fromTo('.fond_img', { opasity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.fond_img',
            start: 'center',
            end: '820',
            scrub: true
        }

    })

    let itemsL = gsap.utils.toArray('.fond_img1 .gallery_item ')

    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, y: -200, x: -200 }, {
            opacity: 1, y: 0, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-1100',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.fond_img1 .container_text')

    itemsR.forEach(item => {
        gsap.fromTo(item, { opacity: 0, y: 100, x: 100 }, {
            opacity: 1, y: 0, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-1100',
                end: '-100',
                scrub: true
            }
        })
    })
}
