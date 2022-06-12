import React from 'react';
import './AboutMe.css';
import self_photo from '../../images/about_me/self_photo.jpg';
const AboutMe = () => {
    return (
        <div className='about'>
            <img src={self_photo} alt="" />
            <h2>Name: Asit Ballave</h2>
            <p>Hello I am Asit Ballave. My home town is Barishal. My present address is Utttar Badda, Dhaka-1212. I do a job in a privet company. my next dream, i will be a web developer. I am trying to complete my web development course.</p>
        </div>
    );
};

export default AboutMe;