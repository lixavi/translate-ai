import React, { useState } from 'react'
import Navbar from '../NavBar/Navbar'
import Nav from './Nav'
import Menu from '../Api/EventsApi'
import './Events.css'
import EventCard from './EventCard'
const uniqueList=[
  ...new Set(
  Menu.map((curElem)=>{
   return curElem.category;
  })
  ),
  "All"
]

const Events = () => {
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
   <section className="container text-center mt-5">
   <p class="section-title text-secondary justify-content-center"><span></span>Our Events<span></span></p>
   <h1 class="text-center mb-5">Recently Completed Events</h1>
   <Nav filterItem={filteritems} menuList={menuList}/>
   <EventCard MenuData={MenuData}/>
   </section>
   </> 
  )
}

export default Events;