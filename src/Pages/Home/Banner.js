import React from 'react';
import myImg from '../img/myimg1.jpg'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <section class="banner-sec ">
            <div class="">
                <div class="banner">
                    <div class="banner-title-side " >
                        <div class="banner-title-part py-5">
                            <h5 class="banner-hello"> Hello I'm</h5>
                            <h1 class="banner-name">Abdul Kader Jilani</h1>                            
                            <h1 className='fw-bolder display-4'>  <Typewriter
                                options={{
                                    strings: ['Junior  Web Developer', 'Junior MERN Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            </h1>
                            <h1 class="banner-about" id="example"></h1>
                            <div class="resume-file">
                                <a class="resume-tag" target="_blank"
                                    href="https://drive.google.com/file/d/1wp8f_RR_5QujfytNS3pMh5ZDJswnymRH/view?usp=sharing">Download
                                    Resume</a>
                            </div>
                        </div>
                    </div>
                   
                    <div class="banner-img-side" >  
                        <img class="w-100" src={myImg} alt="profile image" />
                       
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Banner;