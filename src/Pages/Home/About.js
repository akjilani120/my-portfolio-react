import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const About = () => {
    return (
        <section >
            <AnimationOnScroll animateIn="animate__bounceIn">
                <div class="about-header my-5">
                    <div class="about-main row">
                        <div class="about-title-side col-lg-5 "  >
                            <div class="about-item px-2">
                                <div class="about-title d-flex justify-content-center align-items-center mt-4">
                                    <p class="borer-item me-4"></p>
                                    <h2 class="about-me">About Me</h2>
                                    <p class="borer-item"></p>
                                </div>
                                <div>
                                    <h1 class="me-title"> I am Junior Full Stact Web Developer <br /> Junior MERN Stack Developer
                                    </h1>
                                    <p class="about-details">I am Abdul Kader Jilani.I read in Diploma in Computer Enginnering. I am a junior web developer. I have a good knowledge of web
                                        development. I can do a lot of beautiful professional web design and development. I have
                                        a good idea about html css javasripte, react, react router, node, express.js, mongodb,
                                        firebase etc. and can do a good job. I keep up to date on web design and development</p>
                                </div>
                            </div>
                        </div>
                        <div class="about-skill-side  col-lg-7" >
                            <div class="about-skil-main px-2">
                                <div class="about-title d-flex justify-content-start align-items-center mt-4">
                                    <p class="borer-item me-4"></p>
                                    <h2 class="about-me">My Skills </h2>
                                </div>
                                <div class="head-progess mx-5">
                                    <div class="progress-items">
                                        <h5 class="d-flex justify-content-between"> <span>Html</span> <span>80%</span> </h5>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width:"80%"}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="progress-items">
                                        <h5 class="d-flex justify-content-between "> <span>CSS</span> <span>60%</span> </h5>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width:"60%"}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="progress-items">
                                        <h5 class="d-flex justify-content-between "> <span>javasripte</span> <span>50%</span> </h5>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width:"50%"}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="progress-items">
                                        <h5 class="d-flex justify-content-between "> <span>React</span> <span>70%</span> </h5>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width:"70%"}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="progress-items">
                                        <h5 class="d-flex justify-content-between "> <span>Node js</span> <span>60%</span> </h5>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width:"60%"}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="progress-items">
                                        <h5 class="d-flex justify-content-between "> <span>Express js</span> <span>60%</span> </h5>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width:"60%"}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="progress-items">
                                        <h5 class="d-flex justify-content-between "> <span>Mongodb</span> <span>60%</span>  </h5>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width:"60%"}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </AnimationOnScroll>
            </section>
    );
};

export default About;