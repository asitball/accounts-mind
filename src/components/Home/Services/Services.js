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
        <div className='container'>
           <h2 className='m-5 text-primary'>Services</h2>
          <div className='row g-4'>
          {
            services?.map(service => <Service key={service.id} service={service}></Service>)
           }
          </div>
        </div>
    );
};

export default Services;