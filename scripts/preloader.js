const loader = document.querySelector('.load');
const page = document.querySelector('.loader');

gsap.to(loader,{
    width: '100vw',
    delay: 1,
    duration: 5,
})

gsap.to(page,{
    y: "-200vh",
    delay: 6,
    duration: 5,
})