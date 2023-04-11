
import React from "react";
import '../Certifications/Certification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import java from '../Certifications/BasicsOfJava1024_1.jpg';
import Crud from '../Certifications/CRUD_page-0001 (1).jpg';
import FrontEnd from '../Certifications/FrontEndDevelopment_page-0001.jpg';
import Fullstack from '../Certifications/FullStack_page-0001.jpg';
import htmlcss from '../Certifications/HTMLandCssin depth_page-0001.jpg';
import Scratch from '../Certifications/scratch_page-0001.jpg';
import javaclasses from '../Certifications/Javaclasses_page-0001.jpg';
import tech from '../Certifications/tech_page-0001.jpg';

 

 
export function Certification(){

 
    return(
  
     
        <>

<div class="container-fluid col-lg-12 aboutdivc">
<div class="container-fluid col-lg-10">
        <p class="justify-content-center text-black fw-bold fs-1 headp">Certifications</p>
        </div>

        <div class="container-fluid justify-content-center py-5 col-lg-10">
            
            <div class="row">
                <div class="col-md-4 mt-3 col-lg-4">
                    <img src={java} class="img-fluid certidivsmal" alt=""/>
                </div>
                <div class="col-md-4 mt-3 col-lg-4 ">
                    <img src={Crud} class="img-fluid certidivsmal" alt=""/>
                </div>
                <div class="col-md-4 mt-3 col-lg-4 ">
                    <img src={Fullstack} class="img-fluid certidivsmal" alt=""/>
                </div>
                <div class="col-md-4 mt-5 mb-5 col-lg-6 ">
                    <img src={FrontEnd} class="img-fluid certidiv" alt=""/>
                </div>
                <div class="col-md-4 mt-5 mb-5 col-lg-6 ">
                    <img src={htmlcss} class="img-fluid certidiv" alt=""/>
                </div>
                <div class="col-md-4 mt-3 col-lg-4 ">
                    <img src={Scratch} class="img-fluid certidivsmal" alt=""/>
                </div>
                <div class="col-md-4 mt-3 col-lg-4 ">
                    <img src={javaclasses} class="img-fluid certidivsmal" alt=""/>
                </div>
                <div class="col-md-4 mt-3 col-lg-4 ">
                    <img src={tech} class="img-fluid certidivsmal" alt=""/>
                </div>
               

            </div>
        </div>
</div>
    

              
 
           
        </>
    );
}