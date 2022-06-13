import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'
import banner3 from '../../../images/banner/banner-3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='container '>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide "
                    />
                    <Carousel.Caption>
                        <h3>Financial Analysis</h3>
                        <p>I do provide financial analysis, economics, finance and accounting related task</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Investment Analysis</h3>
                        <p>I do provide investment analysis services very trstly</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Auditing</h3>
                        <p>
                        I do provide coporate and others auditing services.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;