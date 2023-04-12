
import React from "react";
import '../task9/Feedback.css';
import '../task8/Fruits';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import happy from '../task9/happy.png';
import none from '../task9/none.jpeg';
import sad from '../task9/sad.jpeg';
import { Link } from "react-router-dom";
// import { useState } from "react";


export function Feedback(){
    // const [mangoes,setMangoes] = useState(0);
    // const [bananas,setBananas] = useState(0);
    return(

        <>

        <div class="container-fluid row border mbgf  mx-auto">
        <h1 className="text-center">How satisfied are you with our customer service</h1>
        
            <div class="col-lg-4 container-fluid  bg-white justify-content-center rounded-3 py-5 mt-5 mb-5">
             <div className=" row">

            <div class="col-lg-4 col-sm-6 text-center ">
               <img src={sad} alt="" className=" container-fluid " height="100px" width="100px"></img>
               <p  class="fw-bold fs-3">Sad</p>
            </div>
            
            <div class="col-lg-4 col-sm-6 text-center ">
               <img src={none} alt="" className=" container-fluid" height="100px" width="100px"></img>
               <p class="fw-bold fs-3">None</p>
            </div>

            <div class="col-lg-4 col-sm-6 text-center">
               <Link to="/Feedback2"><img src={happy} alt="" className=" container-fluid" height="100px" width="100px" ></img></Link>
               <p  class="fw-bold fs-3"> Happy</p>
            </div>
              
            </div>

    

            </div>
            </div>
             
        </>
    );
}