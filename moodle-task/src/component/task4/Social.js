import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import'../task4/Social.css';

export function Social(){
    return(

        <>
       
       <div class="container-fluid row  mx-auto" id="Simg">
       <p className="fs-1 d-flex justify-content-center text-white fw-bold">Social Buttons</p>
            <div class="col-lg-4"></div>
            <div class="col-lg-4 container-fluid row  rounded-3 py-5">

                    <div class="col-lg-4 ">
                    <button type="button "class="btn btn-warning w-100 h-100">Like</button>
                        
                    </div>

                    <div class="col-lg-4">
                    <button type="button" class="btn btn-light w-100 h-100">Commend</button>
              
                    </div>
                    <div class="col-lg-4 ">
                    	
                    <button type="button" class="btn btn-primary w-100 h-100">Share</button></div>
                    </div>


            </div>

            <div class="col-lg-4"></div>



      
      </>

    );

}