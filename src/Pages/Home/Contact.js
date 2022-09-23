import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { AnimationOnScroll } from 'react-animation-on-scroll';
const Contact = () => {
    const form = useRef();
   
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hkumgow', 'template_nd3xbpg', form.current, 'jURxjrUHMky1qUUlk')
          .then((result) => {
              toast(result.text , "Success Your message");
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id='contact'>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div class="px-3">
            <div class="row px-3 px-lg-0">
                <div class="col-12">
                    <div class="contact-title">
                        <h1>Hire Me.</h1>
                        <p>I am available for web Devepoment Connect with me via phone: +8801795849068 or email:  abdulkaderjilani120@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card contact-card p-1">
                        <img src="https://forhadmia.netlify.app/static/media/Business.677841f781c570656fe2.jpg" alt="" />
                        <div className="card-body">
                            <h3>Abdul Kader Jilani</h3>
                            <h6 className='contact-card-job-title'>Web Developer ( MERN Stack )</h6>
                            <p>I am a junior web developer. Are you looking for a hardworking person? I am here to help you. Thanks</p>
                           <h6>  abdulkaderjilani120@gmail.com</h6>                           
                        </div>
                    </div>
                </div>
                <div class="col-md-8 mx-auto mt-3 mt-md-0" >
                    <div class="form-items pt-5 pb-3 px-5">
                        <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <label>Phone Number</label>
                        <input class="form-control " type="number" name="contact_number" />
                        <div class="mt-3">
                            <label>Name</label>
                            <input class="form-control " type="text" name="user_name" />
                        </div>
                        <div class="my-4">
                            <label>Email</label>
                            <input class="form-control" type="email" name="user_email"/>
                        </div>
                        <label>Message</label>
                        <textarea name="message" class="form-control" id="" cols="30" rows="3"></textarea>
                         <div className=''>
                         <input class=" contact-submit px-5 py-2 text-white fw-bold mt-3" type="submit" value="Message"/>
                         </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
        <ToastContainer />
        </AnimationOnScroll>
    </section>
    );
};

export default Contact;