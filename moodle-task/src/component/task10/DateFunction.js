
import React, { useState } from "react";

import '../task10/DateFunction.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';




export function DateFunction(){
    const[calcdate,setCalcdate]=useState("");
    function datecal()
    {

        var dat=document.getElementById("mydate").value;
        alert(dat);
        var inputdate=new Date(dat);
        alert(inputdate);
        inputdate.setDate(inputdate.getDate()+90);
        alert(inputdate);
        var outputdate=inputdate.getDate()+"/"+(inputdate.getMonth()+1)+"/"+inputdate.getFullYear();
        alert(outputdate);
        setCalcdate(outputdate);
        
    }
    return(
       
        <>
             <div class="container-fluid row  mx-auto mbgdate">
                <div class="col-lg-4"></div>
                <div class="col-lg-4  justify-content-center bg-white  rounded-3 py-5 mt-5 mb-5 mx-auto " >
            
                    <input type="date"  id="mydate"/>
                    <input class="bg-info m-3" type="button"  value="Submit" onClick={datecal}></input>
                    <h1>{calcdate}</h1>
               
                </div>
                <div class="col-lg-4"></div>
            </div>
				        
        
             
        </>
    );
}