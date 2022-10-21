// Nav bar
const menu=document.querySelector('.menu');
const close=document.querySelectorAll('.close');
const nav=document.querySelector('nav');


menu.addEventListener('click',function(){
    nav.classList.add('open-nav');
});

for (let btn of close) {
    btn.addEventListener('click',function(){
        nav.classList.remove('open-nav');
    });
}

// Mouse Follower
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

// animation
const texts = [" Web Developer", " GUI Developer", " Python Developer", " Student"];
let count = 0;
let index = 0;
let current = '';
let letter = '';

(function type(){
    if(count === texts.length){ count = 0; }
    current = texts[count];
    letter = current.slice(0,++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === current.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);
}());

// Message system
(function() { emailjs.init('bXY7HtbmJcff0T-XE')})();

var form = document.querySelector(".message-box");
function sendMsg(e){
    e.preventDefault();
    var tempParams = {
        from_name: document.querySelector('.name').value,
        rec_email: document.querySelector('.email').value,
        message: document.querySelector('.message').value
    }; 
    emailjs.send('service_mbsleos','template_tbkavid', tempParams)
        .then(
            function() { alert('Message Sent Successfully') },
            function(error) {console.log('FAILED...', error); alert('Message Failed') }
            );
    form.reset();
}

form.addEventListener('submit',sendMsg);
