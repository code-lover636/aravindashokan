// Following the mouse arrow
const circle = document.querySelector('.circle');
const mouseFollow = (e) =>{
    circle.style.left = (e.pageX - 25)+ 'px';
    circle.style.top = (e.pageY -25) + 'px';
}
document.addEventListener('mousemove', mouseFollow);

// Adding animation on click
const addAnim = (e) =>{
    circle.style.border = "10px solid white"
    circle.style.opacity = "0.2"
    circle.style.scale = "2"

    console.log("click")
    setTimeout(()=>{
        circle.style.opacity = ".5"
        circle.style.scale = "1"
        circle.style.border = "2px solid #DA0037"
    },300);
}
document.addEventListener('click', addAnim);

