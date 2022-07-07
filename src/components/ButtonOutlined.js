import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonOutlinedStyle.css';
export default function ButtonOutlined({ link, text}) {
    return (
        <div className='divButtonOutlined'>
            <Link className='buttonOutlined' to={link}>{text}</Link>
        </div>
    )
}