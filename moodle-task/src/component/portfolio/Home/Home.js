
import React from "react";
import '../Home/Home.css';
import '../Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import log from '../Home/pl-25368 aa.jpg';
import TextTyper from 'text-type-animation-effect-react';


export function Home(){

    return(

        <>
            <div class="container-fluid row maindiv mx-auto">
              <div class="col-lg-3">
              <div class="centered">
                          <div class="">
                      <p class="fs-2 text-warning letters">C</p>
                          </div>

                          <div class="">
                      <p class="fs-2 text-success letters">O</p>
                          </div>

                          <div class="">
                      <p class="fs-2 fs-2 text-danger letters">D</p>
                          </div>
                       
                          <div class="">
                          <p class="fs-2 text-info letters">E</p>
                          </div>

                          <div class="">
                          <p class="fs-2 text-warning letters">C</p>
                          </div>
                        
                          <div class="">
                          <p class="fs-2 text-danger letters">R</p>
                          </div>
                        
                          <div class="">
                          <p class="fs-2 text-success letters">A</p>
                          </div>
                        
                          <div class="">
                          <p class="fs-2 text-info letters">Z</p>
                          </div>
                          <div class="">
                          <p class="fs-2 text-danger letters">Y</p>
                          </div>
                        
                        
                          
                          
              </div>    
              </div>
              <div class="col-lg-6 container-fluid text-center ms-3  py-5">
               <div class="py-5 ">
                <img src={log} class="col-lg-2 col-3 col-md-2 rounded-circle img-fluid" alt="..."  ></img>
                </div>

                <div class=" col-lg-10 container-fluid text-center">
               
                        <h4 class="text-warning fw-bold pname"><TextTyper text="Meera Antony" interval={500} Markup={"h4"} /></h4>
                        
                        <h5 class="text-white mainpara">Certified MERN Stack Developer</h5>
                        
                        <h6 class="text-success">@crazy in coding</h6>
                       
                        
         
                </div>


              </div>

              <div class="col-lg-3">

            

              </div>

              




            </div>
            
        
           
       



        </>
    );
}