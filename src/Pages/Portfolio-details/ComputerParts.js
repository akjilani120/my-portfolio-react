import React from 'react';
import img1 from '../img/parts-1.png'
import img2 from '../img/parts-2.png'
import img3 from '../img/parts-4.png'
import img4 from '../img/parts-7.png'
import img5 from '../img/parts-8.png'
import img6 from '../img/parts-9.png'
const ComputerParts = () => {
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
                                <h5 className='fw-bold'>Website Name : Computer Parts House</h5>
                                <ul>
                                    <p> <b> Description : </b> </p>
                                    <li>This is an ecommerce web site. This website is designed to sell product.</li>
                                    <li>If you click on the buy now button of the product, if you are logged in, you will go to the next route. Then it will take you to the login page.</li>
                                    <li>If you are logged in, you will go to the next page and The product you are clicking will show the details of the product.</li>
                                    <li>There is a purshes button on that page and if you click on it, the user will show his name and email. Then if you give the quantity of how many products you will buy. Your order will be completed</li>
                                    <li>If you go to Dashboard Route to see your orders, click on my order and you will see the orders. And there is the option to pay if the payment is. Then the payment ID will showYou can also go to the review and give your review</li>
                                    <li>Here is the admin system created. There are some separate routers for admins. Which cannot be viewed without admin. They are in the router product add, showing everyone's order</li>
                                    <li>JWT tokens have been used for security</li>
                                </ul>
                                <p><b>Technology : </b> Html , css tailwind,react daisyUI react , react router, firebase , react toast  , node.js , express.js , mongodb, JWT token , heroku Icon   </p>
                                <p className='d-flex justify-content-between'>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://ak-comput-parts-house.firebaseapp.com/" target="_blank">Live Demo</a>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://github.com/akjilani120/ak-computer-parts-client-side" target="_blank">client github code</a>
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

export default ComputerParts;