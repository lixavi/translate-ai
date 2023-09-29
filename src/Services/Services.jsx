import React from 'react'
import './Services.css'
import Navbar from '../NavBar/Navbar'
import Nav from './Nav'
import ProjectsApi from '../Api/ProjectsApi'
import ProjectCards from './ProjectCards'
import { useState } from 'react'

const uniqueList=[
  ...new Set(
    ProjectsApi.map((curElem)=>{
   return curElem.category;
  })
  ),
  "All"
]


const Services = () => {
  const[MenuData,setMenuData]=useState(ProjectsApi);
  const[menuList]=useState(uniqueList);
  const filteritems=(category)=>{
  if(category==="All"){
    setMenuData(ProjectsApi);
    return;
  }
  const updateList=ProjectsApi.filter((curElem)=>{
  return curElem.category===category;
  })
  setMenuData(updateList);
  };
  return (
    <>
    <Navbar/>
    <section className="Header">
    <div className="container">
      <div className="sub-header">
        <h1 className='fw-bold'>Services</h1>
        <div className='mt-1'>
        <a href="Home">Home <b>/</b></a>
        <a href="Pages">Pages <b>/</b></a>
        <a href="Events">Events</a>
        </div>
      </div>
    </div>
    </section>
    <section className="services-cards">
    <div class="header">
    <h1>Services</h1>
    {/* <h1>Powered by AUCIS</h1> */}
  </div>
  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Web Development</h2>
      <p>Monitors activity to identify project roadblocks</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div class="box red">
      <h2>Graphic Designing</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down blue">
      <h2>Photography</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <h2>Content Writing</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
  </div>
    </section>
    <section className="container project-section text-center ">
      <p>-- OUR PROJECTS --</p>
      <h1 className='fw-bold'>Recently Completed Projects</h1>
      <Nav filterItem={filteritems} menuList={menuList}/>
      <ProjectCards MenuData={MenuData}/>
    </section>
    </>
  )
}

export default Services