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
        <section>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div class="container">
            <div class="row px-3 px-lg-0">
                <div class="col-12">
                    <div class="contact-title">
                        <h1>Contact Me</h1>
                    </div>
                </div>
                <div class="col-8 mx-auto" >
                    <div class="form-items">
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
                        <textarea name="message" class="form-control" id="" cols="30" rows="6"></textarea>
                         <div className='text-center'>
                         <input class="btn btn-warning px-5 py-2 text-white fw-bold mt-3" type="submit" value="Send"/>
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