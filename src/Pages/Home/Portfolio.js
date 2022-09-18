import React from 'react';
import { useNavigate } from 'react-router-dom';
import laptop1 from '../img/laptop-1.png'
import computer1 from '../img/parts-1.png'
import car from '../img/car.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Portfolio = () => {
    const navigate = useNavigate()
    const handleLaptop = () => {
        navigate("/laptop")
    }
    const handleComputerParts = () => {
        navigate("/computerParts")
    }
    const handlePhotography = () => {
        navigate("/photography ")
    }
    return (
        <section>
            <div class="portfolio-head">
                <div class="">
                    <div class="portfolio-main">
                        <div class="portfolio-title">
                            <div class="portfolio-heading-head">
                                <h1 class="portfolio-heading">My Latest Project</h1>
                            </div>
                        </div>

                        <div class="portfolio-img px-3 py-4">
                            <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                                <div class="row">
                                    <div class="col-lg-4 ">
                                        <div class=" card-item m-lg-2 m-4" >
                                            <img className="w-100 card-item-img" src={car} alt="" />
                                            <div className="card-item-overflow">
                                                <div className="portfolio-details">
                                                    <h3 className='portfolio-name mb-3'>Brand Car House</h3>
                                                    <h5 className='portfoli-about'>This is a fully responsive manufacturer website.</h5>
                                                    <div className="portfolio-details-btn text-center mt-5">
                                                        <button onClick={handlePhotography} className='portfolio-btn'>Show Details</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4  ">
                                        <div class=" card-item m-lg-2 m-4"  >
                                            <img className="w-100 card-item-img" src={computer1} alt="" />
                                          <div className="card-item-overflow">
                                            <div className="portfolio-details">
                                                <h3 className='portfolio-name mb-3'>Computer Parts House</h3>
                                                <h5 className='portfoli-about'>This is a fully responsive manufacturer website.</h5>
                                                <div className="portfolio-details-btn text-center mt-5">
                                                    <button onClick={handleComputerParts} className='portfolio-btn'>Show Details</button>
                                                </div>
                                            </div>
                                            </div>  
                                        </div>
                                    </div>
                                    <div class="col-lg-4  ">
                                        <div class=" card-item m-lg-2 m-4" >
                                            <img className="w-100 card-item-img" src={laptop1} alt="" />
                                          <div className="card-item-overflow">
                                            <div className="portfolio-details">
                                                <h3 className='portfolio-name mb-3'>Ak laptop shop</h3>
                                                <h5 className='portfoli-about'>This is a fully responsive manufacturer website.</h5>
                                                <div className="portfolio-details-btn text-center mt-5">
                                                    <button onClick={handleLaptop} className='portfolio-btn'>Show Details</button>
                                                </div>
                                            </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                       <div className='py-5'>
                                       <a className='porfilio-more-link' target="blank" href="https://github.com/akjilani120"> View More</a>
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