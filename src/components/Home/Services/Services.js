import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data  => setServices(data))
    },[])
   
    return (
        <div className='container m-5'>
           <h3>Services</h3>
          <div className='row g-4'>
          {
            services.map(service => <Service key={service.id} service={service}></Service>)
           }
          </div>
        </div>
    );
};

export default Services;