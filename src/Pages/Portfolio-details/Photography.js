import React from 'react';
import img1 from '../img/car-1.png'
import img2 from '../img/car-2.png'
import img3 from '../img/car-3.png'
import img4 from '../img/car-4.png'
import img5 from '../img/car-5.png'
import img6 from '../img/car-6.png'
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
                                <h5 className='fw-bold'>Website Name : Brand Car House </h5>
                                <ul>
                                    <p> <b> Description : </b> </p>
                                    <li>Google Login and Email Login systems have been created using Firebase and those who do not have an account can sign in and login.  </li>
                                    <li>Here you can buy each car and find out the details of these cars which will show you to another router</li>
                                    <li>Here you can comment on each car if you do not have a user account
</li>
                                    <li>It has an admin system that can add products and see all orders. </li>
                                   
                                   
                                </ul>
                                <p><b>Technology :</b>  Node.js  React.js, React Router, Rest API, Firebase, React hook form, React query, Express.js, Mongodb, Heroku, font awesome icons, React Toastify </p>
                                <p className='d-flex justify-content-between'>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://car-house-3ee13.firebaseapp.com/" target="_blank">Live Demo</a>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://github.com/akjilani120/Brand-car-house" target="_blank">client github code</a>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://github.com/akjilani120/ak-car-parts-house-server" target="_blank">Server github code</a>
                                   
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