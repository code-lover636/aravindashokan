(function() { emailjs.init('bXY7HtbmJcff0T-XE')})();

const form = document.querySelector(".message-box");
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
