import React from 'react';
import img1 from '../img/laptop-1.png'
import img2 from '../img/laptop-2.png'
import img3 from '../img/laptop-3.1.png'
import img4 from '../img/laptop-4.png'
import img5 from '../img/laptop-5.png'
import img6 from '../img/laptop-6.png'
const Laptop = () => {
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
                                <h5 className='fw-bold'>Website Name : Ak laptop shop</h5>
                                <ul>
                                    <p> <b> Description : </b> </p>
                                    <li>This is an ecommerce web site. This website is designed to update product.</li>
                                    <li>If you click on the update button of the product, if you are logged in, you will go to the next route. Then it will take you to the login page.</li>
                                    <li>If you are logged in, you will go to the next page and if you add the quantity and click on the submit button, the quantity will increase.</li>
                                    <li>Clicking on the ‍ show  More products button at the bottom of that page will show many more products.</li>
                                    <li>After visiting that page you will see many products. There is a delete button in the products and if you click on it, those products will be deleted.</li>
                                    <li>There is an ad product button at the bottom of the page. Click there to add new products.</li>
                                    <li>You can see the products that you are adding yourself in my item on Nevbar.</li>
                                </ul>
                                <p><b>Technology : </b> Html , css boostrap, react , react router, firebase , react toast jwt , node.js , express.js , mongodb,  </p>
                                <p className='d-flex justify-content-between'>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://ak-laptop-store-main.web.app/" target="_blank">Live Demo</a>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://github.com/akjilani120/ak-laptop-store-client" target="_blank">client github code</a>
                                    <a class="btn btn-danger px-4 py-2 text-white fw-bold" href="https://github.com/akjilani120/ak-laptop-store-server" target="_blank">Server github code</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laptop;