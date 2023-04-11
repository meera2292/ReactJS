// import React, { useState } from "react";
// import {logimg} from '../Register/signup.jpg';
import axios from "axios";
import React from "react";



export function SignIn(){

    
    function insertvalue()

            {
                var fname=document.getElementById("inputfname").value;
                var lname=document.getElementById("inputlname").value;
                var emails=document.getElementById("inputEmail").value;
                var mnumber=document.getElementById("inputnumber").value;
                var pwd=document.getElementById("inputPassword").value;

                var values={
                    "firstName":fname,
                    "lastName":lname,
                    "email":emails,
                    "mobilenum":mnumber,
                    "password":pwd
                    
                }
                axios.post('http://localhost:8080/crud/insert',values);

                
            }

    return(

            <>

        <div className="container-fluid col-lg-6 py-5 mx-auto">


            <div className="col-lg-4 "> 
                
            </div>

            <div className="container-fluid py-5 mx-auto bg-info">

                <h2>SignUp</h2>

                <div>

                </div>

                <div>
                    <form className="row g-3 py-5" action="/Login" >


                        <div className="col-md-6">
                            <label  className="form-label">First name</label>
                            <input type="text" className="form-control" id="inputfname"  required/>
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputlname"  required/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" value="sppp@gmail.com" required/>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Mobile No</label>
                            <input type="number" className="form-control" id="inputnumber" value="987456321" required/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword" value="584" required/>
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="inputcPassword"  value="584" required/>
                        </div>
                      
                      
                       
                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                            <label className="form-check-label" >
                               I accept terms and conditions <span  className="text-danger">and privacy policies</span>
                            </label>
                            </div> 
                        </div>
                        <div className="col-12">
                            <button type="Submit" className="btn btn-primary" onClick={insertvalue}>Sign in</button>
                        </div>

                       
                    </form>
                </div>


            </div>

            <div className="col-lg-4 "> 

            </div>
            

        </div>

                


            </>



    );

}