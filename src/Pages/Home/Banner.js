import React from 'react';
import myImg from '../img/myimg1.jpg'
import Typewriter from 'typewriter-effect';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Pertice from '../Component/Pertice';
const Banner = () => {
   
    return (
        <section class="banner-sec " id='banner'>
            <Pertice/>
            <div class=" banner-main">   
                       
                <div class="banner">
                   
                    <div class="banner-title-side d-flex align-items-center" >
                      <div className='social-icon-part'>
                        <ul>
                            <li><a target="_blank" href="https://github.com/akjilani120"><svg className="social-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/abdul-kader-jilani-3b8b3a1b9/"><svg className="social-icon" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z"></path><path d="M1 6h3v9h-3v-9z"></path><path d="M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></svg></a></li>
                            <li><a target="_blank" href=""><svg className="social-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/abdulkader.jilani.7393/"><svg className="social-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></a></li>
                        </ul>
                      </div>
                        <div class="banner-title-part py-5 ms-3 ">
                            <h1 className='hello-title text-start'>Hello , I'm</h1>
                            <h1 class="banner-name text-start mb-0">Abdul Kader Jilani</h1>
                            <h1 className='hello-title text-start m-0 p-0'>Full Stack Web Developer</h1>
                            <h1 className='job-title text-start '>  <Typewriter className=" "
                                options={{
                                    strings: [' Web Developer', ' MERN Stack Developer', 'Frontend Developer', 'ReactJS Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            </h1>
                           
                           <div className='text-start mt-5 resume-file-part'>
                            <a class="resume-tag"  target="_blank"
                                    href="https://drive.google.com/file/d/1dWIs_e7iO_RRWuAl79NKWNTBcg2Fie9H/view?usp=sharing">Download
                                    Resume</a>
                           <button className=''>About Me</button>
                           </div>
                           
                        </div>
                    </div>

                   
                </div>
            </div>
        </section>
    );
};

export default Banner;