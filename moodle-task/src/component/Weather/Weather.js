import React, { useEffect } from "react";
import { useState } from "react";

export function Weather(){
    const [details,setDetails]=useState([]);
    useEffect(()=>{

        fetch('http://api.openweathermap.org/data/2.5/weather?q=kochi&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36')
        .then(data1=>data1.json())
        .then(data2=>setDetails(data2))
    })
    return(
        <>
            <div class="col-lg-4 bg-black">

                <input type="text"  placeholder="CityName"></input>
                <div class="bg-light">
                    {
                            details.map((value,index)=>(
                            <>
                                
                            </>        

                    ))

                            
                }
                
                                <h5 class="fs-6">Name: {value.title}</h5>
                              
                                <h6 class="card-subtitle mb-2">Price: {value.price}</h6>
                               
                                
                </div>


            </div>
        
        </>
    );
} 