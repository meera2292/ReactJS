import React,{ useEffect, useState } from "react";
import '../task11/Products.css';
export function Product(){
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/data.json')
        .then(data1=>data1.json())
        .then(data2=>setDetails(data2))
    })
    return(
        <>
        <div className="conatiner-fluid text-dark mx-auto">
            <h1 className="conatiner-fluid text-dark ms-3 text-center">Hi Hurry Shopping!!!</h1>
            <div className="col-lg-12 container-fluid ms-3 row">
            {
                details.map((value,index)=>(
                    <>
                        <div class="card col-lg-3  d-flex justify-content-center product-card  bg-light">
                            <img src={value.image} class="h-100  imglap" alt="" />
                            <div class="card-body">
                                <h5 class="card-title name fs-6">Name: {value.title}</h5>
                              
                                <h6 class="card-subtitle mb-2">Price: {value.price}</h6>
                               
                                
                            </div>
                        </div>
                        
                    </>
                ))
            }
            </div>
            </div>
        </>
    )
}