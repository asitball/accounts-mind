import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='text-center mt-3'>
           <p><small>© Accounts Mind {year}</small></p>
        </div>
    );
};

export default Footer;