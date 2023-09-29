import React from 'react'
import Lightroom from 'react-lightbox-gallery'
import './Gallery.css'
import Navbar from '../NavBar/Navbar'
const Gallery = () => {
  
    var images = [
      {
        src: "Images/img1.jpg",
        desc: 'Person wearing shoes',
        sub: 'Gift Habeshaw'
      },
      {
        src: "Images/img2.jpg",
        desc: 'Blonde woman wearing sunglasses smiling at the camera ',
        sub: 'Dmitriy Frantsev'
      },
      {
        src: "Images/img3.jpg",
        desc: 'Blonde woman wearing sunglasses smiling at the camera ',
        sub: 'Dmitriy Frantsev'
      }
    ]
    var settings = {
      columnCount:{
        default:5,
        mobile:3,
        tab:4
      },
      mode: 'dark'
    }
    return (
      <>
      <Navbar/>
         <div className='container mt-5'>
          <h1 className='text-center'>Gallery</h1>
        <div className="row">
        <Lightroom images={images} settings={settings} />
      </div>
      </div>  
      </>
    )
  
}


export default Gallery