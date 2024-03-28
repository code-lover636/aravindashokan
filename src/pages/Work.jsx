import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/work.scss";


const Slider = props =>{
  const hosted = props.hosted;
  const code = props.code;
  return(
  <div className="container">
    <img src={props.image} alt={props.name} />
    <div className="content">
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <ul>
        {props.tools.map(item => <li key={props.tools.indexOf(item)}>{item}</li>)}
      </ul>
      <div className="btn-wrap">
        { props.hosted !=="" ?
        <a href={props.hosted} target="_blank" className="website">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM9.52782 15.75H14.4722C13.9688 17.4694 13.125 19.0191 12 20.2397C10.875 19.0191 10.0313 17.4694 9.52782 15.75ZM9.1875 14.25C8.93876 12.7603 8.93876 11.2397 9.1875 9.75H14.8125C15.0613 11.2397 15.0613 12.7603 14.8125 14.25H9.1875ZM3.75 12C3.74935 11.2392 3.85442 10.4819 4.06219 9.75H7.66782C7.44407 11.2417 7.44407 12.7583 7.66782 14.25H4.06219C3.85442 13.5181 3.74935 12.7608 3.75 12ZM14.4722 8.25H9.52782C10.0313 6.53062 10.875 4.98094 12 3.76031C13.125 4.98094 13.9688 6.53062 14.4722 8.25ZM16.3322 9.75H19.9378C20.3541 11.2211 20.3541 12.7789 19.9378 14.25H16.3322C16.5559 12.7583 16.5559 11.2417 16.3322 9.75ZM19.3472 8.25H16.0256C15.6429 6.74392 15.0001 5.31623 14.1263 4.03125C15.2427 4.33127 16.2839 4.86162 17.1831 5.58818C18.0823 6.31475 18.8194 7.22146 19.3472 8.25ZM9.87375 4.03125C8.9999 5.31623 8.35713 6.74392 7.97438 8.25H4.65282C5.18056 7.22146 5.91772 6.31475 6.81689 5.58818C7.71606 4.86162 8.75733 4.33127 9.87375 4.03125ZM4.65282 15.75H7.97438C8.35713 17.2561 8.9999 18.6838 9.87375 19.9688C8.75733 19.6687 7.71606 19.1384 6.81689 18.4118C5.91772 17.6852 5.18056 16.7785 4.65282 15.75ZM14.1263 19.9688C15.0001 18.6838 15.6429 17.2561 16.0256 15.75H19.3472C18.8194 16.7785 18.0823 17.6852 17.1831 18.4118C16.2839 19.1384 15.2427 19.6687 14.1263 19.9688Z" fill="#F8F8F8"/>
          </svg>
          Hosted Website
        </a>
        : <></>
        }
        <a href={props.code} target="_blank" className="code">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C13.1016 0 14.1641 0.140625 15.1875 0.421875C16.2109 0.703125 17.1641 1.10938 18.0469 1.64062C18.9297 2.17188 19.7383 2.79688 20.4727 3.51562C21.207 4.23438 21.8359 5.04297 22.3594 5.94141C22.8828 6.83984 23.2852 7.79688 23.5664 8.8125C23.8477 9.82812 23.9922 10.8906 24 12C24 13.2891 23.8047 14.5312 23.4141 15.7266C23.0234 16.9219 22.4648 18.0195 21.7383 19.0195C21.0117 20.0195 20.1484 20.8945 19.1484 21.6445C18.1484 22.3945 17.0312 22.9766 15.7969 23.3906C15.7734 23.3984 15.7383 23.4023 15.6914 23.4023C15.6445 23.4023 15.6094 23.4062 15.5859 23.4141C15.3984 23.4141 15.25 23.3594 15.1406 23.25C15.0312 23.1406 14.9766 22.9961 14.9766 22.8164V21.1758C14.9766 20.6367 14.9805 20.0859 14.9883 19.5234C14.9883 19.125 14.9297 18.7227 14.8125 18.3164C14.6953 17.9102 14.4844 17.5703 14.1797 17.2969C15.0859 17.1953 15.8789 17.0117 16.5586 16.7461C17.2383 16.4805 17.8086 16.1055 18.2695 15.6211C18.7305 15.1367 19.0742 14.5508 19.3008 13.8633C19.5273 13.1758 19.6445 12.3477 19.6523 11.3789C19.6523 10.7695 19.5508 10.1953 19.3477 9.65625C19.1445 9.11719 18.8359 8.61719 18.4219 8.15625C18.5078 7.9375 18.5703 7.71094 18.6094 7.47656C18.6484 7.24219 18.668 7.00781 18.668 6.77344C18.668 6.46875 18.6367 6.16797 18.5742 5.87109C18.5117 5.57422 18.4219 5.27734 18.3047 4.98047C18.2656 4.96484 18.2227 4.95703 18.1758 4.95703C18.1289 4.95703 18.0859 4.95703 18.0469 4.95703C17.7969 4.95703 17.5352 4.99609 17.2617 5.07422C16.9883 5.15234 16.7188 5.25391 16.4531 5.37891C16.1875 5.50391 15.9258 5.64062 15.668 5.78906C15.4102 5.9375 15.1875 6.07812 15 6.21094C14.0234 5.9375 13.0234 5.80078 12 5.80078C10.9766 5.80078 9.97656 5.9375 9 6.21094C8.80469 6.07812 8.58203 5.9375 8.33203 5.78906C8.08203 5.64062 7.82422 5.50781 7.55859 5.39062C7.29297 5.27344 7.01953 5.17188 6.73828 5.08594C6.45703 5 6.19531 4.95703 5.95312 4.95703H5.82422C5.77734 4.95703 5.73438 4.96484 5.69531 4.98047C5.58594 5.26953 5.5 5.5625 5.4375 5.85938C5.375 6.15625 5.33984 6.46094 5.33203 6.77344C5.33203 7.00781 5.35156 7.24219 5.39062 7.47656C5.42969 7.71094 5.49219 7.9375 5.57812 8.15625C5.16406 8.60938 4.85547 9.10547 4.65234 9.64453C4.44922 10.1836 4.34766 10.7617 4.34766 11.3789C4.34766 12.332 4.46094 13.1562 4.6875 13.8516C4.91406 14.5469 5.25781 15.1328 5.71875 15.6094C6.17969 16.0859 6.75 16.4648 7.42969 16.7461C8.10938 17.0273 8.90234 17.2148 9.80859 17.3086C9.58203 17.5117 9.41016 17.7539 9.29297 18.0352C9.17578 18.3164 9.09375 18.6094 9.04688 18.9141C8.83594 19.0156 8.61328 19.0938 8.37891 19.1484C8.14453 19.2031 7.91016 19.2305 7.67578 19.2305C7.17578 19.2305 6.76172 19.1133 6.43359 18.8789C6.10547 18.6445 5.8125 18.3242 5.55469 17.918C5.46094 17.7695 5.34766 17.6211 5.21484 17.4727C5.08203 17.3242 4.9375 17.1914 4.78125 17.0742C4.625 16.957 4.45703 16.8633 4.27734 16.793C4.09766 16.7227 3.91016 16.6836 3.71484 16.6758H3.57422C3.51172 16.6758 3.45312 16.6875 3.39844 16.7109C3.34375 16.7344 3.28906 16.7578 3.23438 16.7812C3.17969 16.8047 3.15625 16.8438 3.16406 16.8984C3.16406 16.9922 3.21875 17.082 3.32812 17.168C3.4375 17.2539 3.52734 17.3242 3.59766 17.3789L3.63281 17.4023C3.80469 17.5352 3.95312 17.6602 4.07812 17.7773C4.20312 17.8945 4.32031 18.0234 4.42969 18.1641C4.53906 18.3047 4.62891 18.4531 4.69922 18.6094C4.76953 18.7656 4.85938 18.9492 4.96875 19.1602C5.23438 19.7695 5.60547 20.2109 6.08203 20.4844C6.55859 20.7578 7.13281 20.8984 7.80469 20.9062C8.00781 20.9062 8.21094 20.8945 8.41406 20.8711C8.61719 20.8477 8.82031 20.8125 9.02344 20.7656V22.8047C9.02344 22.9922 8.96875 23.1406 8.85938 23.25C8.75 23.3594 8.59766 23.4141 8.40234 23.4141H8.30859C8.26953 23.4141 8.23438 23.4062 8.20312 23.3906C6.97656 22.9922 5.85938 22.418 4.85156 21.668C3.84375 20.918 2.98047 20.0391 2.26172 19.0312C1.54297 18.0234 0.988281 16.9219 0.597656 15.7266C0.207031 14.5312 0.0078125 13.2891 0 12C0 10.8984 0.140625 9.83594 0.421875 8.8125C0.703125 7.78906 1.10938 6.83594 1.64062 5.95312C2.17188 5.07031 2.79688 4.26172 3.51562 3.52734C4.23438 2.79297 5.04297 2.16406 5.94141 1.64062C6.83984 1.11719 7.79688 0.714844 8.8125 0.433594C9.82812 0.152344 10.8906 0.0078125 12 0Z" fill="#0077C0"/>
          </svg>
            Code
        </a>
      </div>
    </div>
  </div>
  );
}


export default function Work() {

  const PROJECTS = [
    { 
      "name": "VISION",
      "desc": "Color Correction Software",
      "image": "../../assets/projects/chatsecure.png",
      "tools": ["Python", "Javascript", "CSS","Python", "Fast API", "Machine Learning and NLP"],
      "hosted": "https://chatsecure.netlify.app",
      "code": "https://github.com/code-lover636/ChatSecure"
    },
    { 
      "name": "CHATSECURE",
      "desc": "Spam classifier",
      "image": "../../assets/projects/chatsecure.png",
      "tools": ["React", "Vite", "CSS(SASS)","Python", "Fast API", "Machine Learning and NLP"],
      "hosted": "https://chatsecure.netlify.app",
      "code": "https://github.com/code-lover636/ChatSecure"
    },
    { 
      "name": "SIGNAL",
      "desc": "Sign language interpreter",
      "image": "../../assets/projects/sign.jpeg",
      "tools": ["Machine Learning", "OpenCV", "Mediapipe", "Streamlit"],
      "hosted": "",
      "code": "https://github.com/code-lover636/Signal_Sign_Language_Interpreter"
    },
    { 
      "name": "GRANGER",
      "desc": "Bard Powered AI Chatbot",
      "image": "../../assets/projects/granger.png",
      "tools": ["React", "Vite","CSS(SASS)", "Python", "Fast API", "Bard API"],
      "hosted": "",
      "code": "https://github.com/code-lover636/Granger"
    },
    { 
      "name": "Musical",
      "desc": "Spotify Clone",
      "image": "../../assets/projects/musical.png",
      "tools": ["React","CSS(SASS)", "Shazam Core API"],
      "hosted": "https://musical-music-app.netlify.app/",
      "code": "https://github.com/code-lover636/Musical"
    },
    { 
      "name": "NEWSIFY",
      "desc": "NEWS browsing app.",
      "image": "../../assets/projects/newsify.png",
      "tools": ["Flask","Jinja","News API", "HTML", "CSS(SASS)"],
      "hosted": "http://programmer636.pythonanywhere.com/",
      "code": "https://github.com/code-lover636/NEWSIFY-NewsApp-API_Based"
    },
    { 
      "name": "PIXEL",
      "desc": "Image browsing app.",
      "image": "../../assets/projects/pixel.png",
      "tools": ["React","CSS(SASS)","Unsplash API"],
      "hosted": "https://pixel-image.netlify.app/",
      "code": "https://github.com/code-lover636/Pixel"
      
    },
    { 
      "name": "STREAMFLIX",
      "desc": "Netflix clone",
      "image": "../../assets/projects/streamflix.png",
      "tools": ["React","CSS(SASS)","OMDB API"],
      "hosted": "https://code-lover636.github.io/StreamFlix/",
      "code": "https://github.com/code-lover636/StreamFlix"
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section id="work" className="work">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        
        {PROJECTS.map(item => <SwiperSlide key={item["name"]}> <Slider name={item["name"]} desc={item["desc"]} image={item["image"]} tools={item["tools"]} hosted={item["hosted"]} code={item["code"]} /> </SwiperSlide>)}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {PROJECTS.map(item => <SwiperSlide key={item["name"]}> <img src={item["image"]} alt={item["name"]} /> </SwiperSlide>)}
      </Swiper>
    </section>
  );
}