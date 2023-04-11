import React, { useState } from "react";

export function Hooks(){
    const[count,setCount]=useState(0);
    function decrement(){
        setCount(count-1);
    }

return(
    <>
   


   <div class="container-fluid row mx-auto">
            <div class="col-lg-4"></div>
            <div class="col-lg-4  row  bg-white rounded-3 py-5 mt-5 mb-5 mx-auto " >

            <h1 class="text-center">{count}</h1>
                    <input type="button" value="increment" onClick={()=>setCount(count+1)}/>
                    <input type="button" value="Decrement" onClick={decrement}/>
                    <input type="button" value="Reset" onClick={()=>setCount(count*0)}/>

            </div>
            <div class="col-lg-4"></div>
                
              
        </div>
</>
);
}