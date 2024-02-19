import React from 'react'
import {Swiper, SwiperSlide} from'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Scrollbar, A11y, Mousewheel } from 'swiper'

import 'swiper/css/pagination';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../styles/achievements.scss'

const Card = props =>{
    return (
        <div className="container">
            <img className="cover" src={props.img} alt={props.event} />
            <div className="content">
                <div className="row1">
                    <h1 className="prize">{props.prize}</h1>
                    <h1 className="date">{props.date}</h1>
                </div>
                <div className="row2">
                    <h1 className="event">{props.event}</h1>
                    
                    <h1 className="by">{props.by}</h1>
                </div>
                <p className="details">{props.details}</p>
            </div>
        </div>
    );
}

const Achievements = () => {
  const ACHIEVEMENTS = [
    {
        "id": 10,
        "event": "Magic2.0[Hackathon]",
        "date": "Dec 2022",
        "prize": "First Prize",
        "by": "IEEE SB MEC",
        "img": "../../assets/achievements/magic.png" ,
        "details": "Magic2.0 is an overnight flagship event of IEEE SB | MEC."
    },
    {
        "id": 9,
        "event": "Portfolio Design",
        "date": "Nov 2023",
        "prize": "First Prize",
        "by": "DSC MEC",
        "img": "../../assets/achievements/gdsc.png" ,
        "details": "Portfolio design competition organized by  Google Developer Student Club | MEC."
    },
    {
        "id": 8,
        "event": "Chakravyuha[Hackathon]",
        "date": "Oct 2023",
        "prize": "Finalist",
        "by": "IEEE NSSCE",
        "img": "../../assets/achievements/chakravyuha.jpg" ,
        "details": "Chakravyuha, a 24 hour National Level Hackathon."
    },
    {
        "id": 7,
        "event": "MaveliGPT",
        "date": "Oct 2023",
        "prize": "First Prize",
        "by": "TinkerHub Toc H",
        "img": "../../assets/achievements/mavelibot.jpeg" ,
        "details": "MaveliGPT is a chatbot making competition conducted by TinkerHub Toc H"
    },
    {
        "id": 6,
        "event": "Web Wiz",
        "date": "Apr 2023",
        "prize": "First Prize",
        "by": "IEEE SB GECT",
        "img": "../../assets/achievements/webwiz.png" ,
        "details": "Web Wiz is a portfolio website competition organized by IEEE computer society | GECT."
    },
    {
        "id": 5,
        "event": "Creaza",
        "date": "May 2023",
        "prize": "First Prize",
        "by": "IEEE SB FISAT",
        "img": "../../assets/achievements/creaza.jpg" ,
        "details": "Logo making competition held as part of International Women's Day for Peace and Disarmament."
    },
    {
        "id": 4,
        "event": "Code Onam | Begineer",
        "date": "Oct 2023",
        "prize": "Second Prize",
        "by": "TLE MEC",
        "img": "../../assets/achievements/codeonam_basic.jpeg" ,
        "details": "Code onam is coding contest conducted by TLE MEC was held around Onam."
    },
    {
        "id": 3,
        "event": "Code Onam | Intermediate",
        "date": "Oct 2023",
        "prize": "Third Prize",
        "by": "TLE MEC",
        "img": "../../assets/achievements/codeonam_intermediate.jpeg" ,
        "details": "Code onam is coding contest conducted by TLE MEC was held around Onam."
    },
    {
        "id": 2,
        "event": "4x120",
        "date": "Mar 2023",
        "prize": "Third Prize",
        "by": "Excel MEC",
        "img": "../../assets/achievements/4x120.png" ,
        "details": "4x120 is group coding contest conducted as a part of Excel, the techno-managerial festival of MEC."
    },
    {
        "id": 1,
        "event": "Ozone",
        "date": "Feb 2023",
        "prize": "Winner",
        "by": "TLE MEC",
        "img": "../../assets/achievements/ozone.png" ,
        "details": "Ozone pair coding contest organized by TLE MEC was held around Valentine's Day."
    },
    {
        "id": 0,
        "event": "Mavelikk oru Portfolio",
        "date": "Oct 2023",
        "prize": "Third Prize",
        "by": "Gtech mulearn",
        "img": "../../assets/achievements/gtech.jpeg" ,
        "details": "'Mavelikk oru Portfolio' is a UI/UX portfolio making competion conducted by Gtech mulearn."
    },
    ];
    return (
        <section className="achievements" id="achievements">
            <Swiper
                className='swiper'
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
            >
            {ACHIEVEMENTS.map( item =>
                <SwiperSlide key={item['id']}>
                    <Card img={item['img']}
                        date={item['date']}
                        prize={item['prize']}
                        event={item['event']}
                        by={item['by']}
                        details={item['details']}
                        />
                </SwiperSlide>
            )}
            </Swiper>
        </section>
    );
}

export default Achievements
