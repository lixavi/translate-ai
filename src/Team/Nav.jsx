import React from 'react'
import './Team.css'
const Nav = ({filterItem,menuList}) => {
  return (
   <>
   <div className="container">
    <nav className="navbar-team" >
            <div className="row">
            {   
                menuList.map((curElem)=>{
                   return (
                    <div className="col-md-2 mt-2">
                   <button className="btn " style={{background:'var(--buttons)', width:'10rem'}} onClick={()=>filterItem(curElem)}>{curElem}</button>        
                   </div>
                )})
            }
           
        </div>
    </nav>
    </div>
   </>
  )
}

export default Nav;
