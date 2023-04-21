const texts = [" Web Developer", " Web Designer", " Programmer", "GUI Developer"];
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