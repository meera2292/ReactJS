
import React from "react";
import '../task8/Fruits.css';
import '../task8/Fruits';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import mainimg from '../task8/banana.png';
import mainimg1 from '../task8/mango.png';
import { useState } from "react";


export function Fruits(){
    const [mangoes,setMangoes] = useState(0);
    const [bananas,setBananas] = useState(0);
    return(

        <>

        <div class="container-fluid row aboutdivf  bg-warning mx-auto">
        <h1 className="text-center">Bob ate <span className="text-white">{mangoes}</span > Mangoes and <span className="text-white">{bananas}</span> Bananas</h1>
            <div class="col-lg-2">

            </div>
            <div class="col-lg-8 container-fluid row  bg-white cdiv rounded-3 py-5 mx-auto">

                <div class="col-lg-6  p-5">
                   
                        <img src={mainimg} alt="btn btn-primary" className=" container-fluid rounded-circle" height="400px"></img>
                
                       <div className="d-flex justify-content-center mt-4"> <button type="button" class="btn btn-primary" onClick={()=>setMangoes(mangoes+1)}>Eat Mango</button></div>
                        
                   
                </div>

                <div class="col-lg-6 bg-white p-5  ">
               
                      <div>  <img src={mainimg1} alt="" className=" container-fluid  rounded-circle"  height="400px"></img></div>
                    <div className="d-flex justify-content-center mt-4">  <button type="button" className="btn btn-primary" onClick={()=>setBananas(bananas+1)}>Eat Bannana</button>
                    </div>  
                      

                </div>
              


            </div>

            <div class="col-lg-2">

            </div>
                
              
        </div>
				        
        



        </>
    );
}