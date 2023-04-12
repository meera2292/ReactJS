import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import'../task4/Social.css';

export function Social(){
    return(

        <>
       
       <div class="container-fluid col-lg-12 row  mx-auto" id="Simg">
       <p className="fs-1 d-flex justify-content-center text-white fw-bold">Social Buttons</p>
          
            <div class="col-lg-8 container-fluid row  rounded-3 py-5">

                    <div class="col-lg-4 ">
                    <button type="button "class="btn btn-warning">Like</button>
                    </div>

                    <div class="col-lg-4">
                    <button type="button" class="btn btn-light">Commend</button>
                    </div>

                    <div class="col-lg-4 ">
                    <button type="button" class="btn btn-primary">Share</button>
                    </div>
            </div>


        </div>

           



      
      </>

    );

}