import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomProfileLink from '../Component/CustomProfileLink';
import aboutImg from '../img/about-img.png'
const HomeAbout = () => {
    return (
        <div className='home-about-main px-3' id='about'>
            <div className="home-about-body">
                <div className="row">
                    <div className="col-md-5">
                        <div className="about-img-part">
                            <img src={aboutImg} alt="" />
                        </div>

                    </div>
                    <div className="col-md-7" >
                        <div className="about-details-part">
                         <h1 className='home-about-title mb-4'>About Me</h1>
                         <p>I am Abdul Kader Jilani.I read in Diploma in Computer Enginnering. I am a junior web developer. I have a good knowledge of web development. I can do a lot of beautiful professional web design and development. I have a good idea about html css javasripte, react, react router, node, express.js, mongodb, firebase etc. and can do a good job. I keep up to date on web design and development</p>
                         <ul className='d-md-flex' id='skills'>
                            <li> <CustomProfileLink className="link-about-nav" to="/" >Main SKills</CustomProfileLink> </li>
                            <li><CustomProfileLink className="link-about-nav" to="/education" >Education</CustomProfileLink></li>
                            <li><CustomProfileLink className="link-about-nav" to="/certificate" > Certification</CustomProfileLink></li>
                         </ul>
                         <div>
                            <Outlet/>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;