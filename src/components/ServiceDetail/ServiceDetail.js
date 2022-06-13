import React from 'react';
import {Link, useParams } from "react-router-dom";
const ServiceDetail = () => {
    const {serviceId} = useParams;
    return (
        <div>
            <h3>This is service details page {serviceId}</h3>
            <Link to='/checkout'>Checkout</Link>
        </div>
    );
};

export default ServiceDetail;