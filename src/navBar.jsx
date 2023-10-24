import React, { useState, useEffect } from 'react';
import './navBar.css'
import { Link } from 'react-router-dom';

//import './navBar.css'
const NavBar = ()=>{
const [click,setClick] = useState(false);


const handleClick = ()=>{

	setClick(!click);
}
const close = ()=>{
	setClick(false);
}


return(<>

<nav id='menu' class="navbar navbar-expand-lg navbar-light"  >
  <div class="container-fluid">
    <a class="navbar-brand " href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav " style = {{fontWeight:'bold'}}>
        <li class="nav-item " >
          <a class="nav-link ho" aria-current="page" href="#" style = {{frontWeight:'bold'}} ><i class="bi bi-house-check-fill "></i>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ho" > <i class="bi bi-pc-display-horizontal"></i> My Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ho" > <i class="bi bi-person-lines-fill"></i>About Me</a>
        </li>
         <li class="nav-item">
          <a class="nav-link ho" href="#" ><i class="fa fa-graduation-cap" style={{fontSize:"17px"}}></i>Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ho" href="#" > <i class="bi bi-person-rolodex"></i>Contact</a>
        </li>
        
        
        <li class="nav-item">
          <a class="nav-link" href="#" ></a>
        </li>
       



      </ul>
    </div>
  </div>
</nav>






	</>)
}

export default NavBar;