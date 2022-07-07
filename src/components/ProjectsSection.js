import React from 'react'
import SectionTitle from './SectionTitle'
import{ Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'
import projects from '../assets/data/projects'
import Project from './Project'
import './ProjectsSectionStyle.css'

SwiperCore.use([Navigation])

export default function ProjectsSection() {
  return (
    <div className='container'>
        <SectionTitle heading='projects' subheading='take a look at my recent works'/>
        <div className='allItems'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation

            >
                {projects.map((project, index) => {
                    if(index >= 5) return;
                    return(
                        <SwiperSlide>
                            <Project
                                title={project.name}
                                img={project.img}
                                desc={project.desc}
                                status={project.state}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </div>
  )
}
