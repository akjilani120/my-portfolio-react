import React from 'react';
import Pertice from '../Component/Pertice';

import Banner from './Banner';
import Contact from './Contact';
import './Home.css'
import Portfolio from './Portfolio';
import Service from './Service';

import HomeAbout from './HomeAbout';

const Home = () => {

    return (
        
        <div>
            <Pertice/>
             <Banner/>
             <HomeAbout/>            
            <Service></Service>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;