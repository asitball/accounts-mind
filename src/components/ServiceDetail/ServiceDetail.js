import React from 'react';
import {Link, useParams } from "react-router-dom";
const ServiceDetail = () => {
    const {serviceId} = useParams;
    return (
        <div className='mt-5 pt-5 text-primary text-center'>
            <h3>This is service details page {serviceId}</h3>
            <h1>product comming</h1>
        </div>
    );
};

export default ServiceDetail;