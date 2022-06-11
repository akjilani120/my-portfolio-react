import React from 'react';
import { useNavigate } from 'react-router-dom';
import laptop1 from '../img/laptop-1.png'
import computer1 from '../img/parts-1.png'
import photograpy from '../img/photography-1.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Portfolio = () => {
    const navigate = useNavigate()
    const handleLaptop =() =>{
        navigate("/laptop")
    }
    const handleComputerParts =() =>{
        navigate("/computerParts")
    }
    const handlePhotography =() =>{
        navigate("/photography ")
    }
    return (
        <section>
            <div class="portfolio-head">
                <div class="">
                    <div class="portfolio-main">
                        <div class="portfolio-title">
                            <div class="portfolio-heading-head">
                                <h1 class="portfolio-heading">Portfolio</h1>
                            </div>
                        </div>
                       
                        <div class="portfolio-img">
                        <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card card-item" >

                                        <img className='w-100 card-item-img' src={laptop1} alt="laptop img"></img>

                                        <div class="card-body">
                                            <p class=""> <b>Description :</b> This is an ecommerce web site. This website is designed to sell various laptop. </p>
                                            <p><b>Technology :</b>Html , css boostrap, react , react router,  node.js , express.js , mongodb </p>
                                            
                                            <button onClick={handleLaptop} className='btn btn-warning px-4 py-2 text-white'>About More</button>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-3 mt-lg-0">
                                    <div class="card card-item" >
                                        <img class="w-100 card-item-img" src={computer1} alt="" />
                                        <div class="card-body">
                                            <p class=""> <b>Description :</b>This is an ecommerce web site. This website is designed to sell various computer parts.t</p>
                                            <p><b>Technology :</b>Html , css tailwind, react , react router, react daisyUI , node.js , express.js , mongodb , react form  , react query </p>
                                            <button onClick={handleComputerParts} className='btn btn-warning px-4 py-2 text-white'>About More</button>
                                          
                                        </div>
                                    </div>
                                </div> 
                                <div class="col-lg-8 mt-4">
                                    <div class="card card-item" >
                                        <img  class="w-100 card-item-img " src={photograpy} alt="" />
                                        <div class="card-body">
                                            <p class=""> <b>Description :</b>This is an ecommerce web site. This website is designed to sell various picture. It uses  for design and development</p>
                                            <p><b>Technology :</b> Html , css , css boostrap,  react , react router,  node.js  </p>
                                            <button onClick={handlePhotography} className='btn btn-warning px-4 py-2 text-white'>About More</button>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </AnimationOnScroll>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;