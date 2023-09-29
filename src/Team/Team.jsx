import React, { useState } from 'react'
import './Team.css'
import Nav from './Nav'
import Menu from '../Api/TeamApi'
import Navbar from '../NavBar/Navbar'
import TeamCard from './TeamCard'
const uniqueList=[
  ...new Set(
  Menu.map((curElem)=>{
   return curElem.category;
  })
  ),
  "All"
]
const Team = () => {
  const[MenuData,setMenuData]=useState(Menu);
  const[menuList]=useState(uniqueList);
  const filteritems=(category)=>{
  if(category==="All"){
    setMenuData(Menu);
    return;
  }
  const updateList=Menu.filter((curElem)=>{
  return curElem.category===category;
  })
  setMenuData(updateList);
  };
  return (
   <>
   <Navbar/>
   <section className="container text-center ">
   <h1 class="fw-bold  text-center mt-5 mb-5">Our Team</h1>
   <Nav filterItem={filteritems} menuList={menuList}/>
   <TeamCard MenuData={MenuData}/>
   </section>
   </> 
  )
}

export default Team