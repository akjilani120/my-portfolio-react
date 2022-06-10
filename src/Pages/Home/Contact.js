import React from 'react';

const Contact = () => {
    return (
        <section>
        <div class="container">
            <div class="row px-3 px-lg-0">
                <div class="col-12">
                    <div class="contact-title">
                        <h1>Contact Me</h1>
                    </div>
                </div>
                <div class="col-8 mx-auto" >
                    <div class="form-items">
                        <form id="contact-form">
                        <input class="form-control " type="hidden" name="contact_number" />
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
    </section>
    );
};

export default Contact;