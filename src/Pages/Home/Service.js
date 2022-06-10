import React from 'react';

const Service = () => {
    return (
        <section class="mb-5">
        <div class="container">
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
                        <p> <i class="service-icon fa-brands fa-css3-alt"></i></p>
                        <h3 class="service-items-title">Front-end  Design</h3>
                        <p>HTML , HTML5,  CSS3 , CSS bootstrap 5,  CSS Tailwind , React daisyUI,   </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 text-center mt-3">
                    <div class="service-items service-border">
                        <p> <i class="service-icon fa-brands fa-react"></i></p>
                        <h3 class="service-items-title">Back-end Development</h3>
                        <p>javasripte , ES6, React , React Router, Node.js </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 text-center mt-3">
                    <div class="service-items">
                        <p> <i class="service-icon fa-solid fa-server"></i></p>
                        <h3 class="service-items-title">Server Development</h3>
                        <p>Express.js Mongodb </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );
};

export default Service;