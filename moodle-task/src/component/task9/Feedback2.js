
import React from "react";
import '../task9/Feedback.css';
import '../task8/Fruits';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import heart from '../task9/heart.jpeg';
// import { useState } from "react";


export function Feedback2(){
    // const [mangoes,setMangoes] = useState(0);
    // const [bananas,setBananas] = useState(0);
    return(

        <>
          <div class="container-fluid row cbgfs mx-auto">
            <div class="col-lg-4"></div>
            <div class="col-lg-4 container-fluid row  bg-white mbgf rounded-3 py-5 mt-5 mb-5 mx-auto " >

                
                <img src={heart} alt="" className=" container-fluid "></img>
                <p  class="fw-bold text-center fs-3">ThankYou</p>
                <p  class=" text-center fs-6">We sill use your feedback to improve our customer Service</p>

            </div>
            <div class="col-lg-4"></div>
                
              
        </div>
				        
        
             
        </>
    );
}