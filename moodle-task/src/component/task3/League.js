import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import mainimg from '../task3/rcb-img.png';
import watchimg from '../task3/csk-img.png';
export function League(){
    return(

        <>
         <div class="container-fluid row bg-black mx-auto">
         <h1 className="text-center fw-bold text-white">Super  Over League</h1>    
            <div class="col-lg-2"> </div>
            <div class="col-lg-8  row  py-5">

                <div class="col-lg-12">
                <img src={mainimg} alt="" className="col-lg-6 img-fluid"></img>
                <img src={watchimg} alt="" className="col-lg-6 img-fluid"></img>
                </div>


            </div>

        <div class="col-lg-2"></div>
        </div>
				        




{/* 
        <div className="bg-black p-5 h-75">
            <div >
            <h1 className="text-center fw-bold text-white">Super  Over League</h1>    
            </div>
           <div> 
          
           <div className=" d-flex justify-content-center">
                <img src={mainimg} alt="" className="col-lg-6 containerfluid w-25"></img>
                <img src={watchimg} alt="" className="col-lg-6 containerfluid w-25"></img>
           </div>
                          
           </div>
      </div> */}
      </>

    );

}