import React from "react";
 export function Nodeconnection(){

   fetch('http://localhost:1400/details')
   .then(response=>response.json())
   .then(json=>console.log(json))
    return(
        <>
        
        </>
    );
    }