import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import './Home.css'
import Portfolio from './Portfolio';
import Service from './Service';
const Home = () => {
    
    return (
        <div>            
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <Portfolio></Portfolio>
           <Contact></Contact>
        </div>
    );
};

export default Home;