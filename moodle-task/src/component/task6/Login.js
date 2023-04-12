import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import'./Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation, faLock } from "@fortawesome/free-solid-svg-icons";
import mainimg from '../task6/animated.gif';


export function Login(){
    return(

        <>
        <div className="bg-white container-fluid row mx-auto py-5">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 row bg-info mx-auto rounded-2">
                
                <div  class="col-lg-4 text-center py-5">
                <img src={mainimg} alt="" className="logimg container-fluid rounded-circle"></img>
                </div>
           
                <div  class="col-lg-6 ">
                    <p class="text-center  text-white fw-bold fs-3">Member LogIn</p>

                    <div class=" bg-white rounded-2 m-3 p-3  ">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <input type="text" class="inp col-8" ></input>

                    </div>

                    <div class=" bg-white rounded-2 m-3 p-3  ">
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> <input type="text"  class="inp col-8"  ></input>
                    </div>
                    <div class="m-3 text-center"> 
                    <input type="button"value ="LogIn" className="btn btn-primary"></input>

                    <input type="button"value ="SignUp" className="btn btn-secondary m-3"></input>
                    </div>
                    <p class="text-danger m-3 p-3 fs-6">Forgot<span class="fw-bold">Username/Password</span></p>
                   
 


                </div>
                <div class="col-lg-2"></div>
            </div>
            <div class="col-lg-3"></div>

        </div>
      </>

    );

}
