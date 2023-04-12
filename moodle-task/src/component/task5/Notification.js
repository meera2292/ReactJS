import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import'../task5/Notification.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export function Notification(){
    return(

        <>
       <div className=" d-flex justify-content-around mbgn">
    
        <div>
       
        <div className=" m-3 p-3">
            <p class="text-center  text-white fw-bold fs-1">Notifications</p></div>
            <div className=" bg-primary rounded-2 m-3 p-3 div1">
            <p class="text-center text-white">  <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>&nbsp;&nbsp;Information Message</p></div>

            <div className="  bg-success rounded-2  m-3 p-3 div1">
            <p class="text-center  text-white"> <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>&nbsp;&nbsp;Success Message</p></div>

            <div className="  bg-warning rounded-2  m-3 p-3 div1">
            <p class="text-center text-white"> <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>&nbsp;&nbsp;warning Message</p></div>

            <div className=" bg-danger rounded-2  m-3 p-3 div1">
            <p class="text-center  text-white"> <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>&nbsp;&nbsp;Error Message</p></div>
        </div>

       </div>
       
            
               
         
      
      </>

    );

}