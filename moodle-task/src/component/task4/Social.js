import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import'../task4/Social.css';

export function Social(){
    return(

        <>
       
       <div class="container-fluid col-lg-12 row  mx-auto Simg">
       <p className="fs-1 d-flex justify-content-center text-secondary fw-bold">Social Buttons</p>
          
            <div class="container-fluid text-center  mbg py-5">
                    <button type="button "class="btn btn-warning m-3">Like</button>
                    <button type="button" class="btn btn-danger m-3">Comment</button>
                    <button type="button" class="btn btn-info m-3">Share</button>

            </div>


        </div>

           



      
      </>

    );

}