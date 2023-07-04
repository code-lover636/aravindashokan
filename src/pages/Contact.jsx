import React from 'react'
import '../styles/contact.scss'

const sendMsg = e => {
    e.preventDefault();
    const name = document.querySelector('.name').value
    const email = document.querySelector('.email').value
    const msg = document.querySelector('.message').value
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!(name && email && msg)){
        alert('Please Fill All Columns');
        return
    } 
    else if (!filter.test(email)){
        alert('Please Enter A Valid Email');
        return
    } 
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
    document.querySelector(".message-box").reset();
}

const Contact = () => {
  emailjs.init('bXY7HtbmJcff0T-XE')
  return (
    <section className="contact" id="contact">
        <div className="container">
        <div className="social">
            <ul>
                <li>
                    <a href="mailto:aravindashokan636@gmail.com">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.65411 3.98202C11.1809 3.98202 12.6196 4.65887 13.674 5.71696V5.72009C13.674 5.21198 14.0158 4.82761 14.4883 4.82761H14.6083C15.3539 4.82761 15.5033 5.53072 15.5033 5.75258L15.5064 13.6492C15.4546 14.1667 16.0408 14.4342 16.3664 14.1017C17.632 12.7999 19.1488 7.40253 15.5783 4.27763C12.2484 1.36085 7.77917 1.84271 5.403 3.48016C2.87745 5.2251 1.26313 9.07935 2.8312 12.7017C4.54365 16.651 9.43912 17.8291 12.3528 16.6541C13.8277 16.0585 14.5077 18.0497 12.9746 18.7015C10.6641 19.6871 4.22491 19.5865 1.2175 14.3786C-0.814305 10.8605 -0.706809 4.67199 4.68427 1.46585C8.80476 -0.98845 14.2415 -0.308471 17.5189 3.11329C20.9438 6.69381 20.7456 13.393 17.402 15.9973C15.8877 17.1816 13.639 16.0298 13.6552 14.3042L13.6384 13.7417C12.584 14.786 11.1809 15.3985 9.65411 15.3985C6.63358 15.3985 3.97429 12.7386 3.97429 9.72121C3.97429 6.67131 6.63358 3.98327 9.65411 3.98327V3.98202ZM13.4534 9.50309C13.339 7.29254 11.6984 5.96133 9.71598 5.96133H9.64099C7.35606 5.96133 6.08672 7.76127 6.08672 9.80183C6.08672 12.0899 7.6198 13.5348 9.63161 13.5348C11.8772 13.5348 13.3515 11.8918 13.459 9.94808L13.4534 9.50309Z" fill="white"/>
                        </svg>
                    </a>
                </li>
                <li><a target="_blank" href="https://github.com/code-lover636">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1728 18.8175 16.8979 17.5417 18.12 15.8397C19.3421 14.1377 19.9997 12.0953 20 10C20 4.475 15.525 0 10 0Z" fill="white"/>
                        </svg>
                        
                    </a>
                </li>
                <li><a target="_blank" href="https://stackoverflow.com/users/16648774/aravind-ashokan">
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8892 21.5659V15.2288H19.0025V23.6793H0V15.2288H2.11336V21.5659H16.8892Z" fill="white"/>
                        <path d="M4.22821 19.4539H14.7906V17.3405H4.22821V19.4539ZM13.6954 0L11.9994 1.26091L18.304 9.73657L20 8.47566L13.6954 0ZM8.45642 4.99778L16.5724 11.7567L17.9236 10.1332L9.80761 3.37428L8.45494 4.99778H8.45642ZM5.80435 9.69365L15.3796 14.1527L16.272 12.2377L6.69676 7.7786L5.80435 9.69365ZM4.4354 14.6426L14.7728 16.8166L15.2079 14.7477L4.87051 12.5751L4.4354 14.6426Z" fill="white"/>
                        </svg>
                        
                    </a>
                </li>
                <li><a target="_blank" href="https://www.linkedin.com/in/aravind-ashokan-a26549243/">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.91925 0C1.76397 0 0 1.76393 0 3.91925V16.0814C0 18.2367 1.76393 20 3.91925 20H16.0814C18.2367 20 20 18.2367 20 16.0814V3.91925C20 1.76397 18.2367 0 16.0814 0H3.91925ZM4.905 3.3004C5.93842 3.3004 6.57495 3.97882 6.5946 4.87059C6.5946 5.74267 5.93838 6.44015 4.88502 6.44015H4.86563C3.85188 6.44015 3.19666 5.74271 3.19666 4.87059C3.19666 3.97884 3.87171 3.3004 4.90498 3.3004H4.905ZM13.8105 7.46842C15.7979 7.46842 17.2878 8.76743 17.2878 11.5589V16.7702H14.2674V11.9083C14.2674 10.6866 13.8303 9.85307 12.7372 9.85307C11.9028 9.85307 11.4054 10.4149 11.187 10.9576C11.1073 11.1518 11.0877 11.4229 11.0877 11.6946V16.7702H8.06729C8.06729 16.7702 8.10692 8.53433 8.06729 7.68156H11.0883V8.9686C11.4897 8.34933 12.2076 7.4684 13.8105 7.4684V7.46842ZM3.37481 7.68222H6.3952V16.7702H3.37481V7.68222Z" fill="white"/>
                        </svg>
                        
                    </a>
                </li>
                <li><a target="_blank" href="https://in.pinterest.com/aravindashokan636/">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0146 0C4.48352 0 0 4.48352 0 10.0138C0 14.2567 2.63815 17.8806 6.36398 19.3384C6.27626 18.5456 6.19774 17.3309 6.39823 16.4655C6.58118 15.6827 7.57278 11.4891 7.57278 11.4891C7.57278 11.4891 7.27288 10.8876 7.27288 10.0013C7.27288 8.612 8.0807 7.56944 9.084 7.56944C9.93943 7.56944 10.3521 8.21185 10.3521 8.97957C10.3521 9.83919 9.80661 11.124 9.52341 12.3144C9.28533 13.3111 10.0246 14.1231 11.0062 14.1231C12.7839 14.1231 14.154 12.2476 14.154 9.53928C14.154 7.14924 12.4306 5.47179 9.97034 5.47179C7.12167 5.47179 5.45174 7.61205 5.45174 9.81496C5.45174 10.6779 5.78088 11.6052 6.19439 12.1048C6.2771 12.205 6.28796 12.2927 6.2654 12.393C6.19022 12.7062 6.02063 13.3946 5.98638 13.5316C5.94211 13.7196 5.8427 13.758 5.65139 13.6694C4.40249 13.093 3.6189 11.2652 3.6189 9.78823C3.6189 6.63381 5.91454 3.73 10.2352 3.73C13.7087 3.73 16.4103 6.2086 16.4103 9.51339C16.4103 12.9677 14.2325 15.747 11.2034 15.747C10.1892 15.747 9.23687 15.2216 8.89938 14.595L8.27367 16.9742C8.04895 17.8472 7.43494 18.9391 7.02226 19.6024C7.9604 19.8906 8.94866 20.0493 9.98789 20.0493C15.5073 20.0493 20 15.5674 20 10.0355C20 4.50274 15.5073 0.0217201 9.98789 0.0217201L10.0146 0Z" fill="white"/>
                        </svg>
                    </a>
                </li>
                <li><a target="_blank" href="https://www.facebook.com/">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10C20 4.47563 15.5206 0 10 0C4.47563 0 0 4.47563 0 10C0 14.99 3.65562 19.1275 8.4375 19.8769V12.8912H5.89813V10.0006H8.4375V7.79625C8.4375 5.29063 9.92813 3.90687 12.2131 3.90687C13.3075 3.90687 14.4531 4.10188 14.4531 4.10188V6.5625H13.19C11.95 6.5625 11.5625 7.33437 11.5625 8.125V10H14.3356L13.89 12.8906H11.5625V19.8762C16.3406 19.1269 20 14.9894 20 9.99937V10Z" fill="white"/>
                        </svg>
                    </a>
                </li>
                <li><a target="_blank" href="https://replit.com/@Coder636">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.221 0.00185674C9.53879 -0.0113291 8.857 0.0457436 8.18644 0.172172C19.7712 1.59481 16.7607 15.1499 9.61993 15.0489C9.61993 15.0489 20.0167 16.4056 19.3655 6.52061C18.6756 4.63917 17.4333 3.01008 15.8015 1.84685C14.1698 0.683616 12.2246 0.0405227 10.221 0.00185674ZM6.8381 0.690634C6.67113 0.692303 6.50248 0.697313 6.32883 0.703992C4.23743 1.5126 2.48255 3.00733 1.35151 4.94345C0.220483 6.87957 -0.219672 9.14233 0.103119 11.3612C2.42743 -0.351298 15.6812 3.44157 14.9256 10.5932C14.9256 10.5932 17.305 0.562897 6.83727 0.690634H6.8381ZM8.05202 4.89426C4.99218 4.9143 0.558129 6.22005 0.662489 13.6455C1.19456 15.0129 2.02019 16.2469 3.08114 17.2605C3.12455 17.3031 3.17131 17.344 3.21639 17.3849C3.51678 17.6617 3.83379 17.9199 4.16565 18.158C4.21658 18.1947 4.26583 18.2348 4.31676 18.2707C4.66763 18.5107 5.0335 18.7279 5.41213 18.9211C5.52233 18.9779 5.6342 19.0296 5.74608 19.0822C6.07212 19.2356 6.40629 19.371 6.7471 19.488C6.83059 19.5164 6.9099 19.5523 6.99506 19.579C7.40295 19.7039 7.81847 19.8023 8.23903 19.8737C8.36677 19.8962 8.49534 19.9154 8.62391 19.9321C9.06033 19.9953 9.50043 20.0296 9.94136 20.0348L9.99145 20.0373C10.3254 20.0373 10.6527 20.0198 10.9766 19.9872C-0.669146 17.2096 3.75906 4.18795 10.8814 5.22654C10.8814 5.22654 9.65499 4.88424 8.05202 4.89426ZM10.0858 7.2002C9.5318 7.20004 8.9902 7.36415 8.52948 7.67179C8.06876 7.97944 7.70962 8.41679 7.49746 8.92855C7.28531 9.44031 7.22967 10.0035 7.33759 10.5469C7.4455 11.0902 7.71213 11.5894 8.10374 11.9813C8.49535 12.3731 8.99437 12.64 9.53768 12.7483C10.081 12.8565 10.6442 12.8012 11.1561 12.5894C11.668 12.3775 12.1055 12.0186 12.4135 11.5581C12.7214 11.0976 12.8858 10.5561 12.886 10.0021C12.8861 9.63422 12.8137 9.26997 12.6731 8.93009C12.5324 8.59021 12.3262 8.28137 12.0662 8.02119C11.8061 7.76102 11.4974 7.5546 11.1576 7.41373C10.8178 7.27287 10.4536 7.20031 10.0858 7.2002ZM5.11825 9.03026C5.11825 9.03026 2.33559 19.2776 13.4829 19.3661C15.2311 18.7167 16.7629 17.5913 17.9052 16.1172C19.0476 14.6431 19.7549 12.8789 19.9474 11.024C19.975 10.7576 19.9833 10.4863 19.9891 10.2141C19.99 10.1432 20 10.0739 20 10.0012C20 9.69149 19.9808 9.38592 19.9532 9.08286C17.0086 20.6768 3.98031 16.1359 5.11741 9.03026H5.11825Z" fill="white"/>
                        </svg>
                    </a>
                </li>
                <li><a target="_blank" href="https://www.instagram.com/_aravind_636/">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2 10C13.2 10.6329 13.0123 11.2516 12.6607 11.7778C12.3091 12.3041 11.8093 12.7142 11.2246 12.9564C10.6399 13.1986 9.99645 13.262 9.37571 13.1385C8.75497 13.015 8.18479 12.7103 7.73726 12.2627C7.28973 11.8152 6.98496 11.245 6.86149 10.6243C6.73801 10.0036 6.80138 9.36014 7.04359 8.77541C7.28579 8.19069 7.69594 7.69092 8.22218 7.3393C8.74841 6.98768 9.3671 6.8 10 6.8C10.8479 6.80264 11.6603 7.14063 12.2598 7.74017C12.8594 8.33972 13.1974 9.15212 13.2 10ZM20 5.6V14.4C20 15.8852 19.41 17.3096 18.3598 18.3598C17.3096 19.41 15.8852 20 14.4 20H5.6C4.11479 20 2.69041 19.41 1.6402 18.3598C0.589998 17.3096 0 15.8852 0 14.4V5.6C0 4.11479 0.589998 2.69041 1.6402 1.6402C2.69041 0.589998 4.11479 0 5.6 0H14.4C15.8852 0 17.3096 0.589998 18.3598 1.6402C19.41 2.69041 20 4.11479 20 5.6ZM14.8 10C14.8 9.05065 14.5185 8.12262 13.9911 7.33326C13.4636 6.54391 12.714 5.92868 11.8369 5.56538C10.9598 5.20208 9.99468 5.10702 9.06357 5.29223C8.13246 5.47744 7.27718 5.9346 6.60589 6.60589C5.9346 7.27718 5.47744 8.13246 5.29223 9.06357C5.10702 9.99468 5.20208 10.9598 5.56538 11.8369C5.92868 12.714 6.54391 13.4636 7.33326 13.9911C8.12262 14.5185 9.05065 14.8 10 14.8C11.273 14.8 12.4939 14.2943 13.3941 13.3941C14.2943 12.4939 14.8 11.273 14.8 10ZM16.4 4.8C16.4 4.56266 16.3296 4.33066 16.1978 4.13332C16.0659 3.93598 15.8785 3.78217 15.6592 3.69134C15.4399 3.60052 15.1987 3.57676 14.9659 3.62306C14.7331 3.66936 14.5193 3.78365 14.3515 3.95147C14.1836 4.11929 14.0694 4.33311 14.0231 4.56589C13.9768 4.79867 14.0005 5.03995 14.0913 5.25922C14.1822 5.47849 14.336 5.66591 14.5333 5.79776C14.7307 5.92962 14.9627 6 15.2 6C15.5183 6 15.8235 5.87357 16.0485 5.64853C16.2736 5.42348 16.4 5.11826 16.4 4.8Z" fill="white"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <form method="POST" className="message-box">
                <input type="name" name="name" className="name" placeholder="Name" required />
                <input type="email" className="email" name="email" placeholder="Email ID" required />
                <textarea name="message" cols="30" rows="10" className="message" placeholder="Message" required></textarea>
                <button onClick={sendMsg} className="submit" type="submit">SEND</button>
        </form>
        </div>

        <svg className="messaging-svg" width="400" height="382" viewBox="0 0 400 382" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="messaging svg">
            <path id="Vector" d="M209.682 120.878L201.859 144.172C201.154 146.313 200.027 148.214 198.575 149.707C197.123 151.2 195.391 152.24 193.53 152.737L193.066 152.849C193.066 152.849 193.688 164.664 197.177 170.249C197.512 170.774 197.895 171.25 198.319 171.669C201.097 174.531 202.853 178.582 203.219 182.974C203.293 184.087 203.427 185.193 203.618 186.285C204.082 188.727 204.977 192.493 206.601 194.385C206.601 194.385 212.564 203.792 214.281 211.223C214.281 211.223 215.798 209.635 216.202 204.993C216.202 204.993 216.805 197.663 221.454 193.262C221.454 193.262 224.085 189.984 224.405 184.091C224.559 181.527 224.939 178.991 225.538 176.525C226.827 171.097 228.786 162.846 229.333 160.994C229.333 160.994 229.226 159.242 225.292 154.819L211.956 130.684L212.466 120.592L209.682 120.878Z" fill="#F9B499"/>
            <path id="Vector_2" d="M209.591 127.017C209.591 127.017 206.793 125.239 207.532 115.861C207.532 115.861 208.378 118.456 210.815 116.868C210.815 116.868 209.28 123.208 209.591 127.017Z" fill="#2F2E41"/>
            <path id="Vector_3" d="M350.361 286.781H46.7754V365.162H350.361V286.781Z" fill="#CCCCCC"/>
            <path id="Vector_4" d="M308.793 268.937L350.361 286.781V299.569H46.7754V286.781L89.7065 269.261L308.793 268.937Z" fill="#CCCCCC"/>
            <path id="Vector_5" opacity="0.2" d="M308.793 268.937L350.361 286.781V299.569H46.7754V286.781L89.7065 269.261L308.793 268.937Z" fill="black"/>
            <path id="Vector_6" d="M179.199 156.45L188.603 152.051L198.857 171.83L210.668 176.962L223.754 171.701L228.926 159.03L232.246 162.909L235.152 199.751L242.133 236.975L240.737 268.898H209.56L186.643 221.466L179.693 190.83L179.199 156.45Z" fill="#C7BEBE"/>
            <path id="Vector_7" d="M180.792 156.988C182.041 155.986 185.402 153.669 191.627 151.839C191.627 151.839 189.645 148.084 177.523 153.406C177.523 153.406 173.075 152.287 158.137 160.262C158.137 160.262 148.843 163.205 143.727 175.103C142.426 177.857 141.733 180.878 141.697 183.945L138.87 208.569C138.87 208.569 137.383 257.98 132.268 268.898H225.068C224.199 265.952 222.976 263.131 221.427 260.504C221.427 260.504 217.119 268.064 213.888 265.686C213.888 265.686 208.799 260.532 207.48 238.751C207.44 238.044 207.601 237.342 207.943 236.73C209.127 234.609 210.534 232.63 212.138 230.832C212.138 230.832 209.575 230.272 204.998 225.375L190.318 198.216C190.318 198.216 187.356 193.599 184.395 178.204C184.395 178.204 180.038 163.021 180.087 158.504C180.085 158.213 180.148 157.924 180.27 157.661C180.392 157.398 180.571 157.168 180.792 156.988Z" fill="#0077C0"/>
            <path id="Vector_8" d="M232.226 168.336C232.226 168.336 229.417 160.404 227.061 157.205C227.061 157.205 233.935 157.059 235.114 159.006L238.006 161.987C238.006 161.987 249.806 167.022 250.434 168.336C250.434 168.336 264.882 182.081 264.988 198.801C264.988 198.801 267.021 228.879 268.629 232.364C268.629 232.364 278.373 253.363 277.195 268.92H237.364L236.509 207.617C236.509 207.617 230.503 205.676 231.048 193.744C230.727 185.248 231.122 176.735 232.226 168.336Z" fill="#016DAE"/>
            <path id="Vector_9" d="M258.326 273.099H242.345C242.077 273.099 241.819 272.978 241.621 272.759C241.422 272.541 241.298 272.241 241.273 271.918L239.564 250.98C239.55 250.824 239.564 250.666 239.604 250.516C239.644 250.367 239.71 250.229 239.798 250.112C239.885 249.996 239.991 249.902 240.11 249.839C240.229 249.776 240.358 249.743 240.488 249.744H259.227C259.353 249.744 259.477 249.775 259.592 249.834C259.707 249.894 259.811 249.981 259.898 250.091C259.984 250.201 260.051 250.331 260.095 250.474C260.138 250.616 260.158 250.767 260.151 250.919L259.403 271.862C259.389 272.196 259.269 272.511 259.069 272.741C258.868 272.971 258.603 273.099 258.326 273.099V273.099Z" fill="#2F2E41"/>
            <path id="Vector_10" d="M240.093 257.497C240.093 257.497 238.162 254.823 236.332 257.039C236.332 257.039 232.978 260.361 235.344 264.053C235.344 264.053 236.665 266.733 240.888 267.191L241.1 269.77C239.011 269.627 236.991 268.804 235.256 267.387C234.076 266.333 233.227 264.824 232.848 263.108C232.469 261.392 232.584 259.571 233.172 257.945C233.985 255.707 235.806 253.671 239.807 253.99L240.093 257.497Z" fill="#2F2E41"/>
            <g id="msg4">
            <path id="Vector_11" d="M375.766 150.889H307.713C306.207 150.891 304.752 151.374 303.616 152.248C302.48 153.123 301.739 154.331 301.531 155.65H292.602L301.461 160.589V174.993C301.461 175.719 301.623 176.437 301.937 177.107C302.251 177.778 302.712 178.386 303.293 178.899C303.873 179.412 304.562 179.819 305.321 180.096C306.079 180.373 306.892 180.515 307.713 180.514H375.766C376.586 180.515 377.399 180.373 378.158 180.096C378.916 179.819 379.606 179.412 380.186 178.899C380.767 178.386 381.227 177.778 381.542 177.107C381.856 176.437 382.018 175.719 382.018 174.993V156.416C382.018 154.95 381.359 153.544 380.187 152.508C379.014 151.471 377.424 150.889 375.766 150.889Z" fill="#7B6142"/>
            <path id="Vector_12" d="M373 159.241H310.801V159.895H373V159.241Z" fill="white"/>
            <path id="Vector_13" d="M373 165.377H310.801V166.032H373V165.377Z" fill="white"/>
            <path id="Vector_14" d="M337.309 171.782H310.801V172.437H337.309V171.782Z" fill="white"/>
            <path id="Vector_15" d="M281.92 162.502C285.548 162.502 288.489 159.902 288.489 156.696C288.489 153.489 285.548 150.889 281.92 150.889C278.292 150.889 275.352 153.489 275.352 156.696C275.352 159.902 278.292 162.502 281.92 162.502Z" fill="#5C4529"/>
            </g>
            <g id="msg3">
            <path id="Vector_16" d="M281.597 105.858H349.656C351.162 105.861 352.616 106.343 353.751 107.218C354.886 108.093 355.625 109.3 355.833 110.619H364.761L355.902 115.558V129.962C355.902 131.427 355.244 132.831 354.073 133.866C352.901 134.902 351.313 135.484 349.656 135.484H281.597C279.941 135.484 278.352 134.902 277.181 133.866C276.01 132.831 275.352 131.427 275.352 129.962V111.38C275.352 109.915 276.01 108.511 277.181 107.476C278.352 106.44 279.941 105.858 281.597 105.858Z" fill="#378929"/>
            <path id="Vector_17" d="M346.562 114.21H284.363V114.864H346.562V114.21Z" fill="white"/>
            <path id="Vector_18" d="M346.562 120.346H284.363V121.001H346.562V120.346Z" fill="white"/>
            <path id="Vector_19" d="M346.561 126.751H320.053V127.406H346.561V126.751Z" fill="white"/>
            <path id="Vector_20" d="M375.449 117.471C379.077 117.471 382.018 114.872 382.018 111.665C382.018 108.458 379.077 105.858 375.449 105.858C371.822 105.858 368.881 108.458 368.881 111.665C368.881 114.872 371.822 117.471 375.449 117.471Z" fill="#2CE35F"/>
            </g>
            <g id="msg2">
            <path id="Vector_21" d="M375.766 61.3479H307.713C306.206 61.3487 304.751 61.831 303.614 62.7058C302.478 63.5806 301.738 64.7891 301.531 66.1083H292.602L301.461 71.0477V85.4519C301.461 86.1774 301.623 86.8958 301.937 87.5661C302.251 88.2363 302.712 88.8452 303.293 89.3579C303.873 89.8707 304.562 90.2773 305.321 90.5544C306.079 90.8315 306.892 90.9738 307.713 90.9731H375.766C376.586 90.9738 377.399 90.8315 378.158 90.5544C378.916 90.2773 379.606 89.8707 380.186 89.3579C380.767 88.8452 381.227 88.2363 381.542 87.5661C381.856 86.8958 382.018 86.1774 382.018 85.4519V66.8691C382.018 66.1435 381.856 65.4251 381.542 64.7549C381.227 64.0847 380.767 63.4758 380.186 62.963C379.606 62.4503 378.916 62.0437 378.158 61.7666C377.399 61.4894 376.586 61.3472 375.766 61.3479V61.3479Z" fill="#C7BEBE"/>
            <path id="Vector_22" d="M373 69.6995H310.801V70.3539H373V69.6995Z" fill="white"/>
            <path id="Vector_23" d="M373 75.8362H310.801V76.4907H373V75.8362Z" fill="white"/>
            <path id="Vector_24" d="M337.309 82.241H310.801V82.8954H337.309V82.241Z" fill="white"/>
            <path id="Vector_25" d="M281.92 72.9608C285.548 72.9608 288.489 70.3612 288.489 67.1543C288.489 63.9475 285.548 61.3479 281.92 61.3479C278.292 61.3479 275.352 63.9475 275.352 67.1543C275.352 70.3612 278.292 72.9608 281.92 72.9608Z" fill="#C7BEBE"/>
            </g>
            <g id="msg1">
            <path id="Vector_26" d="M252.638 16.8376H320.813C322.321 16.8398 323.778 17.3227 324.914 18.1974C326.051 19.0721 326.792 20.2797 327 21.598H335.944L327.069 26.5374V40.9416C327.069 42.4059 326.41 43.8103 325.237 44.8457C324.063 45.8811 322.472 46.4628 320.813 46.4628H252.638C250.982 46.4584 249.395 45.8747 248.226 44.8398C247.057 43.8048 246.4 42.403 246.4 40.9416V22.3756C246.398 21.6505 246.557 20.9321 246.869 20.2614C247.181 19.5907 247.64 18.9809 248.219 18.4666C248.799 17.9524 249.487 17.5438 250.245 17.2643C251.003 16.9848 251.816 16.8398 252.638 16.8376V16.8376Z" fill="#245D96"/>
            <path id="Vector_27" d="M317.713 25.1892H255.408V25.8437H317.713V25.1892Z" fill="white"/>
            <path id="Vector_28" d="M317.713 31.3257H255.408V31.9802H317.713V31.3257Z" fill="white"/>
            <path id="Vector_29" d="M317.714 37.7307H291.16V38.3852H317.714V37.7307Z" fill="white"/>
            <path id="Vector_30" d="M346.65 28.4505C350.284 28.4505 353.23 25.8509 353.23 22.6441C353.23 19.4373 350.284 16.8376 346.65 16.8376C343.016 16.8376 340.07 19.4373 340.07 22.6441C340.07 25.8509 343.016 28.4505 346.65 28.4505Z" fill="#0180FF"/>
            </g>
            <g id="Group" opacity="0.2">
            <path id="Vector_31" d="M246.34 185.521L246.072 185.437L254.694 163.375L275.207 163.61L275.351 163.772L275.286 163.934L254.865 163.705L246.34 185.521Z" fill="black"/>
            </g>
            <path id="Vector_32" d="M226.422 156.399L224.851 154.262C224.851 154.262 214.95 148.059 211.407 129.856C211.407 129.856 207.114 156.869 226.422 156.399Z" fill="#F4A289"/>
            <path id="Vector_33" d="M254.869 131.525C262.265 112.487 259.541 92.0882 248.785 85.9632C238.03 79.8381 223.315 90.3062 215.919 109.344C208.523 128.382 211.247 148.781 222.002 154.906C232.758 161.031 247.473 150.563 254.869 131.525Z" fill="#F9B499"/>
            <path id="Vector_34" d="M210.982 121.706C213.215 121.706 215.025 117.175 215.025 111.587C215.025 105.998 213.215 101.467 210.982 101.467C208.749 101.467 206.939 105.998 206.939 111.587C206.939 117.175 208.749 121.706 210.982 121.706Z" fill="#F9B499"/>
            <path id="Vector_35" d="M253.248 251.976H257.065C261.223 251.976 264.6 256.401 264.6 261.855C264.6 267.314 261.223 271.739 257.065 271.739H253.997C253.511 271.712 253.055 271.454 252.725 271.021C252.396 270.589 252.22 270.017 252.237 269.429C252.22 268.841 252.396 268.269 252.725 267.837C253.055 267.404 253.511 267.146 253.997 267.119H256.081C256.153 267.119 256.225 267.103 256.292 267.07C256.36 267.037 256.421 266.988 256.472 266.926C256.524 266.864 256.565 266.79 256.593 266.709C256.621 266.628 256.635 266.541 256.635 266.453V266.453C256.635 266.365 256.621 266.278 256.593 266.197C256.565 266.116 256.524 266.042 256.472 265.98C256.421 265.918 256.36 265.87 256.292 265.836C256.225 265.803 256.153 265.787 256.081 265.787H253.502C253.328 265.779 253.157 265.728 252.999 265.639C252.84 265.55 252.698 265.424 252.581 265.268C252.463 265.112 252.372 264.929 252.313 264.73C252.254 264.531 252.228 264.32 252.237 264.109V264.109C252.228 263.898 252.254 263.687 252.313 263.488C252.372 263.289 252.463 263.107 252.581 262.951C252.698 262.795 252.84 262.668 252.999 262.579C253.157 262.49 253.328 262.44 253.502 262.431H256.21C256.332 262.431 256.45 262.372 256.537 262.267C256.623 262.162 256.672 262.02 256.672 261.872C256.672 261.723 256.623 261.581 256.537 261.476C256.45 261.371 256.332 261.312 256.21 261.312H253.239C253.102 261.306 252.967 261.267 252.843 261.197C252.718 261.127 252.606 261.029 252.513 260.907C252.42 260.785 252.347 260.641 252.3 260.485C252.252 260.329 252.231 260.164 252.237 259.998V259.998C252.225 259.662 252.324 259.334 252.512 259.087C252.7 258.839 252.962 258.692 253.239 258.678H256.385C256.508 258.678 256.626 258.619 256.712 258.514C256.799 258.409 256.847 258.266 256.847 258.118C256.847 257.97 256.799 257.828 256.712 257.723C256.626 257.618 256.508 257.559 256.385 257.559H253.068C252.952 257.554 252.838 257.521 252.733 257.461C252.628 257.402 252.534 257.318 252.456 257.213C252.379 257.109 252.319 256.986 252.281 256.854C252.244 256.721 252.228 256.58 252.237 256.44V256.44C252.232 256.303 252.25 256.166 252.29 256.037C252.329 255.908 252.389 255.789 252.466 255.689C252.544 255.588 252.637 255.506 252.74 255.449C252.843 255.392 252.955 255.36 253.068 255.355H256.727C256.808 255.353 256.885 255.314 256.942 255.245C256.999 255.176 257.031 255.083 257.032 254.986V254.986C257.032 254.887 257 254.793 256.943 254.723C256.886 254.652 256.809 254.612 256.727 254.611H253.248C253.11 254.604 252.974 254.565 252.848 254.495C252.722 254.425 252.609 254.325 252.515 254.202C252.421 254.079 252.348 253.934 252.301 253.777C252.253 253.62 252.231 253.453 252.237 253.285V253.285C252.229 252.95 252.331 252.624 252.52 252.379C252.71 252.134 252.971 251.989 253.248 251.976V251.976Z" fill="#F9B499"/>
            <path id="Vector_36" d="M256.824 203.416H260.423L261.412 200.686C261.412 200.686 257.744 202.918 256.824 203.416Z" fill="#DA0037"/>
            <path id="Vector_37" d="M220.919 111.13C220.919 111.13 218.064 111.181 215.93 112.605C213.796 114.029 214.927 97.748 208.368 105.236L210.591 85.7982C210.947 82.4812 212.039 79.3833 213.762 76.802C216.404 72.9358 220.909 69.9127 227.364 77.677C227.364 77.677 243.015 58.2608 267.426 88.6711C267.426 88.6711 277.51 88.0898 265.973 102.354L268.708 104.408C268.794 104.473 268.867 104.558 268.923 104.657C268.979 104.756 269.015 104.867 269.031 104.982C269.046 105.096 269.039 105.212 269.01 105.32C268.981 105.427 268.932 105.525 268.865 105.604C267.229 107.459 260.756 111.388 240.915 94.3419C240.915 94.3419 230.668 86.7262 229.208 92.8365C229.208 92.8365 229.892 97.5003 225.65 100.119C224.062 101.04 222.765 102.487 221.912 104.29C221.058 106.093 220.684 108.177 220.834 110.296C220.859 110.569 220.884 110.841 220.919 111.13Z" fill="#2F2E41"/>
            <g id="hand">
            <path id="Vector_38" d="M253.248 160.807L246.673 178.445L243.568 185.37C243.568 185.37 250.522 186.712 267.252 179.261C267.548 179.121 267.869 179.073 268.185 179.12C268.501 179.166 268.803 179.307 269.063 179.53L275.365 163.772L273.36 161.462L253.248 160.807Z" fill="#2F2E41"/>
            <path id="Vector_39" d="M234.744 199.181L213.759 230.882C213.759 230.882 210.552 235.194 209.785 238.103C209.785 238.103 210.404 256.949 214.867 265.032C215.084 265.438 215.398 265.753 215.768 265.935C216.137 266.117 216.544 266.157 216.933 266.05C218.028 265.731 219.645 264.439 221.738 260.54L243.698 209.798C243.698 209.798 258.625 203.326 263.564 199.103C263.995 198.73 264.346 198.238 264.587 197.668C264.828 197.098 264.953 196.466 264.951 195.825V194.667C264.951 194.667 265.634 194.253 266.424 193.705C267.112 193.221 267.682 192.527 268.077 191.693C268.473 190.858 268.681 189.912 268.679 188.95C268.679 188.95 268.919 188.748 269.243 188.39C269.496 188.127 269.701 187.803 269.844 187.438C269.988 187.072 270.066 186.675 270.073 186.27C270.081 185.866 270.019 185.465 269.89 185.092C269.761 184.719 269.569 184.383 269.326 184.106L268.804 183.513C269.168 183.325 269.465 182.986 269.64 182.556C269.795 182.229 269.883 181.861 269.895 181.484C269.907 181.107 269.843 180.732 269.709 180.391C269.501 179.856 269.132 179.436 268.677 179.217C268.223 178.998 267.716 178.996 267.261 179.211C263.102 181.163 252.014 185.924 243.577 185.319L246.673 178.445C246.673 178.445 240.584 182.511 238.098 183.261C238.098 183.261 233.995 185.219 234.864 190.483L234.744 199.181Z" fill="#F9B499"/>
            </g>
            <path id="Vector_40" d="M75.7715 231.766L77.7706 287.962L95.2326 288.644L115.781 287.777L117.815 231.766L94.8116 228.23L75.7715 231.766Z" fill="#5C4529"/>
            <path id="Vector_41" opacity="0.2" d="M81.3164 230.45L81.6127 242.215H87.3227V229.349L81.3164 230.45Z" fill="black"/>
            <path id="Vector_42" d="M81.3161 287.644C81.3178 288.346 81.1307 289.028 80.7841 289.585C80.4374 290.141 79.9508 290.541 79.4 290.722C74.1426 292.426 68.6161 292.426 63.3587 290.722C62.8098 290.539 62.3252 290.138 61.9801 289.581C61.6349 289.025 61.4483 288.344 61.4492 287.644V260.675H81.3161V287.644Z" fill="#F1F2F2"/>
            <path id="Vector_43" d="M71.3827 262.912C76.8688 262.912 81.3162 261.91 81.3162 260.675C81.3162 259.439 76.8688 258.437 71.3827 258.437C65.8966 258.437 61.4492 259.439 61.4492 260.675C61.4492 261.91 65.8966 262.912 71.3827 262.912Z" fill="#E6E7E8"/>
            <path id="Vector_44" d="M216.647 190.251C220.295 190.934 219.876 180.684 219.876 180.684C219.876 180.684 223.075 184.759 226.058 185.965C235.052 189.603 230.399 162.444 230.399 162.444L226.607 157.107C226.607 157.107 220.32 173.224 218.771 174.241L192.48 152.051C192.48 152.051 187.038 152.269 186.666 154.579L199.559 172.555C199.559 172.555 212.999 189.568 216.647 190.251Z" fill="#0F0F0F"/>
            </g>
        </svg>
    </section>
  )
}

export default Contact