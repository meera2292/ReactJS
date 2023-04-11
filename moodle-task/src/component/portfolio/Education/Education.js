
import React from "react";
import '../Education/Education.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import clg from '../Education/KMCT-College-of-Engineering-for-Women-Kozhikode.jpg';
import school from '../Education/Talent Public School-Campus View.jpg';

export function Education(){

    return(

        <>
        <div class="container-fluid mx-auto aboutdive ">
            <div class="col-lg-8 container-fluid  rounded-3 py-5 cdive">
            <p class="justify-content-center text-light fw-bold fs-1 headp">Education</p>
            <br></br>
            <div class="col-lg-12">
            <div class="col-lg-6 row fan">
                <div class="col-lg-8">
                        <p class="justify-content-center text-info fw-bold fs-5 mainp">B-Tech in Computer Science And Engineering 2013</p>
                        <p class="mainp">KMCT College Of Engineering For Women</p>
                        <p class="mainp">Calicut University-74%</p>
            
                </div>
                <div class="col-lg-4">
                <img src={clg} class="img-thumbnail schoolcolg" alt="..."></img>
                </div>
           
            </div>
            <br></br>
            <div class="col-lg-6 row fan">
            <div class="col-lg-8">
                        <p class="justify-content-center text-info fw-bold fs-5 mainp">Higher Secondary Certificate 2009</p>
                        <p class="mainp">Talent Public School</p>
                        <p class="mainp">77% (Science Stream)</p>
            
                </div>
                <div class="col-lg-4">
                <img src={school} class="img-thumbnail  schoolcolg" alt="..."></img>
                </div>
           
            </div>
            <br></br>
            <div class="col-lg-6 row fan">
            <div class="col-lg-8">
                        <p class="justify-content-center text-info fw-bold fs-5 mainp">Secondary School Leaving Certificate 2007</p>
                        <p class="mainp">Talent Public School</p>
                        <p class="mainp">78%</p>
            
                </div>
                <div class="col-lg-4">
                <img src={school} class="img-thumbnail  schoolcolg" alt="..."></img>
                </div>
           
            </div>
            </div>
            
          

         
            
              
        </div>
        </div>
   
       
        
        </>
    );
}