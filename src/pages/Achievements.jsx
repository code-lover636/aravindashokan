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
                    |
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
        "id": 0,
        "event": "Magic2.0[Hackathon]",
        "date": "Dec 2022",
        "prize": "First Prize",
        "by": "IEEE SB MEC",
        "img": "../../assets/achievements/magic.png" ,
        "details": "Magic2.0 is an overnight flagship event of IEEE SB | MEC."
    },
    {
        "id": 1,
        "event": "Creaza",
        "date": "May 2023",
        "prize": "First Prize",
        "by": "IEEE SB FISAT",
        "img": "../../assets/achievements/creaza.jpg" ,
        "details": "Logo making competition held as part of International Women's Day for Peace and Disarmament."
    },
    {
        "id": 2,
        "event": "Web Wiz",
        "date": "Apr 2023",
        "prize": "First Prize",
        "by": "IEEE SB GECT",
        "img": "../../assets/achievements/webwiz.png" ,
        "details": "Web Wiz is a portfolio website competition organized by IEEE computer society | GECT."
    },
    {
        "id": 3,
        "event": "4x120",
        "date": "Mar 2023",
        "prize": "Third Prize",
        "by": "Excel MEC",
        "img": "../../assets/achievements/4x120.png" ,
        "details": "4x120 is group coding contest conducted as a part of Excel, the techno-managerial festival of MEC."
    },
    {
        "id": 4,
        "event": "Ozone",
        "date": "Feb 2023",
        "prize": "Winner",
        "by": "TLE MEC",
        "img": "../../assets/achievements/ozone.png" ,
        "details": "Ozone pair coding contest organized by TLE MEC was held around Valentine's Day."
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
  )
}

export default Achievements
