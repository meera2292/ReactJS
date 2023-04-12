
import React from "react";
import '../task2/Congrats.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainimg from '../task2/congrats-card-profile-img.png';
import watchimg from '../task2/congrats-card-watch-img.png';
import logimg from '../portfolio/Home/pl-25368_aa-removebg.png';
export function Congrats(){

    return(

        <>
          <div className="container-fluid justify-content-center align-items-center bg">
             <div className="col-lg-12  d-flex justify-content-center p-5 "  >     
                    <div >  
                      <h1 className="text-center">Congratulations!!</h1>
                      <div className=" col-lg-12  bg-info p-3"> 
                        <div className="d-flex justify-content-center">
                            <img src={mainimg} alt="" className="mt-5 col-3 rounded-circle img-fluid border border-3"></img></div>
                            
                              <p className="  d-flex justify-content-center fs-2 fw-bold text-black">Kiran V</p>
                              <p className="  d-flex justify-content-center fw-bold text-success">KGiSL Insititute Of Technology Coimbatore,Tamil Nadu </p>
                              <p className="  d-flex justify-content-center"> <img src={watchimg} alt="" className=""></img></p>

                             </div>

                    </div>
            
             </div>
        </div>
        </>
    );
}