import React from 'react';
import Pertice from '../Component/Pertice';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import './Home.css'
import Portfolio from './Portfolio';
import Service from './Service';
import { Parallax, Background } from 'react-parallax';

const Home = () => {

    return (
        
        <div>
            <Pertice/>
             <Banner/>
             <About></About>
            <Service></Service>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;