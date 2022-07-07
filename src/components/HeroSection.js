import React from 'react';
import Button from './Button';
import './HeroSectionStyle.css'
import Socials from './Socials';

export default function HeroSection() {
    return (
        <div className='heroDiv'>
            <div className='container'>
                <h1 className='heroHeading'>
                    <span className='heroThisSecond'></span>
                    <span className='heroThisSecond'></span>
                    <span className='heroThis'></span>
                    <span className='heroThis'>Hello World! This is</span>
                    <span className='heroName'>adrián romero</span>
                </h1>
                <span className='heroText'>I'm a software engineering student based in Seville. I love code and science. Always down to learn something new. </span>
                <Button link = {'/projects'} text = {'take a look at my works'}/>
                <Socials/>
            </div>
        </div>
    );
}