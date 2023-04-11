import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
export function Menu(){
    return(
        <>
       
          <nav class="navbar navbar-expand-lg menubgs navbar-dark justify-content-center bg-dark" >
            <div class="container-fluid">
               <Link to='/' class="navbar-brand">Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item"> <Link to='/Hello' class="nav-link active">Hello</Link>  </li>
                  <li class="nav-item"><Link to='/Congrats' class="nav-link active">Congrats</Link></li>
                  <li class="nav-item"><Link to='/League' class="nav-link active">League</Link></li>
                  <li class="nav-item"><Link to='/Social' class="nav-link active">Social</Link></li>
                  <li class="nav-item"><Link to='/Notification' class="nav-link active">Notification</Link></li>
                  <li class="nav-item"> <Link to='/Login' class="nav-link active">Login</Link></li>
                  <li class="nav-item"><Link to='/Technology' class="nav-link active">Technology</Link></li>
                  <li class="nav-item"><Link to='/Fruits' class="nav-link active">Fruits</Link></li>
                  <li class="nav-item"><Link to='/Feedback' class="nav-link active">Feedback</Link></li>
                  <li class="nav-item"><Link to='/DateFunction' class="nav-link active">DateFunction</Link></li>
                  <li class="nav-item"><Link to='/Hooks' class="nav-link active">Hooks</Link></li>
                  <li class="nav-item"><Link to='/Product' class="nav-link active">Product</Link>
                  
                  </li>
                </ul>
             
              </div>
            </div>
          </nav>

        </>
    );

    
}