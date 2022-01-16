gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});

//HEADER ANIMATIONS

// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.hdr-name, .name-out');
for (var i = 0, element; element = textWrapper[i]; i++) {
    textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, "<span>$&</span>");
}

gsap.fromTo(".header-bg", {
    opacity: 0}, {
        opacity: 1,
        duration: 1.2,
        ease: "power1.in"
});
gsap.from(".hdr-name span", {
    yPercent: -10,
    opacity: 0,
    duration: 1,
    ease: "bounce.in",
    stagger: {amount: 0.5, from:"center"},
    delay: 1.2
});
gsap.fromTo(".name-out", {
    yPercent: -120,
    opacity: 0}, {
        opacity: 1,
        yPercent: 0,
        duration: 0.5,
        ease: "power.in",
        stagger: {amount: 0.8},
        delay: 1.4
});
gsap.from(".name-out span", {
    opacity: 0,
    color: "#fff",
    duration: 1.2,
    ease: "bounce.in",
    stagger: {amount: 0.5, from:"random"},
    delay: 1.7,
    pointerEvents: "none",
    onComplete: function() {
        this.targets()[0].style.pointerEvents = "auto";}
});
gsap.from(".self", {
    opacity: 0,
    duration: 1.2,
    ease: "bounce.in",
    delay: 2,
    onComplete: function() {
        document.querySelector(".scroll").style.visibility = "visible";}
});

//Name Outline Hover
$(".name-out span").each(function (index, element){
    var hover = gsap.to(element, {
        color: "#fff",
        duration: 0.5,
        paused: true,
        ease: "circ.inOut"
    });
    element.animation = hover;
})

$(".name-out span").mouseenter(function(){
    this.animation.play();
})
$(".name-out span").mouseleave(function(){
    this.animation.reverse(2);
})


//ScrollTriggers

//scroll icon
gsap.to (".scroll", {
    scrollTrigger: {
        trigger: "#header",
        start: "20px top",
        end: "20px top",
        toggleActions: "restart none reverse none"
    },
    opacity: 0,
    duration: 1
})

//name
gsap.utils.toArray(".hdr-name").forEach((nme, i) => {
    ScrollTrigger.create ({
        trigger: "#header",
        start: "top top",
        end: "bottom 8%+=108px",
        scrub: true,
        pin: nme,
        pinSpacing: false,
        anticipatePin: 1
    });
});

//name outline
gsap.utils.toArray(".name-out").forEach((nmo, i) => {
    ScrollTrigger.create({
        trigger: nmo,
        start: "120% 8%",
        endTrigger: "#header",
        end: "bottom 8%+=108px",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1
    });
});

//about background
ScrollTrigger.create({
    trigger: ".about-bg",
    start: "top top",
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
    endTrigger: "#about",
    end: "bottom bottom"
});

//contact
ScrollTrigger.create({
    trigger: ".contact-wrapper",
    start: "top top",
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    end: "100% top"
});


//Cards

//hide initial card on hover
$(".cont-link a").mouseover(function(){
    gsap.to(".inl-card", {
        opacity: 0,
        transform: "scale(0) rotate(0deg)",
        duration: 0.3,
        ease: "power.in"
    })
})

//show initial card on mouse leave and hide other card
$(".cont-link a").mouseleave(function(){
    gsap.to(".inl-card", {
        opacity: 1,
        transform: "scale(1) rotate(-5deg)",
        duration: 0.3,
        ease: "power.out"
    })
    gsap.to(".card", {
        opacity: 0,
        transform: "scale(0) rotate(0deg)",
        duration: 0.3,
        ease: "power.out"
    })
})

//show respective cards on hover
$(".link1").mouseover(function(){
    gsap.to(".card1", {
        opacity: 1,
        transform: "scale(1) rotate(-5deg)",
        duration: 0.3,
        ease: "power.in"
    })
})
$(".link2").mouseover(function(){
    gsap.to(".card2", {
        opacity: 1,
        transform: "scale(1) rotate(-5deg)",
        duration: 0.3,
        ease: "power.in"
    })
});
$(".link3").mouseover(function(){
    gsap.to(".card3", {
        opacity: 1,
        transform: "scale(1) rotate(-5deg)",
        duration: 0.3,
        ease: "power.in"
    })
});
$(".link4").mouseover(function(){
    gsap.to(".card4", {
        opacity: 1,
        transform: "scale(1) rotate(-5deg)",
        duration: 0.3,
        ease: "power.in"
    })
});
$(".link5").mouseover(function(){
    gsap.to(".card5", {
        opacity: 1,
        transform: "scale(1) rotate(-5deg)",
        duration: 0.3,
        ease: "power.in"
    })
});