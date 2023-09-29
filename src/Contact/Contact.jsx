import React from 'react'
import './Contact.css'
import Navbar from '../NavBar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react'; //emailjs react website template
import emailjs from "emailjs-com";
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wruolwk', 'template_zg5u38k', e.target, 'u-XYTvIbVtz2HVSiT')
    // e.target.reset();
  };

  const notify = () => toast("Succesfully submit the form!");
  return (
    <>
      <Navbar />
      <section className="contact box1" >
      <div className='contactus-section'>
        <div className="contact-us container">
          <div className="test1">
            <div className="text-center">
              <h2 className="main-heading fw-bold">
                Contact Us
              </h2>
            </div>
            <div className="col-lg-12 ">
              <div className="row">


                {/* right side contact form  */}
                <div className="col-md-12">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="contact-input-feild">
                        <label htmlFor="" className="ml-1">Name*</label>
                        <input
                          type="text"
                          name="name"
                          id="contact-input-height"
                          className="form-control  contact-input-feild-sub"
                          placeholder="Name"
                          required

                        />
                      </div>


                    </div>

                    <div className="row">
                      <div className="contact-input-feild">
                        <label htmlFor="" className="ml-1">Contact No.*</label>
                        <input type="tel" className="form-control  contact-input-feild-sub" id="contact-input-height" name="contactno" placeholder="Contact Number" maxLength={11} minLength={11} required></input>
                      </div>
                      <div className="contact-input-feild">
                        <label htmlFor="" className="ml-1">Email*</label>

                        <input
                          type="email"
                          name="email"
                          id="contact-input-height"
                          className="form-control  contact-input-feild-sub"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className=" ">
                        <label htmlFor="" className="ml-1">Select Society*</label>

                        <select name="service" class="form-select contact-input-feild-sub" aria-label="Default select example" required>
                          <option selected>Open this select menu</option>
                          <option value="Technical Recruitment">Bits&Bytes</option>
                          <option value="DevSecOps">Shaoor Society</option>
                          <option value="Content Writing"> Islamic Society</option>
                          <option value="Software Quality Assurance"> Blood Donor</option>
                        </select>
                      </div>
                    </div>


                    <button
                      type="submit"
                      className="btn btn-warning shadow btn-lg mt-4 mb-5"
                      onClick={notify}
                    >
                      Submit
                    </button>
                    <ToastContainer />

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );


}

export default Contact;