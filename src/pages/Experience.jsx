import {useState, useRef} from 'react'

import '../styles/experience.scss'

const Expdetails = props =>{
    return (
        <div className="item">
            <div className="dot"></div>
            <div className="details">
                <div className="row1">
                    <h2 className="desig">{props.desig}</h2>
                    <h2 className="date">{props.date}</h2>
                </div>
                <h2 className="company">{props.company}</h2>
                <p className="skills-needed">{props.content}</p>
            </div>
        </div>
    )
}

const Experience = () => {
  const hac = useRef(0), int = useRef(1), pos = useRef(2);
  const internExp = [
    {
        "desig": "UI/UX Designer",
        "date": "Mar-Apr 2023",
        "company": "Madhyam Change Foundation",
        "content": "Worked on competitive analysis, user flow, wireframing, moodboards, design, prototyping"
    },
    {
        "desig": "",
        "date": "",
        "company": "",
        "content": ""
    }
  ];
  const hackExp = [
    {
        "desig": "SlashKey",
        "date": "May 2023",
        "company": "IEEE CUSAT | INTEL",
        "content": "Worked on a music recommeder website based on machine learning."
    },
    {
        "desig": "Devjam",
        "date": "May 2023",
        "company": "Devfolio",
        "content": "Worked on a web based project(ChatSecure) which uses machine learning and NLP to classify spam messages."
    },
    {
        "desig": "Technohack",
        "date": "Mar 2023",
        "company": "IEDC MEC",
        "content": "Worked on a web based project(Untangled) designed to help individuals who may be experiencing depression or other related mental health concerns."
    },
    {
        "desig": "Magic2.0",
        "date": "Dec 2022",
        "company": "IEE SB | MEC",
        "content": "Worked on a food donation website that allows individuals to list excess food that is available and allows those in need to pick up food from them."
    },
    {
        "desig": "",
        "date": "",
        "company": "",
        "content": ""
    }
  ];
  const posExp = [
    {
        "desig": "Tech Team Core Member",
        "date": "May 2023 - [present]",
        "company": "FOSS MEC",
        "content": ""
    },
    {
        "desig": "Design Team Core Member",
        "date": "May 2023 - [present]",
        "company": "FOSS MEC",
        "content": ""
    },
    {
        "desig": "UI/UX Team Core Member",
        "date": "May 2023 - [present]",
        "company": "FOSS MEC",
        "content": ""
    },
    {
        "desig": "Tech Trainee",
        "date": "May 2023 - [present]",
        "company": "TinkerHub MEC",
        "content": ""
    },
    {
        "desig": "Design Team Member",
        "date": "Apr 2023 - [present]",
        "company": "TBT MEC",
        "content": ""
    },
    {
        "desig": "",
        "date": "",
        "company": "",
        "content": ""
    }
  ];
  const [display, setDisplay] = useState(internExp);
  return (
    <section className="exp" id="experience">
        <header>
            <h2 ref={int} className="active" onClick={() => {
                setDisplay(internExp); 
                hac.current.classList.remove("active");
                int.current.classList.add("active");
                pos.current.classList.remove("active");
                }}>
                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" fill="#F8F8F8"/>
                </svg>
                Internships
            </h2>
            <h2 ref={hac} onClick={() => {
                setDisplay(hackExp); 
                hac.current.classList.add("active");
                int.current.classList.remove("active");
                pos.current.classList.remove("active");
                }}>
                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 21C1.71667 21 1.479 20.904 1.287 20.712C1.095 20.52 0.999337 20.2827 1 20C1 19.7167 1.096 19.479 1.288 19.287C1.48 19.095 1.71734 18.9993 2 19H22C22.2833 19 22.521 19.096 22.713 19.288C22.905 19.48 23.0007 19.7173 23 20C23 20.2833 22.904 20.521 22.712 20.713C22.52 20.905 22.2827 21.0007 22 21H2ZM4 18C3.45 18 2.979 17.804 2.587 17.412C2.195 17.02 1.99934 16.5493 2 16V5C2 4.45 2.196 3.979 2.588 3.587C2.98 3.195 3.45067 2.99934 4 3H20C20.55 3 21.021 3.196 21.413 3.588C21.805 3.98 22.0007 4.45067 22 5V16C22 16.55 21.804 17.021 21.412 17.413C21.02 17.805 20.5493 18.0007 20 18H4Z" fill="#F8F8F8"/>
                </svg>
                Hackathons
                </h2>
            <h2 ref={pos} onClick={() => {
                setDisplay(posExp); 
                hac.current.classList.remove("active");
                int.current.classList.remove("active");
                pos.current.classList.add("active");
                }}>
                <svg className="icon" width="640" height="512" viewBox="0 0 640 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_80_6)">
                    <path d="M320 32C311.9 32 303.9 33.4 296.3 36.1L15.7998 137.4C6.29977 140.9 -0.00023273 149.9 -0.00023273 160C-0.00023273 170.1 6.29977 179.1 15.7998 182.6L73.6998 203.5C57.2998 229.3 47.9998 259.8 47.9998 291.9V320C47.9998 348.4 37.1998 377.7 25.6998 400.8C19.1998 413.8 11.7998 426.6 3.19977 438.4C-0.000232697 442.7 -0.900233 448.3 0.899767 453.4C2.69977 458.5 6.89977 462.3 12.0998 463.6L76.0998 479.6C80.2998 480.7 84.7998 479.9 88.4998 477.6C92.1998 475.3 94.7998 471.5 95.5998 467.2C104.2 424.4 99.8998 386 93.4998 358.5C90.2998 344.3 85.9998 329.8 79.9998 316.5V291.9C79.9998 261.7 90.1998 233.2 107.9 210.4C120.8 194.9 137.5 182.4 157.1 174.7L314.1 113C322.3 109.8 331.6 113.8 334.8 122C338 130.2 334 139.5 325.8 142.7L168.8 204.4C156.4 209.3 145.5 216.8 136.6 226L296.2 283.6C303.8 286.3 311.8 287.7 319.9 287.7C328 287.7 336 286.3 343.6 283.6L624.2 182.6C633.7 179.2 640 170.1 640 160C640 149.9 633.7 140.9 624.2 137.4L343.7 36.1C336.1 33.4 328.1 32 320 32ZM128 408C128 443.3 214 480 320 480C426 480 512 443.3 512 408L496.7 262.6L354.5 314C343.4 318 331.7 320 320 320C308.3 320 296.5 318 285.5 314L143.3 262.6L128 408Z" fill="#F8F8F8"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_80_6">
                    <rect width="640" height="512" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                Positions
            </h2>

        </header>
        <div className="container">
            <div className="card">
                { display.map( exp => <Expdetails desig={exp["desig"]} date={exp["date"]} company={exp["company"]} content={exp["content"]}/> ) }
            </div>
            <div className="line"></div>
        </div>
    </section>
  )
}

export default Experience
