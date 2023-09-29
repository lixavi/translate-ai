import React from "react";
import Home from './Home'
import Contact from './Contact/Contact.jsx'
import About from './About/About.jsx'
import Services from './Services/Services.jsx'
import Events from './Events/Events.jsx'
import Navbar from "./NavBar/Navbar";
import PagenotFound from './PagenotFound'
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";
import Team from "./Team/Team";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
     <Route path="/"  element={<Navbar/>}/>
     <Route path="/about"  element={<About/>}/>
     <Route  index  element={<Home/>}/>
     <Route path='/contact' element={<Contact/>} />
     <Route path='/services' element={<Services/>} />
     <Route path='/events' element={<Events/>} />
     <Route path='/teams' element={<Team/>} />
     <Route path='/gallery' element={<Gallery/>} />
     <Route path='*' element={<PagenotFound />} />
     </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
