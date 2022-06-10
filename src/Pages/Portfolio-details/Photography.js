import React from 'react';
import img1 from '../img/photography-1.png'
import img2 from '../img/photography-2.png'
import img3 from '../img/photography-login.png'
import img4 from '../img/photography-5.png'
import img5 from '../img/photography-signup.png'
import img6 from '../img/photography-6.png'
const Photography = () => {
    return (
        <div className='laptop-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 col-10 mx-auto'>
                        <div className='card'>
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={img1} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={img2} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={img3} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={img4} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={img5} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src={img6} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="bg-danger p-4 rounded  carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class=" bg-danger p-4 rounded carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                            <div className='card-body '>
                                <h5 className='fw-bold'>Website Name : AK Photography </h5>
                                <ul>
                                    <p> <b> Description : </b> </p>
                                    <li>Authenticated by firebase authentication</li>
                                    <li>If you click on the More button of the product, if you are logged in, you will go to the next route. Then it will take you to the login page.</li>
                                    <li>If you are logged in, you will go to the next page and The pictures will show more details.</li>
                                    <li>The pictures will show more details</li>
                                    <li>Login router has a system to login with email and Google. And if you do not have an account, you can go to the registration page and sign</li>
                                   
                                </ul>
                                <p><b>Technology : </b> Html , css boostrap, react , react router, firebase , Rest API  </p>
                                <p className='d-flex justify-content-between'>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://ak-photographer.web.app/" target="_blank">Live Demo</a>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://github.com/akjilani120/ak-photographer" target="_blank">client github code</a>
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photography;