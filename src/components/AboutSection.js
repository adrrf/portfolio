import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import ButtonOutlined from './ButtonOutlined';
import Image from '../assets/images/aboutPhoto2.jpeg'
import './AboutSectionStyle.css'

export default function AboutSection() {
    return (
        <div>
            <div className='sectionContainer'>
                <div className='sectionLeft'>
                    <SectionTitle
                        subheading='let me introduce myself'
                        heading='about me'
                    />
                    <p className='sectionText'>Currently studying at University of Seville. Passionate about everything about technology and science.</p>
                    <div className='sectionButtons'>
                        <Button link={ '/projetcs'} text={'works'}></Button>
                        <ButtonOutlined link={ '/about'} text={'more'}></ButtonOutlined>
                    </div>
                </div>
                <div className='sectionRight'>
                        <img src={Image}></img>
                </div>
            </div>
        </div>
    )
}