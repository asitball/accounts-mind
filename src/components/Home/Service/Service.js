import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
const Service = ({ service }) => {
    const {id, image, service_name, service_detail, service_rate } = service

    const navigate = useNavigate();
    const handleMoreDetail = id =>{
       navigate(`/service/${id}`)
    }
    return (
            <Card id='services' style={{ width: '22rem'  }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{service_name}</Card.Title>
                    <Card.Text>
                        {service_detail}
                    </Card.Text>
                    <Card.Text>
                        <h5>{service_rate}</h5>
                    </Card.Text>
                    <Button onClick={()=> handleMoreDetail(id)}  variant="primary">More Detail</Button>
                </Card.Body>
            </Card>
        
    );
};

export default Service;