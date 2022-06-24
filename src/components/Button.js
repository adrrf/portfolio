import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonStyle.css'
export default function Button({ link, text}) {
    return (
        <div className='divButton'>
            <Link className='button' to={link}>{text}</Link>
        </div>
    )
}