import React from 'react'
import whiteLogo from '../asserts/whiteLogo.jpg'
import '../CSS/NavBar.css';


export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
            
            <img class="navbar-brand" src={whiteLogo} alt='logo'></img>
            <a class="navbar-brand" href="#">SERVICES</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">SERVICES</a>
                <a class="nav-link active" href="#">ABOUT US</a>
                <a class="nav-link active" href="#">CONTACT US</a>
                <a class="nav-link active" aria-disabled="true">CAREERS</a>
                </div>
            </div>

            </div>
        </nav>
    </div>
   
  )
}
export default NavBar;