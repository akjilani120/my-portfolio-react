import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Service = () => {
    return (
        <section class="my-5" id='parent'>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div class="px-4" >
            <div class="row " >
                <div class="col-12">
                    <div class="about-title d-flex justify-content-start align-items-center mt-4 text-center">
                        <p class="borer-item me-4"></p>
                        <h2 class="about-me">Services </h2>
                    </div>
                    <h1 class="service-title">What I Do</h1>
                </div>
                <div class="col-12 col-md-6 col-lg-4 text-center mt-3">
                    <div class="service-items">
                        <p> <i class="service-icon fa-sharp fa-solid fa-code"></i></p>
                        <h3 class="service-items-title">Web Developer</h3>
                       
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 text-center mt-3">
                    <div class="service-items service-border">
                        <p> <i class="service-icon fa-brands fa-react"></i></p>
                        <h3 class="service-items-title">React Developer</h3>                       
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 text-center mt-3">
                    <div class="service-items">
                        <p> <i class="service-icon fa-solid fa-laptop-code"></i></p>
                        <h3 class="service-items-title">Frontend Developer</h3>
                       
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 text-center mt-3">
                    <div class="service-items">
                        <p> <i class="service-icon fa-solid fa-file-code"></i></p>
                        <h3 class="service-items-title">Javascript Developer</h3>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 text-center mt-3">
                    <div class="service-items">
                        <p> <i class="service-icon fa-solid fa-layer-group"></i></p>
                        <h3 class="service-items-title">MERN Stack Developer</h3>
                            </div>
                </div>
            </div>

        </div>
       
        </AnimationOnScroll>
    </section>
    );
};

export default Service;