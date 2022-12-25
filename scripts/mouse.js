const circle = document.getElementById('circle');
const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

const body=document.querySelector('body');
const ball1=document.querySelector('.ball1');
const ball2=document.querySelector('.ball2');
let Count = 0;
body.addEventListener('click',function(){
    if (Count === 0){
        ball1.style.transform = "rotate(360deg)";
        ball2.style.transform = "rotate(-360deg)";
        Count = 1;
    }
    else{
        ball1.style.transform = "rotate(0deg)";
        ball2.style.transform = "rotate(0deg)";   
        Count = 0;  
    }
});