import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/images/projectBaseImage.jpg'
import './ProjectStyle.css'

export default function Project({
  img=Image,
  title = 'Project',
  desc = 'this is my project',
  status= 'this is the status'
}) {
  return (
    <div className='container'>
        <div className='projectItem'>
            <img src={img} alt= 'project image'></img>
        </div>
        <div className='projectInfo'>
          <Link to='/projects'>
            <h4 className='projectTitle'> {title} </h4>
          </Link>
          <p className='projectDesc'> {desc} </p>
          <p className='projectStatus'> {status} </p>
        </div>
    </div>
  )
}
