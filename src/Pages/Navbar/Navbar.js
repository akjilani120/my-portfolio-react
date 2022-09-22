import React from 'react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [color , setColor] = useState(false)
    const chanceColor =() =>{
        if(window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", chanceColor)
    return (
        <div className={color ? "navbar-main navbar-main-color" : "navbar-main" }>
            <nav class="navbar navbar-expand-lg   w-100 px-3">
                  
                        <h5 class="brand-logo "  href="/" >Ak Jilani</h5>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="  navigation-items-link"  href="">About </a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class=" navigation-items-link" href="#">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class=" navigation-items-link" href="#">Service</a>
                                </li>
                                <li class="nav-item">
                                    <a class=" navigation-items-link" href="#">PORTFOLIO</a>
                                </li>
                                <li class="nav-item">
                                    <a class=" navigation-items-link" href="#">CONTACT</a>
                                </li>
                                <li class="nav-item">
                                    <a class=" navigation-items-link" href="#">BLOG</a>
                                </li>
                                <li class="nav-item resumi-list">
                                    <a class="resumi-item navigation-items-link" href="https://drive.google.com/file/d/1dWIs_e7iO_RRWuAl79NKWNTBcg2Fie9H/view?usp=sharing" target="blank">Resume</a>
                                </li>
                                
                            </ul>

                        </div>
                   
                </nav>
        </div>
    );
};

export default Navbar;