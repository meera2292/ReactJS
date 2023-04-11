
import React from "react";
import '../task2/Congrats.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainimg from '../task2/congrats-card-profile-img.png';
import watchimg from '../task2/congrats-card-watch-img.png';
export function Congrats(){

    return(

        <>
          <div className="d-flex justify-content-center align-items-center bg">
             <div className="col-lg-12 border  bgimg d-flex justify-content-center p-5 "  >     
                    <div >  
                      <h1 className="text-center">Congratulation!!</h1>
                      <div className=" col-lg-12  bg-info "> 
                        <div className="  d-flex justify-content-center">
                            <img src={mainimg} alt="" className="mt-5"></img></div>
                            
                              <p className="  d-flex justify-content-center">Kiran .V</p>
                              <p className="  d-flex justify-content-center">KGiSL Insititute Of Technology Coimbatore,Tamil Nadu </p>
                             <p className="  d-flex justify-content-center"> <img src={watchimg} alt="" className=""></img></p>

                             </div>

                    </div>
            
             </div>
        </div>
        </>
    );
}