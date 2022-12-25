// Elements
const menu=document.querySelector('.menu');
const close=document.querySelectorAll('.close');
const nav=document.querySelector('nav');
const opts=document.querySelectorAll('nav ul li a');

// Navbar open & close
menu.addEventListener( 'click',()=>nav.classList.add('open-nav') );
for (let btn of close) {
    btn.addEventListener( 'click',()=>nav.classList.remove('open-nav') );
}

// Nav selection
const sections = document.querySelectorAll('section')
opts.forEach(opt=>
    opt.addEventListener('click',()=>{
    opts.forEach(op=>op===opt?opt.classList.add('selected'):op.classList.remove('selected'))
}))


gsap.registerPlugin(ScrollTrigger);

for (let i=0; i<opts.length; i++) {
    gsap.to(opts[i],{
        color: "red",
        scrollTrigger: {
            start: "top 60%",
            end: "bottom 60%",
            trigger: sections[i],
            toggleActions:"play reverse restart reverse",
        },
        markers: {
            fontSize: '3rem',
        }
    })
}
