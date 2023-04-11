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
        <div className="bg-white container-fluid row mx-auto">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 row bg-black mx-auto">
                
                <div  class="col-lg-4 text-center py-5">
                <img src={mainimg} alt="" className="logimg container-fluid rounded-circle"></img>
                </div>
           
                <div  class="col-lg-4">
                    <p class="text-center  text-white fw-bold fs-3">Member LogIn</p>

                    <div class=" bg-white rounded-2 m-3 p-3  ">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <input type="text" class="inp col-6" ></input>

                    </div>

                    <div class=" bg-white rounded-2 m-3 p-3  ">
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> <input type="text"  class="inp col-6"  ></input>
                    </div>
                    <div class="m-3 text-center"> <input type="button"value ="LogIn" className="but rounded-5 border-0 w-50 h-25 fw-bold"></input></div>
                    <p class="text-success m-3 p-3 fs-6">Forgot<span class="fw-bold">Username/Password</span></p>
                    <p class="text-danger m-3 p-3 fs-6">create Your account <span class="fw-bold"></span></p>
 


                </div>
                <div class="col-lg-4"></div>
                </div>
                <div class="col-lg-2"></div>

        </div>
      </>

    );

}
