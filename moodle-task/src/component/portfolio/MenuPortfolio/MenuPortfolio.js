import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MenuPortfolio/MenuPortfolio.css';
export function MenuPortfolio(){
    return(
        <>
     


            <nav class="navbar navbar-expand-lg menubgs navbar-dark justify-content-center">
            <div class="container-fluid ">
            
               <Link to='/' class="navbar-brand fs-1 ">MA</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse dflex justify-content-center" id="navbarSupportedContent">

                <ul class="navbar-nav">
                  <li class="nav-item"><Link to='/Home' class="nav-link active">Home</Link></li>
                  <li class="nav-item"><Link to='/About' class="nav-link active">About</Link></li>
                  <li class="nav-item"><Link to='/Skills' class="nav-link active">Skills</Link></li>
                  <li class="nav-item"><Link to='/Certification' class="nav-link active">Accomplishments</Link></li>
                  <li class="nav-item"><Link to='/Education' class="nav-link active">Education</Link></li>
                  <li class="nav-item"><Link to='/Moodle' class="nav-link active">Works</Link></li>
                  <li class="nav-item"><Link to='/Contact' class="nav-link active">Contact</Link></li>
                 
                 
                </ul>
             
              </div>
            </div>
          </nav>



        </>
    );

}