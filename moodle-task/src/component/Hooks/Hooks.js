import React, { useState } from "react";
import '../Hooks/Hooks.css'
export function Hooks(){
    const[count,setCount]=useState(0);
    function decrement(){
        setCount(count-1);
    }

return(
    <>
   


   <div class="container-fluid row mx-auto mbghook">
            <div class="col-lg-3"></div>
            <div class="container-fluid col-lg-6 text-center  py-5" >

            <h1 class="text-center">{count}</h1>
                    <input type="button" class="btn btn-secondary m-3  col-lg-4" value="Increment" onClick={()=>setCount(count+1)}/>
                    <input type="button" value="Decrement" class="btn btn-dark m-4  col-lg-4" onClick={decrement}/>
                    <input type="button" value="Reset" class="btn btn-secondary m-4  col-lg-4" onClick={()=>setCount(count*0)}/>

            </div>
            <div class="col-lg-3"></div>
                
              
        </div>
</>
);
}