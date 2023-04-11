import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
export function Menu(){
    return(
        <>
       
          <nav class="navbar navbar-expand-lg bg-light ustify-content-center" style="background-color: #e3f2fd;">
            <div class="container-fluid">
               <Link to='/' class="navbar-brand">UserDetails</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"> <Link to='/Login' class="nav-link active">SignIn</Link>  </li>
                  <li class="nav-item"><Link to='/Register' class="nav-link active">Sign Up</Link></li>
                  
                </ul>
             
              </div>
            </div>
          </nav>

        </>
    );

    
}