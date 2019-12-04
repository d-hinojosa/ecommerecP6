import React from 'react';
import Carousel from './Carousel';
import Aboutstore from './Aboutstore';
import ImagesHomepage from './ImagesHomepage';

const Home = () => {
    return ( 
    <React.Fragment >
        <Carousel />
        <Aboutstore />
        <ImagesHomepage />
    </React.Fragment>
    );
}

export default Home;