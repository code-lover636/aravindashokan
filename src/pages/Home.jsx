import {useEffect, useState} from 'react'
import '../styles/home.scss'

const typeAnim = (skill, setSkill, SKILLS, count, index, current, letter) =>{
    
    if(count === SKILLS.length){ count = 0; }
    current = SKILLS[count];
    letter = current.slice(0,++index);
    setSkill(letter)
    if(letter.length === current.length){
        count++;
        index = 0;
    }
    setTimeout(()=>typeAnim(skill, setSkill, SKILLS, count, index, current, letter), 300);
}

const Home = () => {
    let count = 0;
    let index = 0;
    let current = '';
    let letter = '';
    const SKILLS = ["Web Developer", "Web Designer", "Programmer", "GUI Developer"];
    const [skill, setSkill] = useState(SKILLS[0]);
    useEffect(() =>{typeAnim(skill, setSkill, SKILLS, count, index, current, letter)},[])
  return (
    <section className="hero" id="home" data-theme="dark">
            
        <h1 className="hi">Hi, I'm <span>Aravind Ashokan.</span></h1>
        <div className="photo-container"></div>
        <div className="subtext">
            <h1 className="iam">I'm a <span className="typing">{skill}</span></h1>
            <p className="desc">A programmer, web developer and designer with a knack for designing engaging and responsive user experiences that drive results.
                Get to know me and my work better by exploring my portfolio website.
            </p> 
            <div className="buttons">
                <a href="#contact" className="hire">Hire Me</a>
                <a target="_blank" href="https://drive.google.com/file/d/1ieKP6-ntLa3BuNRl8Q6CXJNqc9KC5utn/view?usp=sharing" className="resume">My Resume</a>
            </div>         
        </div>


        <div className="scroll">
            <svg className="scroll-svg" width="39" height="16" viewBox="0 0 39 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.0164 12.5146L30.5158 15.0158L38.0158 7.51578L30.5158 0.0157777L28.0164 2.51696L33.017 7.51578L28.0164 12.5146V12.5146ZM10.9837 2.51696L8.48425 0.0157777L0.984253 7.51578L8.48425 15.0158L10.9837 12.5146L5.98484 7.51578L10.9837 2.51696V2.51696Z" fill="#C7BEBE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.1971 7.51566C14.1971 6.10926 14.7558 4.76045 15.7503 3.76598C16.7448 2.7715 18.0936 2.21281 19.5 2.21281C20.9064 2.21281 22.2552 2.7715 23.2497 3.76598C24.2442 4.76045 24.8028 6.10926 24.8028 7.51566C24.8028 8.92206 24.2442 10.2709 23.2497 11.2653C22.2552 12.2598 20.9064 12.8185 19.5 12.8185C18.0936 12.8185 16.7448 12.2598 15.7503 11.2653C14.7558 10.2709 14.1971 8.92206 14.1971 7.51566V7.51566ZM17.7324 7.51566C17.7324 7.04686 17.9186 6.59726 18.2501 6.26577C18.5816 5.93427 19.0312 5.74804 19.5 5.74804C19.9688 5.74804 20.4184 5.93427 20.7499 6.26577C21.0814 6.59726 21.2676 7.04686 21.2676 7.51566C21.2676 7.98446 21.0814 8.43406 20.7499 8.76555C20.4184 9.09705 19.9688 9.28328 19.5 9.28328C19.0312 9.28328 18.5816 9.09705 18.2501 8.76555C17.9186 8.43406 17.7324 7.98446 17.7324 7.51566V7.51566Z" fill="#C7BEBE"/>
            </svg> 
        </div>
    </section>

  )
}

export default Home
