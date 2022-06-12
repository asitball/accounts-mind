import React from 'react';
import {useParams } from "react-router-dom";
const ServiceDetail = () => {
    const {serviceId} = useParams;
    return (
        <div>
            <h3>This is service details page {serviceId}</h3>
        </div>
    );
};

export default ServiceDetail;