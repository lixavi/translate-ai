import React from "react";
import './About.css'
import Navbar from "../NavBar/Navbar";
const About=()=>{
return(
<>
<Navbar/>
<section className="Header">
    <div className="container">
      <div className="sub-header">
        <h1 className="fw-bold">About</h1>
        <div className='mt-1'>
        <a href="Home">Home<b>/</b></a>
        <a href="Pages">Pages <b>/</b></a>
        <a href="Events">Events</a>
        </div>
      </div>
    </div>
    </section>
    <section class="sec7 box1">
      <div class="container sec7-cont pt-0">
        <div class="div1-sec6">
          <div class="span1"></div>
          <div class="span2"></div>
          <p class="sec5-top">OUR Team</p>
          <div class="span2"></div>
          <div class="span1"></div>
        </div>
        <div class="div2-sec7">
          <h1 class="h1-sec7">Experienced Core Members</h1>
        </div>
        <div class="div3-sec7 ">
          <div class="container-fluid">
            <div class="row gy-3">
              <div class="col-md-4">
                <div class="card-sec7 shadow">
                  <img
                    src="Images/Awab.jpeg"
                    alt=""
                    class="img-sec7"
                  />
                  <h4 className='fw-bold mt-2'>
                    Web Developer
                  </h4>
                  <p>president</p>
                  <div class="sec7-card-line"></div>
                  <div class="icons-div">
                    <div>
                      <a href="/#" class="icons-sec7">
                        <i
                          class="fab fa-facebook-f"
                          aria-hidden="true"
                          style={{color: 'black'}}
                        ></i>
                      </a>
                    </div>
                    <div>
                      <a href="/#" class="icons-sec7">
                        <i
                          class="fab fa-instagram"
                          aria-hidden="true"
                          style={{color: 'black'}}
                        ></i>
                      </a>
                    </div>
                    <div>
                      <a href="/#" class="icons-sec7">
                        <i
                          class="fab fa-linkedin-in"
                          aria-hidden="true"
                          style={{color: 'black'}}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-sec7 shadow">
                  <img
                    src="Images/Awab.jpeg"
                    alt=""
                    class="img-sec7"
                  />
                 <h4 className='fw-bold mt-2'>
                    Web Developer
                  </h4>
                  <p>president</p>
                  <div class="sec7-card-line"></div>
                  <div class="icons-div">
                    <div>
                      <a href="/" class="icons-sec7">
                        <i
                          class="fab fa-facebook-f"
                          aria-hidden="true"
                          style={{color: 'black'}}
                        ></i>
                      </a>
                    </div>
                    <div>
                      <a href="/" class="icons-sec7">
                        <i
                          class="fab fa-instagram"
                          aria-hidden="true"
                          style={{color: 'black'}}
                        ></i>
                      </a>
                    </div>
                    <div>
                      <a href="/" class="icons-sec7">
                        <i
                          class="fab fa-linkedin-in"
                          aria-hidden="true"
                          style={{color: 'black'}}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-sec7 shadow">
                  <img
                   src="Images/Awab.jpeg"
                    alt=""
                    class="img-sec7"
                  />
                <h4 className='fw-bold mt-2'>
                    Web Developer
                  </h4>
                  <p>president</p>
                  <div class="sec7-card-line"></div>
                  <div class="icons-div">
                    <div>
                      <a href="/" class="icons-sec7">
                        <i
                          class="fab fa-facebook-f"
                          aria-hidden="true"
                          style={{color: 'black'}}
                        ></i>
                      </a>
                    </div>
                    <div>
                      <a href="/" class="icons-sec7">
                        <i
                          class="fab fa-instagram"
                          aria-hidden="true"
                          style={{color: 'black'}}
                        ></i>
                      </a>
                    </div>
                    <div>
                      <a href="/#" class="icons-sec7">
                        <i
                          class="fab fa-linkedin-in"
                          aria-hidden="true"
                          style={{color:'black'}}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
)
}
export default About;