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
  const ExperienceDetails = [
    {
        "id": 2,
        "desig": "Software Engineer Intern",
        "date": "Feb 2026 - Present",
        "company": "Armada",
        "content": "Working in the Frontend team, focusing on building user-friendly interfaces and enhancing user experience."
    },
    {
        "id": 1,
        "desig": "Frontend Developer",
        "date": "Feb-Apr 2024",
        "company": "Krisko",
        "content": "Worked as a freelance developer and designer, collaborating with clients like CUWA and MEDICO."
    },
    {
        "id": 0,
        "desig": "UI/UX Designer",
        "date": "Mar-Apr 2023",
        "company": "Madhyam Change Foundation",
        "content": "Worked on competitive analysis, user flow, wireframing, moodboards, design, prototyping"
    },
  ];
  
  return (
    <section className="exp" id="experience">
        <div className="container">
            <div className="card">
                { ExperienceDetails.map( exp => <Expdetails key={exp["id"]} desig={exp["desig"]} date={exp["date"]} company={exp["company"]} content={exp["content"]}/> ) }
            </div>
            <div className="line"></div>
            <div className="last-dot"></div>
        </div>
    </section>
  )
}

export default Experience
