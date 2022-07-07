import React from 'react';
import './SectionTitleStyle.css'

export default function SectionTitle({
    subheading = 'this is sub',
    heading = 'this is heading'}) {
    return(
        <div className='divSection'>
            <p> {subheading} </p>
            <h2> {heading} </h2>
        </div>
    )
}