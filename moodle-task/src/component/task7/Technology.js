import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import'./Technology.css';

import img1 from '../task7/datasc.jpeg';
import img2 from '../task7/vr.jpeg';
import img3 from '../task7/ml.jpeg';
import img4 from '../task7/last.jpeg';


export function Technology(){
    return(

        <>

        <div class="container bg-black">
          <div class="col-lg-12 container-fluid ">
          <p class="text-center  text-white fw-bold fs-2">Learn 4.0 Technologies</p>
          <p class="text-center  text-white  fs-5">Learning 4.0 focuses on the transfer of knowledge using all digital learning media and specially aligned training objectives. The name is derived from the fourth industrial revolution and stands for the intelligent networking of machines and processes with the help of information and communication technology.</p>
          
         </div>
         
         <div>
        
         <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      
      <div class="card-body bg-white text-black">
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">Data scientists determine the questions their team should be asking and figure out how to answer those questions using data. They often develop predictive models for theorizing and forecasting.</p>
        <p><img src={img1} class="imgsiz float-end" alt=""></img></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body bg-white text-black">
        <h5 class="card-title">Iot Developer</h5>
        <p class="card-text">Before we can explore the specific responsibilities of an IoT developer, it’s first important to understand exactly what IoT is. The Internet of Things (IoT) refers to a network of internet-connected objects that are built to collect</p>
        <p><img src={img4} class="imgsiz float-end" alt=""></img></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
   
      <div class="card-body bg-white text-black ">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <p><img src={img2} class="imgsiz float-end" alt=""></img></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    
      <div class="card-body bg-white text-black">
        <h5 class="card-title">ML Engineer</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p><img src={img3} class="imgsiz float-end" alt=""></img></p>
      </div>
    </div>
  </div>
</div>




         </div>

         


           

         </div>

      

        </>

    );

}
