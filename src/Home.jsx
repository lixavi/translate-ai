import React from 'react'
import Navbar from './NavBar/Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Navbar/>

    <section class="sec1  justify-content-middle" style={{color:'white'}}> 

<div class="container-fluid p-5" >

  <div class="row">
    <div className="col-md-6 ">
      <h1 class="display-1 height-cyberoide fw-bold">
       AUCIS
      </h1>

        <p className='lead pt-4 pb-4 hide' > <span className='text-light fw-bold' >AUCIS</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quae voluptatem saepe ducimus tempora, delectus corporis alias consequuntur officiis cumque neque voluptate minus. Iusto laboriosam nisi nemo dolore nihil nam?</p>
        <Link class="btn btn-contact shadow btn-lg "  to="/contact" role="button">Contact Us</Link>
    </div>
    <div className="col-md-6">
      <img src="Images/header.png" style={{maxWidth:'100%'}}  alt="" />
    </div>
  </div>


   

</div>

</section>
    <section class="sec2 box1">
      <div class="container">
        <div class="row gy-3 justify-content-center">
          <div class="col-lg-4 col-md-6 ">
            <div class="cards">
              <div class="icons-sec2 ">
                <i
                  class="fa-solid fa-3x fa-building-ngo text-secondary mb-4 fa-sec2"
                ></i>
              </div>
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                dolorem, distinctio explicabo ad quasi tempore vero dignissimos
                tenetur aliquam eum.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="cards">
              <div class="icons-sec2">
                <i
                  class="fa-solid fa-3x fa-circle-nodes text-secondary mb-4 fa-sec2"
                ></i>
              </div>
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                dolorem, distinctio explicabo ad quasi tempore vero dignissimos
                tenetur aliquam eum.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="cards">
              <div class="icons-sec2">
                <i
                  class="fa fa-3x fa-laptop-code text-secondary mb-4 fa-sec2"
                  aria-hidden="true"
                ></i>
              </div>
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                dolorem, distinctio explicabo ad quasi tempore vero dignissimos
                tenetur aliquam eum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sec3 box1">
      <div class="container pt-0" id="container-3">
        <div class="row">
          <div class="col-lg-8">
            <div class="div1">
              <h1 class="sec3-h1">Lorem ipsum dolor sit amet consectetur</h1>
              <p class="sec3-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam
                eveniet totam qui repellendus quasi repellat quis, consequuntur
                esse, dolorem adipisci. Deserunt quae ab corporis possimus nemo!
                Eaque, asperiores quod!
              </p>
            </div>
          </div>
          <div
            class="col-lg-4 d-flex align-items-center justify-content-center"
          >
            <div class="div2-video">
              <video  controls width="100%">
                <source src="images/about.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="4 box1">
      <div class="container">
        <div class="row gy-3">
          <div class="col-lg-3 col-sm-6">
            <div class="card-sec4">
              <i class="fa-solid fa-3x fa-handshake mb-4"></i>
              <p class="para-sec4">Commitment</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="card-sec4">
              <i class="fa-solid fa-3x fa-lightbulb mb-4"></i>
              <p class="para-sec4">Innovation</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="card-sec4">
              <i class="fa-solid fa-3x fa-people-group mb-4"></i>
              <p class="para-sec4">Team Work</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="card-sec4">
              <i class="fa-solid fa-3x fa-bolt mb-4"></i>
              <p class="para-sec4">Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sec5 box1">
      <div class="container sec5-container" style={{flexDirection: 'column'}}>
        <div class="div1-sec5">
          <div class="span1"></div>
          <div class="span2"></div>
          <p class="sec5-top">OUR ACHIEVEMENTS</p>
          <div class="span2"></div>
          <div class="span1"></div>
        </div>
        <div class="div2-sec5">
          <h1 class="h1-sec5 text-center mb-4">We Help People Grow</h1>
        </div>
        <div class="div3-sec5">
          <div class="card-sec5">
            <i class="fa-solid fa-medal fa-3x mb-3"></i>
            <h1 class="h1-sec5-card">3</h1>
            <p class="sec5-card-para">Experience</p>
          </div>
          <div class="card-sec5">
            <i class="fa-solid fa-people-group fa-3x mb-3"></i>
            <h1 class="h1-sec5-card">100</h1>
            <p class="sec5-card-para">Members</p>
          </div>
          <div class="card-sec5">
            <i class="fa fa-address-book fa-3x mb-3" aria-hidden="true"></i>
            <h1 class="h1-sec5-card">10</h1>
            <p class="sec5-card-para">Clients</p>
          </div>
          <div class="card-sec5">
            <i class="fa-solid fa-magic-wand-sparkles fa-3x mb-3"></i>
            <h1 class="h1-sec5-card">30</h1>
            <p class="sec5-card-para">Events</p>
          </div>
        </div>
      </div>
    </section>
    <section class="sec6 box1">
      <div class="container sec6-cont align-items-center pb-0">
        <div class="div1-sec6">
          <div class="span1"></div>
          <div class="span2"></div>
          <p class="sec5-top">OUR MENTOR</p>
          <div class="span2"></div>
          <div class="span1"></div>
        </div>
        <div class="div2-sec6">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="img-sec6">
                  <img
                    src="Images/Awab.jpeg"
                    alt="mentor pic"
                    class="image-sec6 w-100"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="">
                  <h1 class="text-lg">
                    Lorem ipsum dolor sit amet consectetur.
                  </h1>
                  <p style={{padding:'10px'}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus enim porro quisquam quod dolores perspiciatis,
                    officiis, itaque, nihil accusamus maxime iure consectetur.
                    Excepturi, laboriosam fugiat quia dicta repudiandae ullam
                    corporis eum cupiditate est ipsam sequi quasi impedit. Quod,
                    fuga vitae. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Nisi maiores assumenda, quo earum
                    reiciendis accusamus adipisci quae aut error hic!
                  </p>
                  <p style={{padding: '5px'}}>- Lorem, ipsum dolor</p>
                </div>
              </div>
            </div>
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

export default Home