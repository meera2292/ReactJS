import React from "react";
import '../Login/Login.css';


export function Login(){
    return(

            <>


                    <div class="container-fluid col-lg-6 py-5 mx-auto">
                        <div class="container-fluid col-lg-4 "> </div>

                        <div class="container-fluid  col-lg-6  py-5 mx-auto bg-info">

                        <h2>LogIn</h2>
                        <form class="g-5 py-5" action="/">
                                    <div class="col-md-12">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" required/>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" required/>
                                    </div>
            
            
                                    <div class="col-md-12">
                                        <label for="inputPassword4" class="form-label"></label>
                                        <input type="button" class="form-control bg-light" value="LogIn" />
                                    </div>
                        </form>
                        </div>

                    <div class="container-fluid col-lg-4 "></div> 
                    </div>





            </>



    );

}